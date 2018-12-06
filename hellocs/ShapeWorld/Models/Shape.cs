namespace ShapeWorld.Models
{
  public abstract class Shape
  {
    //field is a variable declared in class scope
    protected int _edges = 0;//This is a backing field (A private field)
    private int myedge;
    //property
    public int Edges {get;private set;}// can only be set by other class members <this makes a backing field>
    public int AnotherEdges {get;}//can only be set by the consturctor <this makes a backing field>
    public int YetAnotherEdges
    {
      get
      {
        return _edges;
      }

      set
      {
        _edges = value;
      }
    }

    //constructor


    protected Shape(int edges)
    {
      Edges = edges;
      AnotherEdges = edges;
      YetAnotherEdges = edges;
    }

    public virtual double Area()
    {
      return 1;
    }

    public double Area2()
    {
      return 1;
    }

    public virtual double Perimeter()
    {
      return 1;
    }

    public abstract double Area3();

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
