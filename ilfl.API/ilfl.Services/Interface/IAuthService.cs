﻿using ilfl.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Services.Interface;

public interface IAuthService
{
    UserWithToken? IsValid(User user);
    bool CreateUser(User user);
    string GenerateJwtToken(string username);
}
