using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp_user_management_service.Data
{
    public class UserManagementDbContext : DbContext
    {
        public UserManagementDbContext()
        {
        }

        public UserManagementDbContext(DbContextOptions options) : base(options)
        {
        }


        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                // Construct the path to the SQLite database
                string dbPath = Path.Combine(Directory.GetCurrentDirectory(), @"..\..\..\..\db\ecommerce-db.sqlite3");
                string connectionString = $"Data Source={dbPath}";
                options.UseSqlite(connectionString);
            }
        }
    }
}
