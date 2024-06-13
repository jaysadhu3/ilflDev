using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using Microsoft.Extensions.Configuration;

namespace ilfl.Repositories.Implementation;

public class PageContentRepository : IPageContentRepository
{
    private readonly AppDbContext _dbContext;
    private readonly IConfiguration _configuration;
    public PageContentRepository(AppDbContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _configuration = configuration;
    }

    public bool DeleteContent(int id)
    {
        var removedContent = _dbContext.IfpcpageContents.FirstOrDefault(c => c.Ifpcid == id);
        _dbContext.Remove(removedContent);
        _dbContext.SaveChanges();
        return true;
    }

    List<IfpcpageContent>? IPageContentRepository.GetContent(int menuId)
    {
        try
        {
            var result = new List<IfpcpageContent>();
            if (menuId == 0)
            {
                result = _dbContext.IfpcpageContents.OrderByDescending(x => x.IfpcIfssid).ThenBy(x => x.Ifpcid).ToList();
            }
            else
            {
                result = _dbContext.IfpcpageContents.Where(x => x.IfpcIfssid == menuId).ToList();
            }
            return result;

        }
        catch
        {
            return null;
        }
    }

    public int SavePageContent(IfpcpageContent pageContent)
    {
        var returnValue = 0;
        try
        {
            if (pageContent == null || pageContent.IfpcIfssid < 1)
            {
                return returnValue;
            }
            var result = _dbContext.IfpcpageContents.FirstOrDefault(c => c.IfpcIfssid == pageContent.IfpcIfssid);
            if (result != null)
            {
                result.IfpcHtmlContent = pageContent.IfpcHtmlContent;
                _dbContext.IfpcpageContents.Update(result);
                _dbContext.SaveChanges();
                returnValue = result.Ifpcid;
            }
            else
            {
                _dbContext.Add(pageContent);
                _dbContext.SaveChanges();
                returnValue = pageContent.Ifpcid;
            }
            return returnValue;
        }
        catch
        {
            return returnValue;
        }
    }
}
