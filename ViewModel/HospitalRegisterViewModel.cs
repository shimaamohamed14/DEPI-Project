using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Life_Artery1.ViewModels
{
    public class HospitalRegisterViewModel : RegisterViewModel
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
        public string MedicalDirectorName { get; set; }
    }
}