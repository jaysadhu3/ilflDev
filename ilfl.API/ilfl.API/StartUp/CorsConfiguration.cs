namespace LearnerPortal.API.StartUp;

/// <summary>
/// CORS Configuration
/// </summary>
public static class CorsConfiguration
{
    /// <summary>
    /// Configure CORS
    /// </summary>
    /// <param name="app"></param>
    /// <param name="configuration"></param>
    /// <returns>app</returns>
    public static WebApplication ConfigurationCors(this WebApplication app, IConfiguration configuration)
    {
        // this is to remove schema from CORS UI
        app.UseCors(options =>
        {
            options.AllowAnyHeader().WithOrigins(configuration["FrontEndBaseUrl"] ?? string.Empty).WithMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD").AllowCredentials();
            options.AllowAnyHeader().WithOrigins(configuration["StaffHubFrontEndBaseUrl"] ?? string.Empty).WithMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD").AllowCredentials();
        });

        return app;
    }
}
