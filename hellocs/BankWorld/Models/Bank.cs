using System.Collections.Generic;

namespace BankWorld.Models
{
  public class Bank
  {
    public List<Account> Accounts {get;set;}
    public List<User> Users {get;set;}

    public Dictionary<User,Account> Vault {get;set;}
  }
}
