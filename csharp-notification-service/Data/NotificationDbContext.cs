using Microsoft.EntityFrameworkCore;

public class NotificationDbContext : DbContext
{
    public DbSet<Notification> Notifications { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {

        // Construct the path to the SQLite database
        string dbPath = Path.Combine(Directory.GetCurrentDirectory(), @"..\..\..\..\db\ecommerce-db.sqlite3");
        string connectionString = $"Data Source={dbPath}";
        options.UseSqlite(connectionString);
    }
}