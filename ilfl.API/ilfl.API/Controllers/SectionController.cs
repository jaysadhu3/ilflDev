using ilfl.Models.Models;
using ilfl.Services.Implementation;
using ilfl.Services.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ilfl.API.Controllers;

[EnableCors("AllowAll")]
[Route("api/[controller]/[action]")]
[ApiController]

public class SectionController : Controller
{
    private readonly ISectionService _sectionService;
    private readonly IConfiguration _configuration;

    /// <summary>
    ///     Content Controller
    /// </summary>
    /// <param name="sectionService">sectionService</param>
    /// <param name="configuration">configuration</param>
    public SectionController(ISectionService sectionService, IConfiguration configuration)
    {
        _sectionService = sectionService;
        _configuration = configuration;
    }
    [HttpGet]
    public IActionResult GetParentSection()
    {
        try
        {
            var results = _sectionService.GetParentSection();
            return StatusCode(StatusCodes.Status200OK, results);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet("{ParentId}")]
    public IActionResult GetChildSection(int ParentId)
    {
        try
        {
            var results = _sectionService.GetChildSection(ParentId);
            return StatusCode(StatusCodes.Status200OK, results);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpPost]
    public IActionResult AddSection(Section section)
    {
        try
        {
            if (!ModelState.IsValid) return StatusCode(StatusCodes.Status400BadRequest, ModelState);

            if (section == null) { return StatusCode(StatusCodes.Status404NotFound, "Details not found"); }

            var result = _sectionService.AddSection(section);

            return StatusCode(StatusCodes.Status201Created, result);


        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet]
    public IActionResult GetAllSection()
    {
        try
        {
            var results = _sectionService.GetAllSection();
            return StatusCode(StatusCodes.Status200OK, results);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}
