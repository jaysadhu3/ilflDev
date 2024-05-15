using ilfl.Models.Models;
using ilfl.Services.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ilfl.API.Controllers;

[EnableCors("AllowAll")]
[Route("api/[controller]/[action]")]
[ApiController]

public class ContentController : Controller
{
    private readonly IContentService _contentService;
    private readonly IConfiguration _configuration;

    /// <summary>
    ///     Content Controller
    /// </summary>
    /// <param name="contentService">contentService</param>
    /// <param name="configuration">configuration</param>
    public ContentController(IContentService contentService, IConfiguration configuration)
    {
        _contentService = contentService;
        _configuration = configuration;
    }

    /// <summary>
    ///     Retrive content as per section
    /// </summary>
    /// <param name="sectionId">section</param>
    /// <returns>Content</returns>
    [HttpGet("{sectionId}")]
    public IActionResult GetContent(int sectionId)
    {
        if (sectionId == null)
        {
            return StatusCode(StatusCodes.Status404NotFound, "Section is missing");
        }
        var result = _contentService.GetContent(sectionId);
        return StatusCode(StatusCodes.Status200OK, result);
    }

    /// <summary>
    ///     Add content
    /// </summary>
    /// <param name="content">content</param>
    /// <returns>boolean</returns>
    [HttpPost]
    public IActionResult AddContent(Content content)
    {
        try
        {
            if (!ModelState.IsValid) return StatusCode(StatusCodes.Status400BadRequest, ModelState);

            var result = _contentService.AddContent(content);

            return StatusCode(StatusCodes.Status201Created, result);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    /// <summary>
    ///     Delete record
    /// </summary>
    /// <param name="id"></param>
    /// <returns>Status codes</returns>
    [HttpDelete]
    public IActionResult DeleteContent([FromBody]int id)
    {
        try
        {
            if (id == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "ID is empty");
            }
            _contentService.DeleteContent(id);
            return StatusCode(StatusCodes.Status200OK);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet]
    public IActionResult GetDirectorDetail()
    {
        try
        {
            var results = _contentService.DirectorDetail();
            return StatusCode(StatusCodes.Status200OK, results);
        }
        catch(Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet]
    public IActionResult GetParentSection()
    {
        try
        {
            var results = _contentService.GetParentSection();
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
            var results = _contentService.GetChildSection(ParentId);
            return StatusCode(StatusCodes.Status200OK, results);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }
}
