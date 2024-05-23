using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;

namespace ilfl.Repositories.Implementation;

public class SectionRepository: ISectionRepository
{
    private readonly AppDbContext _dbContext;
    public SectionRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
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

    public List<Ifsssection>? GetAllSection()
    {
        var result = _dbContext.Ifsssections.OrderByDescending(x => x.Ifssid).ToList();
        return result;
    }

    public List<Ifsssection>? GetChildSection(int ParentId)
    {
        if (ParentId == 0)
        {
            var resultAll = _dbContext.Ifsssections.Where(x => x.Ifssparent != null).ToList();
            return resultAll;
        }
        var result = _dbContext.Ifsssections.Where(x => x.Ifssparent == ParentId).ToList();
        return result;
    }

    public List<Ifsssection>? GetParentSection()
    {
        var result = _dbContext.Ifsssections.Where(x => x.Ifssparent == null).ToList();
        return result;
    }
}
