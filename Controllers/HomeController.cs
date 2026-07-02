using System.Diagnostics;
using LifeArtery.Data;
using Life_Artery1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Life_Artery1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, AppDbContext context, IConfiguration configuration)
        {
            _logger = logger;
            _context = context;
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            var hospitalsCount = _context.Users.Count(u => u.Role == Users.UserRole.Hospital && u.IsApproved);
            var bloodBanksCount = _context.Users.Count(u => u.Role == Users.UserRole.BloodBank && u.IsApproved);
            var unitsManaged = _context.BloodInventories.Sum(i => i.UnitsAvailable);

            var bloodTypes = new[] { "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-" };
            var bloodAvailability = bloodTypes.ToDictionary(
                bt => bt,
                bt => _context.BloodInventories.Where(i => i.BloodType == bt).Sum(i => i.UnitsAvailable)
            );

            ViewBag.HospitalsCount = hospitalsCount;
            ViewBag.BloodBanksCount = bloodBanksCount;
            ViewBag.UnitsManaged = unitsManaged;
            ViewBag.BloodAvailability = bloodAvailability;

            return View();
        }

        public IActionResult About()
        {
            var partnerHospitals = _context.Users.Count(u => u.Role == Users.UserRole.Hospital && u.IsApproved);
            ViewBag.PartnerHospitals = partnerHospitals;
            return View();
        }

        [HttpGet]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(string fullName, string email, string subject, string message)
        {
            if (string.IsNullOrEmpty(fullName) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(subject) || string.IsNullOrEmpty(message))
            {
                TempData["Error"] = "All fields are required.";
                return RedirectToAction("Contact");
            }
            if (fullName.Length < 3)
            {
                TempData["Error"] = "Full name must be at least 3 characters.";
                return RedirectToAction("Contact");
            }
            if (message.Length < 10 || message.Length > 1000)
            {
                TempData["Error"] = "Message must be between 10 and 1000 characters.";
                return RedirectToAction("Contact");
            }

            try
            {
                var contactMsg = new ContactMessage
                {
                    FullName = fullName,
                    Email = email,
                    Subject = subject,
                    Message = message,
                    SubmittedAt = DateTime.Now
                };
                _context.ContactMessages.Add(contactMsg);
                _context.SaveChanges();

                var smtpSection = _configuration.GetSection("SmtpSettings");
                var host = smtpSection["Host"];
                var portStr = smtpSection["Port"];
                var username = smtpSection["Username"];
                var password = smtpSection["Password"];
                var supportEmail = "lifearterysupport@gmail.com";

                if (!string.IsNullOrEmpty(username) && !string.IsNullOrEmpty(password))
                {
                    try
                    {
                        var port = int.TryParse(portStr, out var p) ? p : 587;
                        using var client = new System.Net.Mail.SmtpClient(host, port);
                        client.EnableSsl = true;
                        client.Credentials = new System.Net.NetworkCredential(username, password);

                        var mailMessage = new System.Net.Mail.MailMessage
                        {
                            From = new System.Net.Mail.MailAddress(username),
                            Subject = $"Contact Form: {subject}",
                            Body = $"Name: {fullName}\nEmail: {email}\nSubject: {subject}\nMessage:\n{message}",
                            IsBodyHtml = false
                        };
                        mailMessage.To.Add(supportEmail);
                        mailMessage.ReplyToList.Add(new System.Net.Mail.MailAddress(email));
                        client.Send(mailMessage);
                    }
                    catch (Exception ex)
                    {
                        TempData["Error"] = ex.ToString();
                        return RedirectToAction("Contact");
                    }
                }
            }
            catch (Exception ex)
            {
                TempData["Error"] = ex.ToString();
                return RedirectToAction("Contact");
            }

            TempData["Success"] = "Your message has been received successfully. We will resolve your issue as soon as possible.";
            return RedirectToAction("Contact");

            return RedirectToAction("Contact");
        }

        [HttpGet]
        public IActionResult Search(string bloodType)
        {
            if (string.IsNullOrEmpty(bloodType))
                return View();

            var results = _context.BloodInventories
                .Include(i => i.BloodBank)
                .Where(i => i.BloodType == bloodType)
                .Select(i => new
                {
                    BankName = i.BloodBank.Name,
                    Location = i.BloodBank.City + " - " + i.BloodBank.Governorate,
                    Phone = i.BloodBank.PhoneNumber,
                    i.BloodType,
                    Units = i.UnitsAvailable,
                    Status = i.UnitsAvailable <= 0 ? "Unavailable" :
                             i.UnitsAvailable <= 5 ? "Critical" :
                             i.UnitsAvailable <= 15 ? "Low Stock" : "Available"
                })
                .ToList();

            return Json(results);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
