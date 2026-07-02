using LifeArtery.Data;
using Life_Artery1.Models;
using Life_Artery1.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Life_Artery1.Controllers
{
    [Authorize(Policy = "HospitalOnly")]
    public class HospitalController : Controller
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher<Users> _passwordHasher = new();

        public HospitalController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var hospital = _context.Hospitals.Include(h => h.User).FirstOrDefault(h => h.UserId == userId);
            if (hospital == null) return RedirectToAction("Index", "Home");
            return View(hospital);
        }

        [HttpGet]
        public IActionResult HospitalInfo()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var hospital = _context.Hospitals.Include(h => h.User).FirstOrDefault(h => h.UserId == userId);
            if (hospital == null) return RedirectToAction("Index", "Home");

            var vm = new HospitalInfoViewModel
            {
                Id = hospital.Id,
                Name = hospital.Name,
                LicenseNumber = hospital.LicenseNumber,
                IssuingAuthority = hospital.IssuingAuthority,
                LicenseDocument = hospital.LicenseDocument,
                Governorate = hospital.Governorate,
                City = hospital.City,
                Address = hospital.Address,
                OfficialPhone = hospital.PhoneNumber,
                OfficialEmail = hospital.Email,
                MedicalDirectorName = hospital.MedicalDirectorName,
                AccountOwnerName = hospital.User.FullName,
                Role = "Hospital",
                IsApproved = hospital.User.IsApproved,
                RegistrationDate = hospital.User.CreatedAt
            };

            return View(vm);
        }

        [HttpPost]
        public IActionResult HospitalInfo(HospitalInfoViewModel model)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var hospital = _context.Hospitals.Include(h => h.User).FirstOrDefault(h => h.UserId == userId);
            if (hospital == null) return RedirectToAction("Index", "Home");

            bool changed = false;

            if (hospital.Name != model.Name) { hospital.Name = model.Name; changed = true; }
            if (hospital.PhoneNumber != model.OfficialPhone) { hospital.PhoneNumber = model.OfficialPhone; changed = true; }
            if (hospital.Email != model.OfficialEmail) { hospital.Email = model.OfficialEmail; changed = true; }
            if (hospital.Governorate != model.Governorate) { hospital.Governorate = model.Governorate; changed = true; }
            if (hospital.City != model.City) { hospital.City = model.City; changed = true; }
            if (hospital.Address != model.Address) { hospital.Address = model.Address; changed = true; }
            if (hospital.MedicalDirectorName != model.MedicalDirectorName) { hospital.MedicalDirectorName = model.MedicalDirectorName; changed = true; }
            if (hospital.User.FullName != model.AccountOwnerName) { hospital.User.FullName = model.AccountOwnerName; changed = true; }

            if (!string.IsNullOrEmpty(model.Password))
            {
                hospital.User.PasswordHash = _passwordHasher.HashPassword(hospital.User, model.Password);
                changed = true;
            }

            if (changed)
            {
                _context.SaveChanges();
                TempData["Success"] = "Profile updated successfully.";
            }

            return RedirectToAction("HospitalInfo");
        }

        [HttpGet]
        public IActionResult GetMyRequests()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == userId);
            if (hospital == null) return Json(new List<object>());

            var requests = _context.BloodRequests
                .Include(r => r.BloodBank)
                .Where(r => r.HospitalId == hospital.Id)
                .OrderByDescending(r => r.RequestDate)
                .Select(r => new
                {
                    r.Id,
                    r.BloodType,
                    Quantity = r.UnitsNeeded,
                    Date = r.RequestDate.ToString("yyyy-MM-dd"),
                    r.Status,
                    BloodBankName = r.BloodBank.Name
                })
                .ToList();

            return Json(requests);
        }

        [HttpGet]
        public IActionResult GetAvailableBlood(string bloodType)
        {
            var query = _context.BloodInventories
                .Include(i => i.BloodBank)
                .Where(i => i.UnitsAvailable > 0 && i.ExpiryDate > DateTime.Now);

            if (!string.IsNullOrEmpty(bloodType))
                query = query.Where(i => i.BloodType == bloodType);

            var inventory = query
                .Select(i => new
                {
                    i.Id,
                    BloodType = i.BloodType,
                    Quantity = i.UnitsAvailable,
                    i.ExpiryDate,
                    BankName = i.BloodBank.Name,
                    BankLocation = i.BloodBank.City + " - " + i.BloodBank.Governorate
                })
                .ToList();

            return Json(inventory);
        }

        [HttpGet]
        public IActionResult GetApprovedBloodBanks()
        {
            var banks = _context.BloodBanks
                .Where(b => b.User.IsApproved)
                .Select(b => new
                {
                    b.Id,
                    b.Name
                })
                .ToList();

            return Json(banks);
        }

        [HttpPost]
        public IActionResult CreateRequest(string bloodType, int quantity, int bloodBankId)
        {
            if (string.IsNullOrEmpty(bloodType) || quantity <= 0 || bloodBankId <= 0)
                return Json(new { success = false, message = "Invalid request data." });

            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == userId);
            if (hospital == null)
                return Json(new { success = false, message = "Hospital not found." });

            var totalAvailable = _context.BloodInventories
                .Where(i => i.BloodBankId == bloodBankId && i.BloodType == bloodType && i.ExpiryDate > DateTime.Now)
                .Sum(i => i.UnitsAvailable);

            if (totalAvailable < quantity)
                return Json(new { success = false, message = $"Only {totalAvailable} units are currently available." });

            var request = new BloodRequest
            {
                BloodType = bloodType,
                UnitsNeeded = quantity,
                Status = "Pending",
                RequestDate = DateTime.Now,
                HospitalId = hospital.Id,
                BloodBankId = bloodBankId
            };

            _context.BloodRequests.Add(request);
            _context.SaveChanges();

            return Json(new { success = true, message = "Request sent successfully!" });
        }

        [HttpPost]
        public IActionResult DeleteRequest(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == userId);
            if (hospital == null) return Json(new { success = false });

            var request = _context.BloodRequests
                .FirstOrDefault(r => r.Id == id && r.HospitalId == hospital.Id && r.Status == "Pending");

            if (request == null)
                return Json(new { success = false, message = "Request not found or cannot be deleted." });

            _context.BloodRequests.Remove(request);
            _context.SaveChanges();

            return Json(new { success = true });
        }

        [HttpGet]
        public IActionResult GetStats()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == userId);
            if (hospital == null) return Json(new { });

            var requests = _context.BloodRequests.Where(r => r.HospitalId == hospital.Id);

            var availableTypes = _context.BloodInventories
                .Where(i => i.UnitsAvailable > 0 && i.ExpiryDate > DateTime.Now)
                .Select(i => i.BloodType)
                .Distinct()
                .Count();

            return Json(new
            {
                availableTypes,
                pending = requests.Count(r => r.Status == "Pending"),
                approved = requests.Count(r => r.Status == "Approved" || r.Status == "Completed"),
                total = requests.Count()
            });
        }
    }
}
