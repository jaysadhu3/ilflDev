using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Services.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ilfl.API.Controllers;

[EnableCors("AllowAll")]
[Route("api/[controller]/[action]")]
[ApiController]

public class PageContentController : Controller
{
    private readonly IPageContentService _pagecontentService;
    private readonly IConfiguration _configuration;

    /// <summary>
    ///     Content Controller
    /// </summary>
    /// <param name="pagecontentService">contentService</param>
    /// <param name="configuration">configuration</param>
    public PageContentController(IPageContentService pagecontentService, IConfiguration configuration)
    {
        _pagecontentService = pagecontentService;
        _configuration = configuration;
    }

    /// <summary>
    ///     Retrive content as per section
    /// </summary>
    /// <param name="menuId">section</param>
    /// <returns>Content</returns>
    [HttpGet("{menuId}")]
    public IActionResult GetPageContent(int menuId)
    {
        var result = _pagecontentService.GetContent(menuId);
        return StatusCode(StatusCodes.Status200OK, result);
    }

    /// <summary>
    ///     Add/Update Page content
    /// </summary>
    /// <param name="pageConent">Page content</param>
    /// <returns>boolean</returns>
    [HttpPost]
    public async Task<IActionResult> SavePageContent([FromBody] PageContent pageConent)
    {
        try
        {
            if (pageConent == null)
            {
                return StatusCode(StatusCodes.Status204NoContent);
            }
            if (pageConent.MenuId < 1)
            {
                return StatusCode(StatusCodes.Status204NoContent);
            }
            //check if menu is valid of not
            //if (pageConent.MenuId < 1)
            //{
            //    return StatusCode(StatusCodes.Status204NoContent);
            //}
            var objPageContent = new IfpcpageContent();
            objPageContent.IfpcIfssid = pageConent.MenuId;
            objPageContent.IfpcContent1 = pageConent.IfpcContent1;
            objPageContent.IfpcContent2 = pageConent.IfpcContent2;
            objPageContent.IfpcContent3 = pageConent.IfpcContent3;
            objPageContent.IfpcContent4 = pageConent.IfpcContent4;
            objPageContent.IfpcContent5 = pageConent.IfpcContent5;
            objPageContent.IfpcContent6 = pageConent.IfpcContent6;
            objPageContent.IfpcContent7 = pageConent.IfpcContent7;
            var result = _pagecontentService.SavePageContent(objPageContent);
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
    /// <param name="pageContentId">page Content Id</param>
    /// <returns>Status codes</returns>
    [HttpDelete("{pageContentId}")]
    public IActionResult DeleteContent(int pageContentId)
    {
        try
        {
            if (pageContentId <= 0)
            {
                return StatusCode(StatusCodes.Status404NotFound, "ID is empty");
            }
            var result = _pagecontentService.DeleteContent(pageContentId);
            return StatusCode(StatusCodes.Status200OK, result);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}
