using ShapeWorld.Interfaces;

namespace ShapeWorld.Models
{
  public class Rectangle : Shape
  {
    public Rectangle(string name): base(4){}

    public Rectangle():base(4){}
    //properties
    public double Length {get;set;}
    public double Width {get;set;}

    public override double Area()
    {
      return Length * Width;
    }

    public new double Area2()
    {
      return Area();
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

