using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Services.Implementation;
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
        var result = _contentService.GetContent(sectionId);
        return StatusCode(StatusCodes.Status200OK, result);
    }

    [HttpGet("{id}")]
    public IActionResult GetContentById(int id)
    {
        var result = _contentService.GetContentById(id);
        return StatusCode(StatusCodes.Status200OK, result);
    }

    /// <summary>
    ///     Add content
    /// </summary>
    /// <param name="content">content</param>
    /// <returns>boolean</returns>
    [HttpPost]
    public async Task<IActionResult> AddContent([FromForm] IFormFile file, [FromForm] string displayName, [FromForm] string section, [FromForm] string? description)
    {
        try
        {
            if (file == null) { return StatusCode(StatusCodes.Status400BadRequest, "File is missing"); }

            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", _configuration["FileFolderName"], file.FileName);

            var isFileExist = _contentService.IsFileExist(file.FileName);

            if (isFileExist)
            {
                return StatusCode(StatusCodes.Status208AlreadyReported, false);
            }

            var content = new Ifctcontent();
            content.IfctdisplayName = displayName;
            content.IfctIfss = Convert.ToInt32(section);
            content.Ifctfile = file.FileName;
            //content.Ifctdescription = description;

            var result = _contentService.AddContent(content);

            if (result)
            {
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }

            return StatusCode(StatusCodes.Status200OK, result);
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
    [HttpGet("{id}")]
    public IActionResult DeleteContent(int id)
    {
        try
        {
            if (id <= 0)
            {
                return StatusCode(StatusCodes.Status404NotFound, "ID is empty");
            }
            var filePath = _contentService.DeleteContent(id);

            System.IO.File.Delete(filePath);

            return StatusCode(StatusCodes.Status200OK, true);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet("{fileName}")]
    public IActionResult GetViewFile(string fileName)
    {
        if (fileName == null) { return StatusCode(StatusCodes.Status404NotFound, "File not found"); }
        var result = _contentService.GetViewFile(fileName);

        if (result != null)
        {
            var resultList = result.ToList();
            return StatusCode(StatusCodes.Status200OK, resultList);
        }

        return StatusCode(StatusCodes.Status200OK, result);
    }

    /// <summary>
    /// Update content menthod.
    /// </summary>
    /// <param name="content"></param>
    /// <returns></returns>
    [HttpPost]
    public Task<IActionResult> UpdateContent([FromForm] string displayName, [FromForm] string section, [FromForm] string? description, [FromForm] int id)
    {
        try
        {
            if (displayName != null && section != null && id < 1)
            {
                return Task.FromResult<IActionResult>(StatusCode(StatusCodes.Status204NoContent));
            }
            var objContent = new Ifctcontent();
            objContent.Ifctid = id;
            objContent.IfctIfss = Convert.ToInt32(section);
            objContent.IfctdisplayName = displayName;
            objContent.Ifctdescription = description;
            var result = _contentService.UpdateContent(objContent);
            return Task.FromResult<IActionResult>(StatusCode(StatusCodes.Status200OK, result));
        }
        catch (Exception ex)
        {
            return Task.FromResult<IActionResult>(StatusCode(StatusCodes.Status500InternalServerError, ex.Message));
        }
    }
}
