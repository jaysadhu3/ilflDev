using ilfl.API.StartUp;
using Microsoft.AspNetCore.CookiePolicy;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.RegisterServices(builder.Configuration);
var app = builder.Build();

app.UseCookiePolicy(new CookiePolicyOptions 
{
    HttpOnly = HttpOnlyPolicy.Always,
    Secure = CookieSecurePolicy.Always
});

app.ConfigureSwagger();

app.UseHttpsRedirection();

app.UseRouting();

app.ConfigurationCors(builder.Configuration);

app.UseAuthorization();

app.MapControllers();

app.Run();
