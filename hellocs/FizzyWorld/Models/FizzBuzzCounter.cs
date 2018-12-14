namespace FizzyWorld.Models
{
  public class FizzBuzzCounter
  {
    public int Factor {get; set; }
    public int CountValue {get;set;}

    public string name {get;set;}

    public FizzBuzzCounter(string Name,int factor)
    {
      Factor=factor;
      CountValue=0;
      name=Name;
    }

    public FizzBuzzCounter(string Name,int factor,int fizzValue,int buzzValue)
    {
      if ((factor%fizzValue==0) && (factor%fizzValue==0))
      {
        Factor=factor;
      }
      else
      {
        if (fizzValue<buzzValue)
        {
          factor=fizzValue;
        }
        else
        {
          factor=buzzValue;
        }
        while ((factor%fizzValue!=0) && (factor%buzzValue!=0))
        {
          factor+=factor;
          System.Console.WriteLine(string.Format("New factor is {0}",factor));
        }
        System.Console.WriteLine(string.Format("Invalid factor. Factor has been changed to {0}",factor));
        Factor=factor;
      }
      CountValue=0;
      name=Name;
    }
    internal void Incrementer(int currentNumber)
    {
      if (currentNumber%Factor==0)
      {
        CountValue+=1;
        //System.Console.WriteLine(currentNumber);
      }
    }
    internal void Printer()
    {
      System.Console.WriteLine(string.Format(format: "We have {0} {1}es", arg0: CountValue, arg1: name));
    }
  }
}
