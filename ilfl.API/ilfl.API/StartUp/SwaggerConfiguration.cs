using Swashbuckle.AspNetCore.SwaggerUI;

namespace LearnerPortal.API.StartUp;

/// <summary>
/// Swagger Configuration
/// </summary>
public static class SwaggerConfiguration
{
    /// <summary>
    /// Configure Swagger
    /// </summary>
    /// <param name="app"></param>
    /// <returns>app</returns>
    public static WebApplication ConfigureSwagger(this WebApplication app)
    {
        // Configure the HTTP request pipeline.
        app.UseSwagger();

        // this is to remove schema from Swagger UI
        app.UseSwaggerUI(options =>
        {
            options.DefaultModelsExpandDepth(-1);
            options.DocExpansion(DocExpansion.None);
            options.EnableTryItOutByDefault();
        });

        return app;
    }
}
