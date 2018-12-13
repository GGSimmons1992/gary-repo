namespace CollectionWorld
{
  public class Account
  {
    public string name {get;set;}
    public double bankValue {get;set;}

    Account(string client,double value)
    {
      name=client;
      bankValue=value;
    }
  }
}
