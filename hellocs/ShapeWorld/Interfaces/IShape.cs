namespace ShapeWorld.Interfaces
{
 public interface IShape
 {
   int Edges {set;get;}
   double Area();
   double Perimeter();
 }
}
