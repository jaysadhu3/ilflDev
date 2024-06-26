using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Repositories.Interface;

public interface IContentRepository
{
    List<Ifctcontent>? GetContent(int sectionId);
    Ifctcontent? GetContentById(int contentId);
    bool AddContent(Ifctcontent content);
    int UpdateContent(Ifctcontent content);
    string DeleteContent(int id);
    bool IsFileExist(string fileName);
}
