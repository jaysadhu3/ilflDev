using ilfl.Models.Models;
using ilfl.Repositories.Entities;
using ilfl.Repositories.Interface;
using LearnerPortal.Utilities.Common;
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
    private const string passKey = "ilfl@123";
    public AuthRepository(AppDbContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _configuration = configuration;
    }

    public bool CreateUser(User user)
    {
        try
        {
            var common = new Common();
            if (user == null) return false;
            var encryptUser = common.EncryptAsync(user.Ifulusername, passKey);
            var encryptSecretKey = common.EncryptAsync(user.Ifulpassword, passKey);
            var ilflUser = new Ifuluser
            {
                Ifulusername = encryptUser.Result,
                Ifulpassword = encryptSecretKey.Result
            };
            _dbContext.Add(ilflUser);
            _dbContext.SaveChanges();
            return true;
        }
        catch
        {
            return false;
        }
    }

    public bool IsValid(User user)
    {
        try
        {
            var common = new Common();
            if (user == null) return false;
            var encryptSecretKey = common.EncryptAsync(user.Ifulpassword, passKey);
            var encryptUsername = common.EncryptAsync(user.Ifulusername, passKey);
            //var userList = _dbContext.Ifulusers.Where(x => x.Ifulusername.Equals(user.Ifulusername) && x.Ifulpassword.Equals(user.Ifulpassword)).ToList();
            var userList = _dbContext.Ifulusers.Where(x => x.Ifulpassword == encryptSecretKey.Result && x.Ifulusername == encryptUsername.Result)
                .Select(t => common.DecryptAsync(t.Ifulusername, passKey)).ToList();
            return userList.Count == 1;
        }
        catch
        {
            return false;
        }
    }   
}
