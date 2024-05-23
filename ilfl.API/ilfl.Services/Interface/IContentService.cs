using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Services.Interface;

public interface IContentService
{
    List<Ifctcontent>? GetContent(int sectionId);
    bool AddContent(Ifctcontent content);
    void DeleteContent(int id);
    List<IfdddirectorDetail>? DirectorDetail();
    string GetViewFile(string filePath);
}
