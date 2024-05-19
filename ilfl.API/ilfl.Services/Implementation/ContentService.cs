using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using ilfl.Services.Interface;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Services.Implementation;

public class ContentService : IContentService
{
    private readonly IContentRepository _contentRepository;
    private readonly IConfiguration _configuration;

    public ContentService(IContentRepository contentRepository, IConfiguration configuration)
    {
        _contentRepository = contentRepository;
        _configuration = configuration;
    }

    public bool AddContent(Content content)
    {
        return _contentRepository.AddContent(content);
    }

    public bool AddSection(Section section)
    {
        return _contentRepository.AddSection(section);
    }

    public void DeleteContent(int id)
    {
        _contentRepository.DeleteContent(id);
    }

    public List<IfdddirectorDetail>? DirectorDetail()
    {
        return _contentRepository.DirectorDetail();
    }

    public List<Ifsssection>? GetAllSection()
    {
        return _contentRepository.GetAllSection();
    }

    public List<Ifsssection>? GetChildSection(int ParentId)
    {
        return _contentRepository.GetChildSection(ParentId);
    }

    public List<Ifctcontent>? GetContent(int sectionId)
    {
        return _contentRepository.GetContent(sectionId);
    }

    public List<Ifsssection>? GetParentSection()
    {
        return _contentRepository.GetParentSection();
    }
}
