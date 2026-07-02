namespace Life_Artery1.Models
{
    public class Hospital
    {
        public int Id { get; set; }

        // Facility Information
        public string Name { get; set; }

        public string LicenseNumber { get; set; }

        public string IssuingAuthority { get; set; }

        public string? LicenseDocument { get; set; }

        // Location & Contact
        public string Governorate { get; set; }

        public string City { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string? GoogleMapsLink { get; set; }

        // Facility Details
        public string MedicalDirectorName { get; set; }

        // Relation with User
        public int UserId { get; set; }

        public Users User { get; set; }
    }
}