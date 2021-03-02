//This is C#. The File Extension is .cs
//Comments are made by double slashes for one line
/*
and inbetween /* and */ //for multiline comments

using System;
//System to initialise C#

namespace howToCSharp //All code goes in here for C# to execute
{

    class Program 
    { //All code goes in here

        public static void Main(string[] args) //The main program to execute
        {
            int[] array = new int [1, 2, 3, 4, 5, 6, 7, 8, 9]; //This is an array of numbers going from 1 to 9 in positions 0 - 8

            string msg = "Hello"; //Saves "Hello" in a string variable called msg
            
            int oddNum = 7; //Saves the value 7 in an integer variable
            
            int evenNum = 8; //Saves the number 8 in an integer variable

            char[] charmsg = msg.ToCharArray(); //This line will save Hello in a char array > H, e, l, l, o

            int currentPos = Array.IndexOf(charmsg, "o"); //Finds the first value in the array with the same character
            //Will return 4

            string newMsg = String.Join("", charmsg); //Joins the char letters together, value is Hello

            Console.WriteLine(array[1]); //This line will write 2 to the console as it is the 2nd value in array

            Console.Write("Enter the shape > "); //This line prints "Enter the Shape > " to the console WITHOUT a line break

            string input = Console.ReadLine(); //This will save all text entered before pressing enter in the variable

            if (input == "rect") //If statement decleration. If the input is "rect", execute this code 
            {
                Console.Write("Enter the Length > "); //This line prints "Enter the Length > " to the console WITHOUT a line break
                
                double lengthInput = Console.ReadLine(); //This will save all text entered before pressing enter in the variable

                Console.Write("Enter the Width > "); //This line prints "Enter the Width > " to the console WITHOUT a line break

                double widthInput = Console.ReadLine(); //This will save all text entered before pressing enter in the variable

                rectArea(lengthInput, widthInput); //This line calls the method below with the values to find the area
            } else if (input == "odd/even") {
                if (oddNum % 2 == 0){
                    Console.WriteLine("7 is Even");
                }
            }
        } //The closing brackets are super important, dont forget them!

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
