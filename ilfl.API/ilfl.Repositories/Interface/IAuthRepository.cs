using ilfl.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Repositories.Interface;

public interface IAuthRepository
{
    bool IsValid(User user);
}
