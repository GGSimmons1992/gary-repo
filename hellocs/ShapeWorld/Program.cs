using System;
using ShapeWorld.Models;

namespace ShapeWorld
{
    public class Program
    {
        private static void Main(string[] args)
        {
            (new Program()).PlayWithShape();
            //PlayWithShape(); with static applied
            //
        }

        private void PlayWithShape()
        {
          Shape s1 = new Shape(1);//EagerLoaded I want specifically this type   <just enrolled>
          var s2= new Shape(2); //type inference (infering type) LazyLoaded I take anything  <standby>
          dynamic s3 = new Shape(3); // <Auditting the class> <typeless/dynamic aka type object> <not static>
          var rectangle = new Shape(4);

          // s1.sides=10;
          // s2.sides=20;
          // s3.sides=30;
          // rectangle.sides=10;

          // s1.SetSides(10);
          // s2.SetSides(20);
          // s3.SetSides(30);
          // rectangle.SetSides(10);

          s1.

          System.Console.WriteLine(s1.Sides;
          System.Console.WriteLine(s2.GetSides());
          System.Console.WriteLine(s3.GetSides());
          System.Console.WriteLine(rectangle.GetSides());
        }
    }
}
