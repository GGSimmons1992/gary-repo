namespace BankWorld.Models
{
  public class Bank
  {
    public List<Accounts> Accounts {get;set;}
    public List<Users> Users {get;set;}

    public Dictionary<Users,Account> Vault {get;set;}
  }
}
