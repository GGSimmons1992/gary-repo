namespace ShapeWorld.Models
{
  public class Triangle: Shape
  {
     public Triangle(): base(3)
     {
       Edges = edges;
     }

    public Triangle(int edges) : base(edges)
    {
      Edges = edges;
    }

    public int edges=3;
    public new int Edges { get;}
    double edge1 {get;set;}
    double edge2 {get;set;}
    double edge3 {get;set;}
    // public Triangle(): base(3)
    // {

    // }

    public override double Area3()
    {
      return Area();
    }
    public new double Perimeter()
    {
      return 1;
    }

  }

}
