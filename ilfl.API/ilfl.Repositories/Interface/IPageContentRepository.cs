using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Repositories.Interface;

public interface IPageContentRepository
{
    List<IfpcpageContent>? GetContent(int menuId);
    int SavePageContent(IfpcpageContent content);
    bool DeleteContent(int id);
}
