using LifeArtery.Data;
using Life_Artery1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Life_Artery1.Controllers
{
    [Authorize(Policy = "AdminOnly")]
    public class AdminController : Controller
    {
        private readonly AppDbContext _context;

        public AdminController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var users = _context.Users.Where(u => u.Role != Users.UserRole.Admin).OrderByDescending(u => u.CreatedAt).ToList();

            var lastActivity = _context.Users.OrderByDescending(u => u.CreatedAt).FirstOrDefault();
            var lastApproval = _context.BloodRequests.OrderByDescending(r => r.RequestDate).FirstOrDefault();
            var latestDate = lastActivity?.CreatedAt;
            if (lastApproval != null && (latestDate == null || lastApproval.RequestDate > latestDate))
                latestDate = lastApproval.RequestDate;

            ViewBag.LastUpdated = latestDate;
            return View(users);
        }

        [HttpPost]
        public IActionResult Approve(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) return NotFound();
            user.IsApproved = true;
            _context.SaveChanges();
            TempData["Success"] = $"User {user.FullName} approved successfully.";
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Reject(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) return NotFound();

            var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == id);
            if (hospital != null) _context.Hospitals.Remove(hospital);

            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == id);
            if (bloodBank != null)
            {
                var inventories = _context.BloodInventories.Where(i => i.BloodBankId == bloodBank.Id);
                _context.BloodInventories.RemoveRange(inventories);
                _context.BloodBanks.Remove(bloodBank);
            }

            _context.Users.Remove(user);
            _context.SaveChanges();
            TempData["Success"] = $"User rejected and removed.";
            return RedirectToAction("Index");
        }

        public IActionResult Details(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) return NotFound();

            if (user.Role == Users.UserRole.Hospital)
            {
                var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == id);
                if (hospital != null)
                {
                    ViewBag.EntityName = hospital.Name;
                    ViewBag.LicenseNumber = hospital.LicenseNumber;
                    ViewBag.IssuingAuthority = hospital.IssuingAuthority;
                    ViewBag.LicenseDocument = hospital.LicenseDocument;
                    ViewBag.Governorate = hospital.Governorate;
                    ViewBag.City = hospital.City;
                    ViewBag.Address = hospital.Address;
                    ViewBag.Phone = hospital.PhoneNumber;
                    ViewBag.Email = hospital.Email;
                    ViewBag.GoogleMapsLink = hospital.GoogleMapsLink;
                    ViewBag.DirectorName = hospital.MedicalDirectorName;
                    ViewBag.RoleLabel = "Hospital";
                }
            }
            else if (user.Role == Users.UserRole.BloodBank)
            {
                var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == id);
                if (bloodBank != null)
                {
                    ViewBag.EntityName = bloodBank.Name;
                    ViewBag.LicenseNumber = bloodBank.LicenseNumber;
                    ViewBag.IssuingAuthority = bloodBank.IssuingAuthority;
                    ViewBag.LicenseDocument = bloodBank.LicenseDocument;
                    ViewBag.Governorate = bloodBank.Governorate;
                    ViewBag.City = bloodBank.City;
                    ViewBag.Address = bloodBank.Address;
                    ViewBag.Phone = bloodBank.PhoneNumber;
                    ViewBag.Email = bloodBank.Email;
                    ViewBag.GoogleMapsLink = bloodBank.GoogleMapsLink;
                    ViewBag.DirectorName = bloodBank.ManagerName;
                    ViewBag.RoleLabel = "Blood Bank";
                }
            }
            else
            {
                ViewBag.RoleLabel = "Admin";
                ViewBag.Phone = user.PhoneNumber;
            }

            ViewBag.FullName = user.FullName;
            ViewBag.UserEmail = user.Email;
            ViewBag.UserRole = user.Role.ToString();
            ViewBag.IsApproved = user.IsApproved;
            ViewBag.RegisteredDate = user.CreatedAt;
            ViewBag.UserId = user.Id;

            return View();
        }

        [HttpGet]
        public IActionResult GetStats()
        {
            var totalUsers = _context.Users.Count();
            var totalHospitals = _context.Hospitals.Count();
            var totalBloodBanks = _context.BloodBanks.Count();
            var totalRequests = _context.BloodRequests.Count();
            var totalBloodUnits = _context.BloodInventories.Sum(i => i.UnitsAvailable);
            var pendingUsers = _context.Users.Count(u => !u.IsApproved);
            var approvedUsers = _context.Users.Count(u => u.IsApproved);
            var pendingRequests = _context.BloodRequests.Count(r => r.Status == "Pending");

            return Json(new
            {
                totalUsers,
                totalHospitals,
                totalBloodBanks,
                totalRequests,
                totalBloodUnits,
                pendingUsers,
                approvedUsers,
                pendingRequests
            });
        }

        [HttpGet]
        public IActionResult GetRequests()
        {
            var requests = _context.BloodRequests
                .Include(r => r.Hospital)
                .Include(r => r.BloodBank)
                .OrderByDescending(r => r.RequestDate)
                .ToList();

            var result = requests.Select(r => new
            {
                r.Id,
                Hospital = r.Hospital?.Name ?? "N/A",
                r.BloodType,
                Quantity = r.UnitsNeeded,
                Date = r.RequestDate.ToString("yyyy-MM-dd"),
                r.Status,
                BloodBankName = r.BloodBank?.Name ?? "N/A"
            });

            return Json(result);
        }

        [HttpGet]
        public IActionResult GetContactMessages()
        {
            var messages = _context.ContactMessages
                .OrderByDescending(m => m.SubmittedAt)
                .Select(m => new
                {
                    m.Id,
                    m.FullName,
                    m.Email,
                    m.Subject,
                    m.Message,
                    Date = m.SubmittedAt.ToString("yyyy-MM-dd HH:mm"),
                    m.IsRead
                })
                .ToList();

            return Json(messages);
        }

        [HttpPost]
        public IActionResult DeleteUser(int id)
        {
            var currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (currentUserId == id.ToString())
            {
                TempData["Error"] = "You cannot delete your own account.";
                return RedirectToAction("Index");
            }

            var user = _context.Users.Find(id);
            if (user == null) return NotFound();

            try
            {
                var hospital = _context.Hospitals.FirstOrDefault(h => h.UserId == id);
                if (hospital != null)
                {
                    var hospRequests = _context.BloodRequests.Where(r => r.HospitalId == hospital.Id);
                    _context.BloodRequests.RemoveRange(hospRequests);
                    _context.Hospitals.Remove(hospital);
                }

                var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == id);
                if (bloodBank != null)
                {
                    var bbRequests = _context.BloodRequests.Where(r => r.BloodBankId == bloodBank.Id);
                    _context.BloodRequests.RemoveRange(bbRequests);
                    var inventories = _context.BloodInventories.Where(i => i.BloodBankId == bloodBank.Id);
                    _context.BloodInventories.RemoveRange(inventories);
                    _context.BloodBanks.Remove(bloodBank);
                }

                _context.Users.Remove(user);
                _context.SaveChanges();
                TempData["Success"] = $"User {user.FullName} deleted successfully.";
            }
            catch (Exception ex)
            {
                TempData["Error"] = $"Failed to delete user: {ex.Message}";
            }

            return RedirectToAction("Index");
        }
    }
}
