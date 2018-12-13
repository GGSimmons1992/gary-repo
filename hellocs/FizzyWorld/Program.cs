using System;

namespace FizzyWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
        }

        private static void fizzBuzzExercise()
        {

        }

        private static int checker(int currentVal,int factor)
        {
          int validation=  0;
          if (currentVal%factor==0)
          {
            validation= 1;
          }
          return validation;
        }
    }
}
