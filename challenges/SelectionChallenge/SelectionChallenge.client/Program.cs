using System;

namespace SelectionChallenge.client
{
  class Program
  {
    static void Main(string[] args)
    {
      var inputArray = new string[] { "vasni", "asvnsaip", "nasvipsn" };
      var myArray = PlayWithArrays(inputArray);
      System.Console.WriteLine(myArray);
    }

    private static String[] PlayWithArrays(String[] someArray)
    {
      //Put numbers in before letters.
      String[] finalArray = null;
      String[] lowerArray = someArray;

      foreach (var item in someArray)
      {
        item.ToLower();
      }

      var i = 1;
      while(i<someArray.Length)
      {
        var word1 = someArray[i - 1];
        var word2 = someArray[i];

        if (word1[0] < word2[0])
        {

        }
      }

      return finalArray;
    }

  }
}
