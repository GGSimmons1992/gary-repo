using System;

namespace SelectionChallenge
{
    class Program
    {
        static void Main(string[] args)
        {
          var inputArray=new string[]{"vasni","asvnsaip","nasvipsn"};
          var myArray=PlayWithArrays(inputArray);
          System.Console.WriteLine(myArray);
        }

        private static String[] PlayWithArrays(String[] someArray)
        {
          //Put numbers in before letters.
          String[] finalArray=null;
          String[] lowerArray=someArray;
          foreach (var item in someArray)
          {
            item.ToLower();
          }
          return finalArray;
        }
    }
}
