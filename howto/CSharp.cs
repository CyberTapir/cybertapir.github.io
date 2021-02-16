using System;
//System to initialise C#

namespace HowToCSharp //All code goes in here for C# to execute
{

    class Program 
    { //All code goes in here

        public static void Main(string[] args) //The main program to execute
        {

            Console.Write("Enter the shape > "); //This line prints to the console WITHOUT a line break

            string input = Console.ReadLine(); //This will save all text entered before pressing enter in the variable

            if (input == "rect") //If statement decleration. If the input is "rect", execute this code 
            {
                Console.Write("Enter the Length > "); //This line prints to the console WITHOUT a line break
                double lengthInput = Console.ReadLine(); //This will save all text entered before pressing enter in the variable
                Console.Write("Enter the Width > "); //This line prints to the console WITHOUT a line break
                double widthInput = Console.ReadLine(); //This will save all text entered before pressing enter in the variable
                rectArea(lengthInput, widthInput); //This line calls the method below with the values to find the area
            }
        }

        static double rectArea(double length, double width) //This is a method. They can be called in the main program
        //They must have  an input ^^^^ and an output using a return statement
        //This will return the area of a rectangle using the variables length and width
        {
            double area = length * width; //Double is a type of variable decleration
            Console.WriteLine(area); //This line writes the area to the console WITH a line break at the end
            return area; //Returns the area
        }
    //These closing brackets are super important, dont forget them!
    }
}

/*
If you need more help, you can do a couple of things.
Go to https://www.w3schools.com/cs/default.asp
Google problems you might have, Microsoft forums and Stack exchange can be super useful
*/