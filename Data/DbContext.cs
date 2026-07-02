using Life_Artery1.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace LifeArtery.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Users> Users { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }
        public DbSet<BloodBank> BloodBanks { get; set; }
        public DbSet<BloodInventory> BloodInventories { get; set; }
        public DbSet<BloodRequest> BloodRequests { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<BloodRequest>()
                .HasOne(r => r.Hospital).WithMany()
                .HasForeignKey(r => r.HospitalId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<BloodRequest>()
                .HasOne(r => r.BloodBank).WithMany()
                .HasForeignKey(r => r.BloodBankId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Hospital>()
                .HasOne(h => h.User).WithOne()
                .HasForeignKey<Hospital>(h => h.UserId).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<BloodBank>()
                .HasOne(b => b.User).WithOne()
                .HasForeignKey<BloodBank>(b => b.UserId).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<BloodInventory>()
                .HasOne(i => i.BloodBank).WithMany(b => b.BloodInventories)
                .HasForeignKey(i => i.BloodBankId).OnDelete(DeleteBehavior.Cascade);

            // Seed admin user
            var passwordHasher = new PasswordHasher<Users>();
            var adminUser = new Users
            {
                Id = 1,
                FullName = "System Admin",
                Email = "admin@lifeartery.com",
                PhoneNumber = "01000000000",
                Role = Life_Artery1.Models.Users.UserRole.Admin,
                IsApproved = true,
                CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
            };
            adminUser.PasswordHash = passwordHasher.HashPassword(adminUser, "Admin123@");
            modelBuilder.Entity<Users>().HasData(adminUser);
        }
    }
}
