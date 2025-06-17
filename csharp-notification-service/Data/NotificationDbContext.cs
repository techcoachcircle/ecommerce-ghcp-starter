using Microsoft.EntityFrameworkCore;
using System;
using System.IO;

public class NotificationDbContext : DbContext
{
    public NotificationDbContext()
    {
    }

    public NotificationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Notification> Notifications { get; set; }

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