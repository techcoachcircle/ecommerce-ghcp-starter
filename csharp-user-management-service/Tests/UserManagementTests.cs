using csharp_user_management_service.Data;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace csharp_user_management_service;

public class UserManagementTests
{
    private UserManagementDbContext CreateInMemoryContext()
    {
        var options = new DbContextOptionsBuilder<UserManagementDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;
        return new UserManagementDbContext(options);
    }

    [Test]
    public void sample_test()
    {
        // Arrange
        using var context = CreateInMemoryContext();
      
        //add items to context
        context.SaveChanges();



        Assert.That(true == true);
    }

}
