using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var dbContext = new NotificationDbContext();
        dbContext.Database.EnsureCreated();

        var processor = new NotificationProcessor(dbContext);
        await processor.ProcessNotificationsAsync();
    }
}