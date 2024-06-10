using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Services.Interface;

public interface IPageContentService
{
    int SavePageContent(IfpcpageContent pageContent);
    List<IfpcpageContent>? GetContent(int menuId);
    bool DeleteContent(int id);
}
