using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using ilfl.Services.Interface;
using Microsoft.Extensions.Configuration;

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

    public bool AddContent(Ifctcontent content)
    {
        return _contentRepository.AddContent(content);
    }

    

    public void DeleteContent(int id)
    {
        _contentRepository.DeleteContent(id);
    }

    public List<IfdddirectorDetail>? DirectorDetail()
    {
        return _contentRepository.DirectorDetail();
    }

    public List<Ifctcontent>? GetContent(int sectionId)
    {
        return _contentRepository.GetContent(sectionId);
    }

    public string GetViewFile(string fileName)
    {
        var filePath = Path.Combine(Directory.GetCurrentDirectory(), _configuration["FileFolderName"], fileName);
        string file = Convert.ToBase64String(File.ReadAllBytes(filePath));
        return file;
    }
}
