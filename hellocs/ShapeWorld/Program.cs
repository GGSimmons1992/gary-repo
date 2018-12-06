using System;
using ShapeWorld.Models;

namespace ShapeWorld
{
    public class Program
    {
        private static void Main(string[] args)
        {
            //(new Program()).PlayWithShape();
            //PlayWithShape(); with static applied
            //
            //PlayWithShapeRectangle();
            //PlayWithShapeTriangle();
            PlayWithShape2();

        }

        private void PlayWithShape()
        {
          //Shape s1 = new Shape(1);//EagerLoaded I want specifically this type   <just enrolled>
          //var s2= new Shape(2); //type inference (infering type) LazyLoaded I take anything  <standby>
          //dynamic s3 = new Shape(3); // <Auditting the class> <typeless/dynamic aka type object> <not static>
          //var rectangle = new Shape(4);

          // s1.sides=10;
          // s2.sides=20;
          // s3.sides=30;
          // rectangle.sides=10;

          // s1.SetSides(10);
          // s2.SetSides(20);
          // s3.SetSides(30);
          // rectangle.SetSides(10);


          // System.Console.WriteLine(s1.Edges);
          // System.Console.WriteLine(s2.Edges);
          // System.Console.WriteLine(s3.AnotherEdges);
          // System.Console.WriteLine(rectangle.YetAnotherEdges);
        }
        private static void PlayWithShapeRectangle()
        {
          //var s1 =new Shape(4);
          var r1 =new Rectangle();

          Shape s2 = new Rectangle();
          //Rectangle r2 = new Shape(4);

          //System.Console.WriteLine(s1.Edges);
          System.Console.WriteLine(r1.Edges);
          System.Console.WriteLine(s2.Edges);

        }

        private static void PlayWithShapeTriangle()
        {
          var t1= new Triangle();
          System.Console.WriteLine(t1.Edges);
        }

        private static void PlayWithShape2()
        {
          Shape s1;
          Shape s2 =new Rectangle();
          Shape s3 = new Square();

          s1=s2;
          s2=s3;

          System.Console.WriteLine(s1.Area());
          System.Console.WriteLine(s2.Area());
          System.Console.WriteLine(s3.GetType());
        }

    }
}
