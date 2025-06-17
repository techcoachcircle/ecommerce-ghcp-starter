using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

public class NotificationProcessor
{
    private readonly NotificationDbContext _context;

    public NotificationProcessor(NotificationDbContext context)
    {
        _context = context;
    }

    public async Task ProcessNotificationsAsync()
    {
        while (true)
        {
            ProcessPendingNotifications();
            await Task.Delay(5000); // Wait 5 seconds before next check
        }
    }

    public void ProcessPendingNotifications()
    {
        var pending = _context.Notifications.Where(n => n.Status == "PENDING").ToList();
        foreach (var notification in pending)
        {
            Console.WriteLine($"Sending notification to {notification.Recipient}: {notification.Message}");
            notification.Status = "SENT";
            notification.Sent_At = DateTime.Now;
        }

        _context.SaveChanges();
    }
}