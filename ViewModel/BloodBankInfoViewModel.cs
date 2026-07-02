using System.ComponentModel.DataAnnotations;

namespace Life_Artery1.ViewModels
{
    public class BloodBankInfoViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string LicenseNumber { get; set; }

        [Required]
        public string IssuingAuthority { get; set; }

        public string? LicenseDocument { get; set; }

        [Required]
        public string Governorate { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string OfficialPhone { get; set; }

        [Required]
        [EmailAddress]
        public string OfficialEmail { get; set; }

        [Required]
        public string ManagerName { get; set; }

        [Required]
        public string WorkingHours { get; set; }

        [Required]
        public string AccountOwnerName { get; set; }

        public string? Password { get; set; }

        public string Role { get; set; }

        public bool IsApproved { get; set; }

        public DateTime RegistrationDate { get; set; }
    }
}
