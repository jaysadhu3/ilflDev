
using ilfl.Models.Models;
using ilfl.Services.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ilfl.API.Controllers;

[EnableCors("AllowAll")]
[Route("api/[controller]/[action]")]
[ApiController]
public class AuthController : Controller
{
    private readonly IAuthService _authService;
    private readonly IConfiguration _configuration;

    /// <summary>
    /// Authentication Controller
    /// </summary>
    /// <param name="authService">authService</param>
    /// <param name="configuration">configuration</param>
    public AuthController(IAuthService authService, IConfiguration configuration) 
    {
        _authService = authService;
        _configuration = configuration;
    }

    /// <summary>
    ///     Verify user
    /// </summary>
    /// <param name="user">user</param>
    /// <returns></returns>
    [HttpPost]
    public IActionResult VerifyUser([FromBody]User user)
    {
        try
        {
            if (user == null)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Username and Password is missing.");
            }

            if (!ModelState.IsValid)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Username and Password is missing.");
            }

            var userDetails = _authService.IsValid(user);
            if (userDetails.IsValid) {
                return StatusCode(StatusCodes.Status200OK, userDetails);
            } else
            {
                return StatusCode(StatusCodes.Status400BadRequest, userDetails);
            }
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,ex.Message);
        }
    }

    [HttpPost]
    public IActionResult CreateUser([FromBody] User user)
    {
        try
        {
            if (user == null)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Username and Password is missing.");
            }

            if (!ModelState.IsValid)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Username and Password is missing.");
            }

            var isValid = _authService.CreateUser(user);
            return StatusCode(StatusCodes.Status200OK, isValid);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }
}