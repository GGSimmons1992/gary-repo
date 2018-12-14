using System;
using FizzyWorld.Models;

namespace FizzyWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            fizzBuzzExercise(3,5,15,100);
        }

        private static void fizzBuzzExercise(int fizzNum,int buzzNum, int fizzbuzzNum, int finalFizzBuzz)
        {
          var fizz=new FizzBuzzCounter("fizz",fizzNum);
          var buzz=new FizzBuzzCounter("buzz",buzzNum);
          var fizzbuzz=new FizzBuzzCounter("fizzbuzz",fizzbuzzNum,fizzNum,buzzNum);

          int ticker=1;
          while (fizzbuzz.CountValue<finalFizzBuzz)
          {
            fizz.Incrementer(ticker);
            buzz.Incrementer(ticker);
            fizzbuzz.Incrementer(ticker);
            ticker+=1;
          }
          fizz.Printer();
          buzz.Printer();
          fizzbuzz.Printer();
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
