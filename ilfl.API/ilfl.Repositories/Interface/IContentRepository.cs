using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Repositories.Interface;

public interface IContentRepository
{
    List<Ifctcontent>? GetContent(int sectionId);
    bool AddContent(Ifctcontent content);
    string DeleteContent(int id);
    List<IfdddirectorDetail>? DirectorDetail();
    bool IsFileExist(string fileName);
}
