using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Life_Artery1.Migrations
{
    /// <inheritdoc />
    public partial class SeedAdminUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Hospitals_UserId",
                table: "Hospitals");

            migrationBuilder.DropIndex(
                name: "IX_BloodBanks_UserId",
                table: "BloodBanks");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedAt", "Email", "FullName", "IsApproved", "PasswordHash", "PhoneNumber", "Role" },
                values: new object[] { 1, new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc), "admin@lifeartery.com", "System Admin", true, "AQAAAAIAAYagAAAAEHrbNFielYzUaaKYmeszOyDX9+vul3Bpnkup7iENlE+859vNOyFqHXYBaIXX95ZkRw==", "01000000000", 0 });

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_UserId",
                table: "Hospitals",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BloodBanks_UserId",
                table: "BloodBanks",
                column: "UserId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Hospitals_UserId",
                table: "Hospitals");

            migrationBuilder.DropIndex(
                name: "IX_BloodBanks_UserId",
                table: "BloodBanks");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_UserId",
                table: "Hospitals",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodBanks_UserId",
                table: "BloodBanks",
                column: "UserId");
        }
    }
}
