using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Services.Interface;

public interface IContentService
{
    List<Ifctcontent>? GetContent(int sectionId);
    Ifctcontent? GetContentById(int contentId);
    bool AddContent(Ifctcontent content);
    int UpdateContent(Ifctcontent content);
    string DeleteContent(int id);
    string GetViewFile(string filePath);
    bool IsFileExist(string fileName);
}
