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

    public List<Ifctcontent>? GetContent(string section)
    {
        return _contentRepository.GetContent(section);
    }
}
