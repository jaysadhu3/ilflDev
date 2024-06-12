using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Services.Interface;

public interface IContentService
{
    List<Ifctcontent>? GetContent(int sectionId);
    bool AddContent(Ifctcontent content);
    string DeleteContent(int id);
    string GetViewFile(string filePath);
    bool IsFileExist(string fileName);
}
