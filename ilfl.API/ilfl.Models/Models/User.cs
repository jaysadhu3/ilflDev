namespace ilfl.Models.Models;

public class User
{
    public string Ifulusername { get; set; }

    public string Ifulpassword { get; set; }
}

public class UserWithToken
{
    public bool IsValid { get; set; }
    public string? Token { get; set; }
}
