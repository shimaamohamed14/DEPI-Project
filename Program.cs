using LifeArtery.Data;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Life_Artery1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllersWithViews();

            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(
                    builder.Configuration.GetConnectionString("DefaultConnection")
                ));

            builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    options.LoginPath = "/Account/Login";
                    options.AccessDeniedPath = "/Account/Login";
                    options.LogoutPath = "/Account/Logout";
                });

            builder.Services.AddAuthorization(options =>
            {
                options.AddPolicy("AdminOnly", policy =>
                    policy.RequireClaim(ClaimTypes.Role, "Admin"));
                options.AddPolicy("HospitalOnly", policy =>
                    policy.RequireClaim(ClaimTypes.Role, "Hospital"));
                options.AddPolicy("BloodBankOnly", policy =>
                    policy.RequireClaim(ClaimTypes.Role, "BloodBank"));
                options.AddPolicy("Authenticated", policy =>
                    policy.RequireAuthenticatedUser());
            });

            builder.Services.AddSession();

            var app = builder.Build();

            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseSession();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            // Remove admin accounts except System Admin (Id=1)
            using (var scope = app.Services.CreateScope())
            {
                var ctx = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                var extraAdmins = ctx.Users.Where(u => u.Role == Life_Artery1.Models.Users.UserRole.Admin && u.Id != 1).ToList();
                if (extraAdmins.Any())
                {
                    ctx.Users.RemoveRange(extraAdmins);
                    ctx.SaveChanges();
                }
            }

            app.Run();
        }
    }
}
