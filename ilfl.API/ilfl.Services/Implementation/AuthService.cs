using ilfl.Models.Models;
using ilfl.Repositories.Interface;
using ilfl.Services.Interface;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Services.Implementation;

public class AuthService : IAuthService
{
    private readonly IAuthRepository _authRepository;
    private readonly IConfiguration _configuration;

    public AuthService(IAuthRepository authRepository, IConfiguration configuration)
    {
        _authRepository = authRepository;
        _configuration = configuration;
    }

    public bool CreateUser(User user)
    {
        return _authRepository.CreateUser(user);
    }

    public UserWithToken? IsValid(User user)
    {
        var result = new UserWithToken();
        result.IsValid = _authRepository.IsValid(user);
        if (_authRepository.IsValid(user))
        {
            result.Token = GenerateJwtToken(user.Ifulusername);
            return result;
        }
        result.Token = null;
        return result;
    }

    public string GenerateJwtToken(string username)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, username),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.Role, "Admin")
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is my custom Secret key for authentication"));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: "ILFL",
            audience: "ILFL_User",
            claims: claims,
            expires: DateTime.Now.AddMinutes(60),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
