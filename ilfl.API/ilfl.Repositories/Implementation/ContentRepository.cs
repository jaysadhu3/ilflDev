using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using Microsoft.Extensions.Configuration;

namespace ilfl.Repositories.Implementation;

public class ContentRepository : IContentRepository
{
    private readonly AppDbContext _dbContext;
    private readonly IConfiguration _configuration;
    public ContentRepository(AppDbContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _configuration = configuration;
    }

    public bool AddContent(Ifctcontent content)
    {
        try
        {
            if (content == null) { return false; }
            _dbContext.Add(content);
            _dbContext.SaveChanges();
            return true;
        }
        catch
        {
            return false;
        }
    }

    public bool IsFileExist(string fileName)
    {
        var result = _dbContext.Ifctcontents.Where(x => x.Ifctfile == fileName).ToList();

        if (result.Count == 0)
        {
            return false;
        }
        return true;
    }

    public string DeleteContent(int id)
    {
        var removedContent = _dbContext.Ifctcontents.Where(c => c.Ifctid == id).FirstOrDefault();
        var filePath = "";
        if (removedContent != null)
        {
            filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", _configuration["FileFolderName"], removedContent.Ifctfile);
            _dbContext.Remove(removedContent);
            _dbContext.SaveChanges();
        }
        return filePath;
    }

    public List<Ifctcontent>? GetContent(int sectionId)
    {
        try
        {
            if (sectionId == 0)
            {
                var resultAll = _dbContext.Ifctcontents.OrderByDescending(x => x.Ifctid).ToList();
                return resultAll;
            }
            var parentCheck = _dbContext.Ifsssections.Where(x => x.Ifssparent == sectionId).ToList();
            if (parentCheck.Count > 0) return null;
            var sectionCheck = _dbContext.Ifctcontents.FirstOrDefault(x => x.IfctIfss == sectionId);
            if (sectionCheck == null) return null;
            var result = _dbContext.Ifctcontents.Where(x => x.IfctIfss == sectionId).OrderByDescending(x => x.Ifctid).ToList();
            return result;

        }
        catch
        {
            return null;
        }
    }
}
