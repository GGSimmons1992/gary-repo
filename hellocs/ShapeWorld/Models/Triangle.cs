namespace ShapeWorld.Models
{
  public class Triangle: Shape
  {
    public Triangle()
    {
    }

    public Triangle(int edges) : base(edges)
    {
    }

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
    public override double Perimeter()
    {
      return 1;
    }

  }

}
