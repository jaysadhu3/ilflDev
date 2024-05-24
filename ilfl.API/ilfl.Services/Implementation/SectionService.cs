using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using ilfl.Services.Interface;
using Microsoft.Extensions.Configuration;
using static System.Collections.Specialized.BitVector32;
using Section = ilfl.Models.Models.Section;

namespace ilfl.Services.Implementation;

public class SectionService: ISectionService
{
    private readonly ISectionRepository _sectionRepository;
    private readonly IConfiguration _configuration;

    public SectionService(ISectionRepository sectionRepository, IConfiguration configuration)
    {
        _sectionRepository = sectionRepository;
        _configuration = configuration;
    }

    public bool AddSection(Section section)
    {
        return _sectionRepository.AddSection(section);
    }

    public bool DeleteSection(int id)
    {
        return _sectionRepository.DeleteSection(id);
    }

    public List<Ifsssection>? GetAllSection()
    {
        return _sectionRepository.GetAllSection();
    }

    public List<Ifsssection>? GetChildSection(int ParentId)
    {
        return _sectionRepository.GetChildSection(ParentId);
    }

    public List<Ifsssection>? GetParentSection()
    {
        return _sectionRepository.GetParentSection();
    }
}
