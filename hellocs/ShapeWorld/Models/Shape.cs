namespace ShapeWorld.Models
{
  public class Shape
  {
    //field is a variable declared in class scope
    protected int sides = 0;

    //property
    private int myside;
    public int Sides {get;private set;}// can only be set by other class members


    public int OtherSides {get;}//can only be set by the consturctor
    //constructor
    internal Shape(int sides)
    {
      this.sides=sides;//very lazy don't do.
      Sides=sides;
    }
    //method
    // public int GetSides()
    // {
    //   return sides;
    // }

    // public void SetSides(int side)
    // {
    //   if (side==myside)
    //     {
    //       sides=side;
    //     }

    // }

  }

}
