namespace BankWorld.Models
{
  public class User
  {
    public string Name {get;set;}
    //public Account Account {get;set;} //If accounts have users, do not give users accounts.

    public void Credit(decimal money)
    {
     Account.Value+=money;
    }

    public void Debit(decimal money)
    {
     Account.Value-=money;
    }
  }

}
