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

    public List<IfpcpageContent>? GetContent(int pageContentId)
    {
        try
        {
            if (pageContentId == 0)
            {
                var resultAll = _dbContext.IfpcpageContents.OrderByDescending(x => x.Ifpcid).ToList();
                return resultAll;
            }
            var parentCheck = _dbContext.Ifsssections.Where(x => x.Ifssid == pageContentId).ToList();
            if (parentCheck.Count > 0) return null;
            var sectionCheck = _dbContext.IfpcpageContents.FirstOrDefault(x => x.Ifpcid == pageContentId);
            if (sectionCheck == null) return null;
            var result = _dbContext.IfpcpageContents.Where(x => x.Ifpcid == pageContentId).OrderByDescending(x => x.IfpcIfssid).ToList();
            return result;

        }
        catch
        {
            return null;
        }
    }

    List<IfpcpageContent>? IPageContentRepository.GetContent(int pageContentId)
    {
        try
        {
            var result = new List<IfpcpageContent>();
            if (pageContentId == 0)
            {
                result = _dbContext.IfpcpageContents.OrderByDescending(x => x.Ifpcid).ThenBy(x => x.Ifpcid).ToList();
            }
            else
            {
                result = _dbContext.IfpcpageContents.Where(x => x.Ifpcid == pageContentId).ToList();
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
