using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Life_Artery1.ViewModels
{
    public class BloodBankRegisterViewModel : RegisterViewModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string LicenseNumber { get; set; }

        [Required]
        public string IssuingAuthority { get; set; }

        public IFormFile? LicenseDocument { get; set; }

        [Required]
        public string Governorate { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Address { get; set; }

        public string? GoogleMapsLink { get; set; }

        [Required]
        public string ManagerName { get; set; }

        [Required]
        public TimeOnly WorkingHoursFrom { get; set; }

        [Required]
        public TimeOnly WorkingHoursTo { get; set; }
    }
}