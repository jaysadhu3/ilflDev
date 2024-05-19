using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;

namespace ilfl.Repositories.Implementation;

public class ContentRepository : IContentRepository
{
    private readonly AppDbContext _dbContext;
    public ContentRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public bool AddContent(Content content)
    {
        try
        {
            if (content == null) { return  false; }
            var newContent = new Ifctcontent();
            newContent.IfctIfss = content.Ifctsection;
            newContent.Ifctfile = content.Ifctfile;
            newContent.IfctdisplayName = content.IfctdisplayName;
            _dbContext.Add(newContent);
            _dbContext.SaveChanges();
            return true;
        }
        catch
        {
            return false;
        }
    }

    public bool AddSection(Section section)
    {
        if (section == null) { return false; }
        var newSection = new Ifsssection();
        newSection.Ifssname = section.Ifssname;
        newSection.Ifssparent = section.Ifssparent;
        _dbContext.Add(newSection);
        _dbContext.SaveChanges();
        return true;
    }

    public void DeleteContent(int id)
    {
        var removedContent = _dbContext.Ifctcontents.Where(c => c.Ifctid == id).ToList();
        _dbContext.RemoveRange(removedContent);
        _dbContext.SaveChanges();
    }

    public List<IfdddirectorDetail>? DirectorDetail()
    {
        var records = _dbContext.IfdddirectorDetails.ToList();
        return records;
    }

    public List<Ifsssection>? GetAllSection()
    {
        var result = _dbContext.Ifsssections.OrderByDescending(x => x.Ifssid).ToList();
        return result;
    }

    public List<Ifsssection>? GetChildSection(int ParentId)
    {
        if(ParentId == 0)
        {
            var resultAll = _dbContext.Ifsssections.Where(x => x.Ifssparent != null).ToList();
            return resultAll;
        }
        var result = _dbContext.Ifsssections.Where(x => x.Ifssparent == ParentId).ToList();
        return result;
    }

    public List<Ifctcontent>? GetContent(int sectionId)
    {
        try
        {
            if (sectionId == null) return null;
            if(sectionId == 0)
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

    public List<Ifsssection>? GetParentSection()
    {
        var result = _dbContext.Ifsssections.Where(x => x.Ifssparent == null).ToList();
        return result;
    }
}
