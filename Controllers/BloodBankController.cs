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
    [Authorize(Policy = "BloodBankOnly")]
    public class BloodBankController : Controller
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher<Users> _passwordHasher = new();

        public BloodBankController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.Include(b => b.User).FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null) return RedirectToAction("Index", "Home");
            RemoveExpiredBlood(bloodBank.Id);
            return View(bloodBank);
        }

        [HttpGet]
        public IActionResult BloodBankInfo()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.Include(b => b.User).FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null) return RedirectToAction("Index", "Home");

            var vm = new BloodBankInfoViewModel
            {
                Id = bloodBank.Id,
                Name = bloodBank.Name,
                LicenseNumber = bloodBank.LicenseNumber,
                IssuingAuthority = bloodBank.IssuingAuthority,
                LicenseDocument = bloodBank.LicenseDocument,
                Governorate = bloodBank.Governorate,
                City = bloodBank.City,
                Address = bloodBank.Address,
                OfficialPhone = bloodBank.PhoneNumber,
                OfficialEmail = bloodBank.Email,
                ManagerName = bloodBank.ManagerName,
                WorkingHours = $"{bloodBank.WorkingHoursFrom:hh\\:mm} - {bloodBank.WorkingHoursTo:hh\\:mm}",
                AccountOwnerName = bloodBank.User.FullName,
                Role = "Blood Bank",
                IsApproved = bloodBank.User.IsApproved,
                RegistrationDate = bloodBank.User.CreatedAt
            };

            return View(vm);
        }

        [HttpPost]
        public IActionResult BloodBankInfo(BloodBankInfoViewModel model)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.Include(b => b.User).FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null) return RedirectToAction("Index", "Home");

            bool changed = false;

            if (bloodBank.Name != model.Name) { bloodBank.Name = model.Name; changed = true; }
            if (bloodBank.PhoneNumber != model.OfficialPhone) { bloodBank.PhoneNumber = model.OfficialPhone; changed = true; }
            if (bloodBank.Email != model.OfficialEmail) { bloodBank.Email = model.OfficialEmail; changed = true; }
            if (bloodBank.Governorate != model.Governorate) { bloodBank.Governorate = model.Governorate; changed = true; }
            if (bloodBank.City != model.City) { bloodBank.City = model.City; changed = true; }
            if (bloodBank.Address != model.Address) { bloodBank.Address = model.Address; changed = true; }
            if (bloodBank.ManagerName != model.ManagerName) { bloodBank.ManagerName = model.ManagerName; changed = true; }
            if (bloodBank.User.FullName != model.AccountOwnerName) { bloodBank.User.FullName = model.AccountOwnerName; changed = true; }

            if (!string.IsNullOrEmpty(model.WorkingHours))
            {
                var parts = model.WorkingHours.Split('-');
                if (parts.Length == 2)
                {
                    if (TimeOnly.TryParse(parts[0].Trim(), out var from)) bloodBank.WorkingHoursFrom = from;
                    if (TimeOnly.TryParse(parts[1].Trim(), out var to)) bloodBank.WorkingHoursTo = to;
                    changed = true;
                }
            }

            if (!string.IsNullOrEmpty(model.Password))
            {
                bloodBank.User.PasswordHash = _passwordHasher.HashPassword(bloodBank.User, model.Password);
                changed = true;
            }

            if (changed)
            {
                _context.SaveChanges();
                TempData["Success"] = "Profile updated successfully.";
            }

            return RedirectToAction("BloodBankInfo");
        }

        private void RemoveExpiredBlood(int bloodBankId)
        {
            var expired = _context.BloodInventories
                .Where(i => i.BloodBankId == bloodBankId && i.ExpiryDate <= DateTime.Now);
            if (expired.Any())
            {
                _context.BloodInventories.RemoveRange(expired);
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IActionResult GetInventory()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null) return Json(new List<object>());

            RemoveExpiredBlood(bloodBank.Id);

            var inventory = _context.BloodInventories
                .Where(i => i.BloodBankId == bloodBank.Id)
                .OrderBy(i => i.ExpiryDate)
                .Select(i => new
                {
                    i.Id,
                    i.BloodType,
                    Quantity = i.UnitsAvailable,
                    ExpiryDate = i.ExpiryDate.ToString("yyyy-MM-dd"),
                    i.LastUpdated
                })
                .ToList();

            return Json(inventory);
        }

        [HttpPost]
        public IActionResult AddInventory(string bloodType, int quantity, string expiryDate)
        {
            if (string.IsNullOrEmpty(bloodType) || quantity <= 0 || string.IsNullOrEmpty(expiryDate))
                return Json(new { success = false, message = "Invalid data." });

            if (!DateTime.TryParse(expiryDate, out var exp) || exp.Date <= DateTime.Now.Date)
                return Json(new { success = false, message = "Expiration date must be a future date." });

            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null)
                return Json(new { success = false, message = "Blood bank not found." });

            try
            {
                var inventory = new BloodInventory
                {
                    BloodType = bloodType,
                    UnitsAvailable = quantity,
                    ExpiryDate = exp,
                    LastUpdated = DateTime.Now,
                    BloodBankId = bloodBank.Id
                };
                _context.BloodInventories.Add(inventory);
                _context.SaveChanges();
                return Json(new { success = true, message = "Inventory updated!" });
            }
            catch (DbUpdateConcurrencyException)
            {
                return Json(new { success = false, message = "Concurrency conflict. Please try again." });
            }
        }

        [HttpGet]
        public IActionResult GetInventoryItem(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null)
                return Json(null);

            var item = _context.BloodInventories
                .FirstOrDefault(i => i.Id == id && i.BloodBankId == bloodBank.Id);

            if (item == null)
                return Json(null);

            return Json(new
            {
                item.Id,
                item.BloodType,
                Quantity = item.UnitsAvailable,
                ExpiryDate = item.ExpiryDate.ToString("yyyy-MM-dd")
            });
        }

        [HttpPost]
        public IActionResult UpdateInventory(int id, int quantity, string bloodType, string expiryDate)
        {
            if (quantity < 0 || string.IsNullOrEmpty(bloodType) || string.IsNullOrEmpty(expiryDate))
                return Json(new { success = false, message = "Invalid input." });

            if (!DateTime.TryParse(expiryDate, out var parsedExp) || parsedExp.Date <= DateTime.Now.Date)
                return Json(new { success = false, message = "Expiration date must be a future date." });

            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null)
                return Json(new { success = false });

            var item = _context.BloodInventories
                .FirstOrDefault(i => i.Id == id && i.BloodBankId == bloodBank.Id);

            if (item == null)
                return Json(new { success = false, message = "Not found." });

            item.BloodType = bloodType;
            item.UnitsAvailable = quantity;
            if (DateTime.TryParse(expiryDate, out var exp))
                item.ExpiryDate = exp;
            item.LastUpdated = DateTime.Now;
            _context.SaveChanges();

            return Json(new { success = true });
        }

        [HttpPost]
        public IActionResult DeleteInventory(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null)
                return Json(new { success = false });

            var item = _context.BloodInventories
                .FirstOrDefault(i => i.Id == id && i.BloodBankId == bloodBank.Id);

            if (item == null)
                return Json(new { success = false, message = "Not found." });

            _context.BloodInventories.Remove(item);
            _context.SaveChanges();

            return Json(new { success = true });
        }

        [HttpGet]
        public IActionResult GetRequests()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null) return Json(new List<object>());

            var requests = _context.BloodRequests
                .Include(r => r.Hospital)
                .Where(r => r.BloodBankId == bloodBank.Id)
                .OrderByDescending(r => r.RequestDate)
                .Select(r => new
                {
                    r.Id,
                    Hospital = r.Hospital.Name,
                    r.BloodType,
                    Quantity = r.UnitsNeeded,
                    Date = r.RequestDate.ToString("yyyy-MM-dd"),
                    r.Status
                })
                .ToList();

            return Json(requests);
        }

        [HttpGet]
        public IActionResult GetAllPendingRequests()
        {
            var requests = _context.BloodRequests
                .Include(r => r.Hospital)
                .Include(r => r.BloodBank)
                .Where(r => r.Status == "Pending")
                .OrderByDescending(r => r.RequestDate)
                .Select(r => new
                {
                    r.Id,
                    Hospital = r.Hospital.Name,
                    r.BloodType,
                    Quantity = r.UnitsNeeded,
                    Date = r.RequestDate.ToString("yyyy-MM-dd"),
                    r.Status,
                    BloodBankName = r.BloodBank.Name
                })
                .ToList();

            return Json(requests);
        }

        [HttpPost]
        public IActionResult ApproveRequest(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null)
                return Json(new { success = false });

            var request = _context.BloodRequests
                .FirstOrDefault(r => r.Id == id && r.BloodBankId == bloodBank.Id && r.Status == "Pending");

            if (request == null)
                return Json(new { success = false, message = "Request not found." });

            var needed = request.UnitsNeeded;

            var inventoryItems = _context.BloodInventories
                .Where(i => i.BloodBankId == bloodBank.Id && i.BloodType == request.BloodType && i.ExpiryDate > DateTime.Now)
                .OrderBy(i => i.ExpiryDate)
                .ToList();

            var totalAvailable = inventoryItems.Sum(i => i.UnitsAvailable);
            if (totalAvailable < needed)
                return Json(new { success = false, message = "Insufficient inventory." });

            using var tx = _context.Database.BeginTransaction();
            try
            {
                foreach (var item in inventoryItems)
                {
                    if (needed <= 0) break;
                    var take = Math.Min(item.UnitsAvailable, needed);
                    item.UnitsAvailable -= take;
                    item.LastUpdated = DateTime.Now;
                    needed -= take;
                }

                var depleted = inventoryItems.Where(i => i.UnitsAvailable <= 0).ToList();
                if (depleted.Any())
                    _context.BloodInventories.RemoveRange(depleted);

                request.Status = "Approved";
                _context.SaveChanges();
                tx.Commit();
            }
            catch
            {
                tx.Rollback();
                return Json(new { success = false, message = "An error occurred while approving the request." });
            }

            RemoveExpiredBlood(bloodBank.Id);

            return Json(new { success = true, message = "Request approved!" });
        }

        [HttpPost]
        public IActionResult RejectRequest(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null)
                return Json(new { success = false });

            var request = _context.BloodRequests
                .FirstOrDefault(r => r.Id == id && r.BloodBankId == bloodBank.Id && r.Status == "Pending");

            if (request == null)
                return Json(new { success = false, message = "Request not found." });

            request.Status = "Rejected";
            _context.SaveChanges();

            return Json(new { success = true, message = "Request rejected." });
        }

        [HttpGet]
        public IActionResult GetStats()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var bloodBank = _context.BloodBanks.FirstOrDefault(b => b.UserId == userId);
            if (bloodBank == null) return Json(new { });

            RemoveExpiredBlood(bloodBank.Id);

            var inventory = _context.BloodInventories.Where(i => i.BloodBankId == bloodBank.Id);
            var requests = _context.BloodRequests.Where(r => r.BloodBankId == bloodBank.Id);

            var totalUnits = inventory.Sum(i => i.UnitsAvailable);
            var lowStock = inventory.Count(i => i.UnitsAvailable <= 10);
            var pending = requests.Count(r => r.Status == "Pending");
            var completed = requests.Count(r => r.Status == "Completed" || r.Status == "Approved");

            return Json(new
            {
                totalUnits,
                lowStock,
                pending,
                completed
            });
        }
    }
}
