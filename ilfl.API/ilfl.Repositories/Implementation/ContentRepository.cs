using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            newContent.Ifctsection = content.Ifctsection;
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

    public List<Ifctcontent>? GetContent(string section)
    {
        try
        {
            if (string.IsNullOrEmpty(section)) return null;
            var sectionCheck = _dbContext.Ifctcontents.FirstOrDefault(x => x.Ifctsection == section);
            if (sectionCheck == null) return null;
            var result = _dbContext.Ifctcontents.Where(x => x.Ifctsection == section).ToList();
            return result;

        }
        catch
        {
            return null;
        }
    }
}
