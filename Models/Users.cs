namespace Life_Artery1.Models
{
    public class Users
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public string PhoneNumber { get; set; }

        public UserRole Role { get; set; }

        public bool IsApproved { get; set; } = false;

        public enum UserRole
        {
            Admin,
            Hospital,
            BloodBank
        }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}