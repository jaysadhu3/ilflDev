using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Repositories.Implementation;

public class AuthRepository : IAuthRepository
{
    private readonly AppDbContext _dbContext;
    private readonly IConfiguration _configuration;
    public AuthRepository(AppDbContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _configuration = configuration;
    }

    public bool IsValid(User user)
    {
        try
        {
            if (user == null) return false;
            var userList = _dbContext.Ifulusers.Where(x => x.Ifulusername.Equals(user.Ifulusername) && x.Ifulpassword.Equals(user.Ifulpassword)).ToList();
            if (userList.Count == 1) return true;
            return false;
        }
        catch
        {
            return false;
        }
    }   
}
