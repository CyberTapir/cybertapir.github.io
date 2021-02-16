using System;

namespace PasswordChecker
{
  class Program
  {
    public static void Main(string[] args)
    {
      int minLength = 8;
      string uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      string lowercase = "abcdefghijklmnopqrstuvwxyz";
      string digits = "0123456789";
      string specialChars = "#?!";
      int score = 0;
      Console.Write("Password > ");
      string userPassword = Console.ReadLine();
      int passLength = userPassword.Length;
      if (passLength >= minLength) {
        score = score + 1;
      }
      bool uppercaseCheck = Tools.Contains(userPassword, uppercase);
      if (uppercaseCheck == true) {
        score = score + 1;
      }
      bool lowercaseCheck = Tools.Contains(userPassword, lowercase);
      if (lowercaseCheck == true) {
        score = score + 1;
      }
      bool numCheck = Tools.Contains(userPassword, digits);
      if (numCheck == true) {
        score = score + 1;
      }
      bool charCheck = Tools.Contains(userPassword, specialChars);
      if (uppercaseCheck == true) {
        score = score + 1;
      }
      if (score == 1) {
        Console.WriteLine("Your entered password is Weak");
      } else if (score == 2) {
        Console.WriteLine("Your entered password is Medium");
      } else if (score == 3) {
        Console.WriteLine("Your entered password is Strong");
      } else if (score == 4 || score == 5) {
        Console.WriteLine("Your entere password is Extremely Strong");
      } else if (userPassword == "password" || userPassword == "1234") {
        score = 0;
        Console.WriteLine("This password is crap. Make a new one");
      }
    }
  }
}
