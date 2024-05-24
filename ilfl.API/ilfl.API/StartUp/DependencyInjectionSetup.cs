using ilfl.Repositories.Entities;
using ilfl.Repositories.Implementation;
using ilfl.Repositories.Interface;
using ilfl.Services.Implementation;
using ilfl.Services.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace ilfl.API.StartUp;

/// <summary>
/// Dependency Injection Setup
/// </summary>
public static class DependencyInjectionSetup
{

    /// <summary>
    /// Register Services
    /// </summary>
    /// <param name="services">services</param>
    /// <param name="configuration">configuration</param>
    /// <returns>services</returns>
    public static IServiceCollection RegisterServices(this IServiceCollection services, IConfiguration configuration)
    {
        // Add services to the container.
        services.AddDbContext<AppDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("DBConnection"), compatibility => compatibility.UseCompatibilityLevel(110));
        });

        services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", corsPolicyBuilder =>
            {
                corsPolicyBuilder.AllowAnyHeader().WithOrigins(configuration["FrontEndBaseUrl"] ?? string.Empty).WithMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD");
            });
        });

        // DBContext Binding
        services.AddTransient<DbContext, AppDbContext>();

        // Repositories Binding
        services.AddTransient<IAuthRepository, AuthRepository>();
        services.AddTransient<IContentRepository, ContentRepository>();
        services.AddTransient<ISectionRepository, SectionRepository>();

        // Services Binding
        services.AddTransient<IAuthService, AuthService>();
        services.AddTransient<IContentService, ContentService>();
        services.AddTransient<ISectionService, SectionService>();
        services.AddControllers();
        
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "ilfl.API",
                Version = "v1",
                Description = "ilfl APIs",
                TermsOfService = new Uri(configuration["FrontEndBaseUrl"] ?? string.Empty),
                Contact = new OpenApiContact
                {
                    Name = "Ilfl"
                },
                License = new OpenApiLicense
                {
                    Name = "Ilfl API License",
                    Url = new Uri(configuration["FrontEndBaseUrl"] ?? string.Empty),
                }
            });
            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
            {
                Name = "Authorization",
                Type = SecuritySchemeType.ApiKey,
                Scheme = "Bearer",
                BearerFormat = "JWT",
                In = ParameterLocation.Header,
                Description = "JWT Authorization header using the Bearer scheme."
            });

            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    Array.Empty<string>()
                }
            });
        });

        return services;
    }
}
