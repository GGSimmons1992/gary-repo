namespace BankWorld.Models
{
  public class Account
  {
    public decimal Value { get; set; }

    public User User{get;set;} //Circular reference
  }
}
