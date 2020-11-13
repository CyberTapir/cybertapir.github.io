using Cosmos.HAL;
using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using Sys = Cosmos.System;
namespace ToastOS
{
    public class Kernel : Sys.Kernel
    {
        protected override void BeforeRun()
        {
            Console.Clear();
            Console.WriteLine("ToastOS 0.3 Beta booted successfully.");
        }
        bool admin = false;
        protected override void Run()
        {
            Console.Write("> ");
            var input = Console.ReadLine().ToLower();
            switch (input)
            {
                //All the possible commands to use once ToastOS Starts
                case "calc":
                    calculatorCommand();
                    break;
                case "calc2":
                    calculator2Command();
                    break;
                case "about":
                    aboutCommand();
                    break;
                case "admin_logon":
                    piefkeCommand();
                    break;
                case "battleship":
                    battleship();
                    break;
                case "tictactoe":
                    tictactoe();
                    break;
                case "cls":
                    clearCommand();
                    break;
                default:
                    badCommand();
                    break;
            }
        }
        //Saying if the command isn't recognised, then say Bad Command.
        private void badCommand()
        {
            Console.WriteLine("Bad command. try again");
        }
        //Clearing the space if the command is run, and printing ToastOS
        private void clearCommand()
        {
            Console.Clear();
            if (admin == true)
            {
                Console.WriteLine("ToastOS Admin");
            }
            else
            {
                Console.WriteLine("ToastOS 0.3 Beta");
            }
        }
        //Telling the user about the OS
        private void aboutCommand()
        {
            Console.WriteLine("ToastOS");
            Console.WriteLine("Made with COSMOS User Kit");
            Console.WriteLine("Developed by Oboe Industries");
        }
        //Calculator command 1, can calculate +, -, *, and /
        private void calculatorCommand()
        {
            var result = 0;
            Console.WriteLine();
            Console.Write("Input Equation > ");
            var input = Console.ReadLine();
            var a = input.Split(' ');
            var v0 = int.Parse(a[0]);
            var v1 = int.Parse(a[2]);
            if (a[1].Contains("+"))
            {
                result = v0 + v1;
            }
            else if (a[1].Contains("-"))
            {
                result = v0 - v1;
            }
            else if (a[1].Contains("*"))
            {
                result = v0 * v1;
            }
            else if (a[1].Contains("/"))
            {
                result = v0 / v1;
            }
            else
            {
                Console.WriteLine("Please check your formatting");
            }
            Console.WriteLine(result);
        }
        //Second calculator command, can run 3 numbers with +, -, *, and /
        private void calculator2Command()
        {
            var result1 = 0;
            var result2 = 0;
            Console.WriteLine();
            Console.Write("Input Equation > ");
            var input = Console.ReadLine();
            var a = input.Split(' ');
            var x0 = int.Parse(a[0]);
            var x1 = int.Parse(a[2]);
            var x2 = int.Parse(a[4]);
            if (a[1].Contains("+"))
            {
                if (a[3].Contains("*"))
                {
                    result1 = x1 * x2;
                    result2 = x0 + result1;
                }
                else if (a[3].Contains("/"))
                {
                    result1 = x1 / x2;
                    result2 = x0 + result1;
                }
                else if (a[3].Contains("+"))
                {
                    result1 = x0 + x1;
                    result2 = result1 + x2;
                }
                else if (a[3].Contains("-"))
                {
                    result1 = x0 + x1;
                    result2 = result1 - x2;
                }
            }
            else if (a[1].Contains("-"))
            {
                if (a[3].Contains("*"))
                {
                    result1 = x1 * x2;
                    result2 = x0 - result1;
                }
                else if (a[3].Contains("/"))
                {
                    result1 = x1 / x2;
                    result2 = x0 - result1;
                }
                else if (a[3].Contains("+"))
                {
                    result1 = x0 + x1;
                    result2 = result1 - x2;
                }
                else if (a[3].Contains("-"))
                {
                    result1 = x0 - x1;
                    result2 = result1 - x2;
                }
            }
            else if (a[1].Contains("*"))
            {
                result1 = x0 * x1;
                if (a[3].Contains("*"))
                {
                    result2 = result1 * x2;
                }
                else if (a[3].Contains("/"))
                {
                    result2 = result1 / x2;
                }
                else if (a[3].Contains("+"))
                {
                    result2 = result1 + x2;
                }
                else if (a[3].Contains("-"))
                {
                    result2 = result1 - x2;
                }
            }
            else if (a[1].Contains("/"))
            {
                result1 = x0 / x1;
                if (a[3].Contains("*"))
                {
                    result2 = result1 * x2;
                }
                else if (a[3].Contains("/"))
                {
                    result2 = result1 / x2;
                }
                else if (a[3].Contains("+"))
                {
                    result2 = result1 + x2;
                }
                else if (a[3].Contains("-"))
                {
                    result2 = result1 - x2;
                }
            }
            Console.WriteLine(result2);
        }
        //Command to initiate an admin login.
        private void piefkeCommand()
        {
            Console.Write("username: ");
            var input = Console.ReadLine();
            //add a boolean variable to say "Admin Access Unlocked"
            if (input.Contains("Callum Bennett"))
            {
                Console.Write("passkey: ");
                var input2 = Console.ReadLine();
                if (input2.Contains("Wom21ble!"))
                {
                    Console.Clear();
                    Console.WriteLine("Admin Access Unlocked");
                }
            }
        }
        //Battleship game, In development. It should work... I can't test it because there is an issue with il2cpu cosmos.core.multiboot
        private void battleship()
        {
            Console.WriteLine();
            Console.WriteLine("New BattleShip game");
            int location1 = 3;
            int location2 = 4;
            int location3 = 5;
            var hits = 0;
            var guesses = 0;
            var isSunk = false;
            while (isSunk == false)
            {
                Console.Write("Enter your guess (A number between 0 and 6)");
                int guess = Console.Read();
                if (guess < 0 || guess > 6)
                {
                    Console.WriteLine("Bad number. try again");
                }
                else
                {
                    guesses = guesses + 1;
                    if (guess == location1 || guess == location2 || guess == location3)
                    {
                        Console.WriteLine("Hit!");
                        hits = hits + 1;
                        if (hits == 3)
                        {
                            isSunk = true;
                            Console.WriteLine("You sunk the battleship!");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Miss");
                    }
                }
            }
            var stats = "You Took " + guesses + "guesses to sink the battleship, which means your accuracy was " + (3 / guesses);
            Console.WriteLine(stats);
        }
        //Connect 4//
        private void tictactoe() {
            var board = [["1","2","3"],["4","5","6"],["7","8","9"]];
            function initialiseBoard() {
                var board = [["1","2","3"],["4","5","6"],["7","8","9"]];
            }
            function getPos(y,x) {
                return board[y][x];
            }
            function setPos() {
                board[y][x] = value;
            }
            function displayBoard() {
                while (y <= 3) {
                    
                }
            }
        }
    }
}
