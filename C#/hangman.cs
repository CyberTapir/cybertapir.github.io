using System;
namespace hangman
{
  class Program
  {
    //Global(close to) variables
    private readonly Random _random = new Random();
    static void main(string[], args)
    {
      Console.WriteLine("Hangman");
      Console.WriteLine("Play (0), or Instructions (1)");
      string input = Console.ReadLine();
      int intInput = Convert.ToInt32(input);
      if (intInput == 0)
      {
        playGame();  
      } else if (intInput == 1)
      {
        instructions();
      }
    }
    static void playGame()
    {
      string[] possibleWords = {"", "", ""};
      bool gameOver = false;
      int word = random.Next(0, possibleWords.Length);
      string pickedWord = possibleWords[word];
      char[] guessedLetters;
      char[] word = pickedWord.ToCharArray();
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
      int word = random.Next(0, possibleWords.Length);
      for (int i = 0; i < word.Length; i++)
      {
        Console.Write("_");
      }
    }
    static void instructions()
    {
      Console.Clear();
    }
    //Instructions method
    //Output instructions
    //Console.readline to return to main
  
    //gameplay method
    //Words
    //pick a random word
    //save the word as a char string
    //Write out the _s according to the length of the word
    //Write out the lives left
    //User guessing letter
    //if
      //Letter is in word
        //Rewrite console, replacing the correct letter
      //letter is not in word
        //rewrite console, updating the lives left
    //Gameover
      //User loses
      //User wins
  }
}
