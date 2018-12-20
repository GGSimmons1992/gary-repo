using System;

namespace SelectionChallenge
{
    class Program
    {
        static void Main(string[] args)
        {
          String[] myArray=new String[]{};
          System.Console.WriteLine(myArray);
        }

        static String[] PlayWithArrays(String[] someArray)
        {
          //Put numbers in before letters.

          String[] lowerArray=someArray;
          String[] categoryArray=new String[36];

          int lowerArrayIndex=0;
          foreach (var item in someArray)
          {
            lowerArray=item.toLower();
          }

          for(index=0;index<10;index+=1)
          {
            categoryArray[index]=index;
          }
          for(index=10;index<someArray.Length;index++)
          {

          }


          return newArray;
        }
    }
}
