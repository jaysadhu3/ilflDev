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

    

    public string DeleteContent(int id)
    {
        return _contentRepository.DeleteContent(id);
    }

    public List<Ifctcontent>? GetContent(int sectionId)
    {
        return _contentRepository.GetContent(sectionId);
    }

    public string? GetViewFile(string fileName)
    {
        var filePath = Path.Combine(_configuration["BackEndUrl"], _configuration["FileFolderName"], fileName);
        //if (System.IO.File.Exists(filePath))
        //{
        //    string file = Convert.ToBase64String(File.ReadAllBytes(filePath));
        //    return file;
        //}
        
        return filePath;
    }

    public bool IsFileExist(string fileName)
    {
        return _contentRepository.IsFileExist(fileName);
    }
}
