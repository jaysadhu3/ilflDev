using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Services.Interface;

public interface IContentService
{
    List<Ifctcontent>? GetContent(string section);
    bool AddContent(Content content);
    void DeleteContent(int id);
    List<IfdddirectorDetail>? DirectorDetail();
}
