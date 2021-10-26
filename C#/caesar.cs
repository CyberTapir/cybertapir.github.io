using System;
namespace CaesarCipher
{
  class Program
  {
    static void Main(string[] args)
    {
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
      Console.Write("Enter message to Encrypt > ");
      string secretInput1 = Console.ReadLine();
      string secretInput = secretInput1.ToLower();
      char[] secretMessage = secretInput.ToCharArray();
      char[] encryptedMessage = new char[secretMessage.Length];
      for (int i = 0; i < secretMessage.Length; i++) {
        char currentLetter = secretMessage[i];
        int position = Array.IndexOf(alphabet, currentLetter);
        int newPosition = (position + 3) % 26;
        char newLetter = alphabet[newPosition];
        encryptedMessage[i] = newLetter;
      }
      string output = String.Join("", encryptedMessage);
      Console.WriteLine(output);
    }
  }
}
