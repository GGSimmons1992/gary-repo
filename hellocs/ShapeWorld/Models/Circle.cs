namespace ShapeWorld.Models
{
  public class Circle: Shape
  {
    public double radius {set;get;}

    public Circle(): base(int.MaxValue)
    {

    }

    public override double Area()
    {
      return 1;
    }
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
