using System;
using ShapeWorld.Models;
using ShapeWorld.Interfaces;

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
            //PlayWithShape2();
            //PlayWithInterface();
            PlayWithException();

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

        private static void PlayWithInterface()
        {
          var r= new Rectangle();
          var c= new Circle();

          //System.Console.WriteLine(r.Perimeter);
          //System.Console.WriteLine(c.Perimeter);

        }

        private static void PlayWithException()
        {
          var cu = new Cube();

          try
          {
            throw new NullReferenceException("We did it!");
            System.Console.WriteLine(cu.Volume());
          }
          //Go from most specific to most general
          catch(NotImplementedException nie)
          {
            System.Console.WriteLine("volume cannot be computed at this time...we busy!!"+nie.Message);
          }
          catch(Exception e)
          {

            //logException();
            throw e;
            throw; //Will just bypass the error
            System.Console.WriteLine(string.Format("{1} {0} {1}","system down...try again never!!!",e.Message));
          }
          finally
          {
            GC.Collect();
            System.Console.WriteLine("finally ... as always!!!");
          }
        }

    }
}
