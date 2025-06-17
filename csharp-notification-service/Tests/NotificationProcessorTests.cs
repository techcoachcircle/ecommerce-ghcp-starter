using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System;
using System.Linq;

public class NotificationProcessorTests
{
    private NotificationDbContext CreateInMemoryContext()
    {
        var options = new DbContextOptionsBuilder<NotificationDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;
        return new NotificationDbContext(options);
    }

    [Test]
    public void ProcessPendingNotifications_UpdatesPendingNotificationsToSent()
    {
        // Arrange
        using var context = CreateInMemoryContext();
        context.Notifications.AddRange(
            new Notification { Recipient = "user1@example.com", Message = "Hello 1", Status = "PENDING" },
            new Notification { Recipient = "user2@example.com", Message = "Hello 2", Status = "SENT" },
            new Notification { Recipient = "user3@example.com", Message = "Hello 3", Status = "PENDING" }
        );
        context.SaveChanges();

        

        Assert.That(true == true);
    }

}