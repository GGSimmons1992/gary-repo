using CollectionWorld.Models;
using System;
using System.Collections.Generic;

namespace CollectionWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            /* var array=new ArrayModel();
            array.UseArrayFamily();
            Console.ReadLine();*/
            //var x=DictionaryFamily();
            //SimpleBank();
        }

        static void SimpleBank()
        {
          Dictionary<string,double> bank = new Dictionary<string,double>();
          bank.Add("Johnny",-500.0);
          bank.Add("Susan",123.0);
          bank.Add("Mary",450.0);



          System.Console.WriteLine("Who are you?");
          string userName= System.Console.ReadLine();

          if (bank.ContainsKey(userName))
          {
            System.Console.WriteLine(String.Format("Greetings {0} you have ${1}",userName,bank[userName]));
            string choice="";
          while (choice!="3")
          {
            System.Console.WriteLine("Would you like to 1)debit, 2)credit, or 3)leave?");
            string newChoice= System.Console.ReadLine();
            choice=newChoice;
            switch(choice)
            {
              case "1":
                System.Console.WriteLine("How much would you like to debit?");
                double gain=double.Parse(System.Console.ReadLine());
                bank[userName]=bank[userName]+gain;
                System.Console.WriteLine(String.Format("{0} you now have ${1}",userName,bank[userName]));
                break;
              case "2":
                System.Console.WriteLine("How much would you like to credit?");
                double cost=double.Parse(System.Console.ReadLine());
                bank[userName]=bank[userName]-cost;
                System.Console.WriteLine(String.Format("{0} you now have ${1}",userName,bank[userName]));
                break;
              case "3":
                System.Console.WriteLine(String.Format("Goodbye {0}!",userName));
                break;
              default:
                System.Console.WriteLine(String.Format("Not a valid "));
                break;
            }
          }


          }
        }
        private void transaction(double newTransaction)
        {
        }
    }
}
