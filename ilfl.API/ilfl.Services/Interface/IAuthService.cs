using ilfl.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Services.Interface;

public interface IAuthService
{
    bool IsValid(User user);
    bool CreateUser(User user);
}
