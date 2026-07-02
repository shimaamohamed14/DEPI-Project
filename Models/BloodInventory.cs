namespace Life_Artery1.Models
{
    public class BloodInventory
    {
        public int Id { get; set; }

        // A+, A-, B+, B-, AB+, AB-, O+, O-
        public string BloodType { get; set; }

        // Number of available blood bags
        public int UnitsAvailable { get; set; }

        // Expiration date of this blood stock
        public DateTime ExpiryDate { get; set; }

        // Last update
        public DateTime LastUpdated { get; set; } = DateTime.Now;

        // Relation with Blood Bank
        public int BloodBankId { get; set; }

        public BloodBank BloodBank { get; set; }
    }
}