using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Configure Kestrel to listen only on HTTP port 8081 (no HTTPS)
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(8081); // Only HTTP, no HTTPS endpoint configured
});

var app = builder.Build();

// Do NOT add app.UseHttpsRedirection(); or any HTTPS middleware

app.MapGet("/", () => "Hello, World!");

app.Run();
