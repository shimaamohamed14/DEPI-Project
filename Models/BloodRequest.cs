namespace Life_Artery1.Models
{
    public class BloodRequest
    {
        public int Id { get; set; }

        // Blood Type (A+, O-, ...)
        public string BloodType { get; set; }

        // Number of blood bags needed
        public int UnitsNeeded { get; set; }

        // Pending | Approved | Rejected | Completed
        public string Status { get; set; }

        public DateTime RequestDate { get; set; } = DateTime.Now;

        // Hospital that created the request
        public int HospitalId { get; set; }

        public Hospital Hospital { get; set; }

        public int BloodBankId { get; set; }

        public BloodBank BloodBank { get; set; }
    }
}