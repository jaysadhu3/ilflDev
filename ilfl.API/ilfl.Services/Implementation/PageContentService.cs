using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using ilfl.Services.Interface;
using Microsoft.Extensions.Configuration;
namespace ilfl.Services.Implementation;

public class PageContentService : IPageContentService
{
    private readonly IPageContentRepository _pagecontentRepository;
    private readonly IConfiguration _configuration;

    public PageContentService(IPageContentRepository pagecontentRepository, IConfiguration configuration)
    {
        _pagecontentRepository = pagecontentRepository;
        _configuration = configuration;
    }

    public List<IfpcpageContent>? GetContent(int pageContentId)
    {
        return _pagecontentRepository.GetContent(pageContentId);
    }

    public int SavePageContent(IfpcpageContent pageContent)
    {
        return _pagecontentRepository.SavePageContent(pageContent);
    }

    bool IPageContentService.DeleteContent(int id)
    {
        return _pagecontentRepository.DeleteContent(id);
    }
}
