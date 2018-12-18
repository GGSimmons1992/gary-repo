namespace UserApi.Models
{
  public class User
  {
    public string Username { get; set; }
    public string Password {get;set;}

    public bool accessKey {get;set;}

    public User(string name, string passkey)
    {
      Username=name;
      Password=passkey;
      accessKey=false;
    }
  }

}
