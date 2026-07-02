using LifeArtery.Data;
using Life_Artery1.Models;
using Life_Artery1.ViewModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Life_Artery1.Controllers
{
    public class AccountController : Controller
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher<Users> _passwordHasher = new();
        private readonly IWebHostEnvironment _env;

        public AccountController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpGet]
        public IActionResult HospitalRegister()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> HospitalRegister(HospitalRegisterViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            if (_context.Users.Any(u => u.Email == model.Email))
            {
                ModelState.AddModelError("Email", "Email already exists.");
                return View(model);
            }

            Users user = new Users
            {
                FullName = model.FullName,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                Role = Users.UserRole.Hospital,
                IsApproved = false
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, model.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            string? licensePath = null;
            if (model.LicenseDocument != null && model.LicenseDocument.Length > 0)
            {
                var uploadsDir = Path.Combine(_env.WebRootPath, "uploads", "licenses");
                Directory.CreateDirectory(uploadsDir);
                var fileName = $"hosp_{user.Id}_{Guid.NewGuid()}{Path.GetExtension(model.LicenseDocument.FileName)}";
                var filePath = Path.Combine(uploadsDir, fileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.LicenseDocument.CopyToAsync(stream);
                }
                licensePath = "/uploads/licenses/" + fileName;
            }

            Hospital hospital = new Hospital
            {
                Name = model.Name,
                LicenseNumber = model.LicenseNumber,
                IssuingAuthority = model.IssuingAuthority,
                LicenseDocument = licensePath,
                Governorate = model.Governorate,
                City = model.City,
                Address = model.Address,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                GoogleMapsLink = model.GoogleMapsLink,
                MedicalDirectorName = model.MedicalDirectorName,
                UserId = user.Id
            };

            _context.Hospitals.Add(hospital);
            await _context.SaveChangesAsync();

            TempData["Success"] = "Registration completed successfully. Wait for admin approval.";
            return RedirectToAction("Login");
        }

        [HttpGet]
        public IActionResult BloodBankRegister()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> BloodBankRegister(BloodBankRegisterViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            if (_context.Users.Any(u => u.Email == model.Email))
            {
                ModelState.AddModelError("Email", "Email already exists.");
                return View(model);
            }

            Users user = new Users
            {
                FullName = model.FullName,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                Role = Users.UserRole.BloodBank,
                IsApproved = false
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, model.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            string? licensePath = null;
            if (model.LicenseDocument != null && model.LicenseDocument.Length > 0)
            {
                var uploadsDir = Path.Combine(_env.WebRootPath, "uploads", "licenses");
                Directory.CreateDirectory(uploadsDir);
                var fileName = $"bb_{user.Id}_{Guid.NewGuid()}{Path.GetExtension(model.LicenseDocument.FileName)}";
                var filePath = Path.Combine(uploadsDir, fileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.LicenseDocument.CopyToAsync(stream);
                }
                licensePath = "/uploads/licenses/" + fileName;
            }

            BloodBank bloodBank = new BloodBank
            {
                Name = model.Name,
                LicenseNumber = model.LicenseNumber,
                IssuingAuthority = model.IssuingAuthority,
                LicenseDocument = licensePath,
                Governorate = model.Governorate,
                City = model.City,
                Address = model.Address,
                PhoneNumber = model.PhoneNumber,
                Email = model.Email,
                GoogleMapsLink = model.GoogleMapsLink,
                ManagerName = model.ManagerName,
                WorkingHoursFrom = model.WorkingHoursFrom,
                WorkingHoursTo = model.WorkingHoursTo,
                UserId = user.Id
            };

            _context.BloodBanks.Add(bloodBank);
            await _context.SaveChangesAsync();

            TempData["Success"] = "Registration completed successfully. Wait for admin approval.";
            return RedirectToAction("Login");
        }

        [HttpGet]
        public IActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToDashboard();
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var user = _context.Users.FirstOrDefault(u => u.Email == model.Email);

            if (user == null)
            {
                ModelState.AddModelError("", "Invalid email or password.");
                return View(model);
            }

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, model.Password);

            if (result == PasswordVerificationResult.Failed)
            {
                ModelState.AddModelError("", "Invalid email or password.");
                return View(model);
            }

            if (!user.IsApproved)
            {
                ModelState.AddModelError("", "Your account is waiting for admin approval.");
                return View(model);
            }

            string entityName = user.FullName;
            if (user.Role == Users.UserRole.Hospital)
            {
                var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == user.Id);
                if (hospital != null) entityName = hospital.Name;
            }
            else if (user.Role == Users.UserRole.BloodBank)
            {
                var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == user.Id);
                if (bloodBank != null) entityName = bloodBank.Name;
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.FullName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString()),
                new Claim("EntityName", entityName)
            };

            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var principal = new ClaimsPrincipal(identity);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);

            return RedirectToDashboard(user.Role.ToString());
        }

        private IActionResult RedirectToDashboard(string? role = null)
        {
            role ??= User.FindFirstValue(ClaimTypes.Role);
            return role switch
            {
                "Admin" => RedirectToAction("Index", "Admin"),
                "Hospital" => RedirectToAction("Index", "Hospital"),
                "BloodBank" => RedirectToAction("Index", "BloodBank"),
                _ => RedirectToAction("Index", "Home")
            };
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Home");
        }
    }
}
