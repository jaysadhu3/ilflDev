using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Services.Interface;

public interface ISectionService
{
    List<Ifsssection>? GetParentSection();
    List<Ifsssection>? GetChildSection(int ParentId);
    bool AddSection(Section section);
    List<Ifsssection>? GetAllSection();
    bool DeleteSection(int id);
}
