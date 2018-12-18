namespace UserApi.Models
{
  public class Session
  {
    public string Username { get; set; }
    public bool activeKey {get;set;}

    public Session()
    {
      Username=null;
      activeKey=false;
    }
  }

}
