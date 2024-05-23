using ilfl.Models.Models;
using ilfl.Repositories.Entities;

namespace ilfl.Repositories.Interface;

public interface ISectionRepository
{
    List<Ifsssection>? GetParentSection();
    List<Ifsssection>? GetChildSection(int ParentId);
    List<Ifsssection>? GetAllSection();
    bool AddSection(Section section);
}
