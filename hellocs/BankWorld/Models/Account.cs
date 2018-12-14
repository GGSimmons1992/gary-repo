namespace BankWorld.Models
{
  public class Account
  {
    public decimal Value { get; set; }

    public User User{get;set;} //Circular reference

    public void Credit(decimal money)
    {
     Value+=money;
    }

    public void Debit(decimal money)
    {
     Value-=money;
    }
  }
}
