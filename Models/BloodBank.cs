namespace Life_Artery1.Models
{
    public class BloodBank
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string LicenseNumber { get; set; }

        public string IssuingAuthority { get; set; }

        public string? LicenseDocument { get; set; }

        public string Governorate { get; set; }

        public string City { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string? GoogleMapsLink { get; set; }

        public TimeOnly WorkingHoursFrom { get; set; }

        public TimeOnly WorkingHoursTo { get; set; }

        public string ManagerName { get; set; }

        public int UserId { get; set; }

        public Users User { get; set; }

        public ICollection<BloodInventory> BloodInventories { get; set; }
    }
}
