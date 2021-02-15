using System;
//System to initialise C#

namespace HowToC# //All code goes in here for C# to execute
{
    class Program 
    { //All code goes in here

        public static void Main(string[] args) //The main program
        {

        }
        static double rectArea(double length, double width) //This is a method. They can be called in the main program
        //They must have  an input ^^^^ and an output using a return statement
        //This will return the area of a rectangle using the variables length and width
        {
            double area = length * width; //Double is a type of variable decleration
            Console.WriteLine(area); //This line writes the area to the console.
            return area; //Returns the area
        }
    }
}