using System;
namespace ArchitectArithmetic
{
  class Program
  {
    static double rectArea(double length, double width) {
      double area = length * width;
      Console.WriteLine(area);
      return area;
    }
    static double triangleArea(double tLength, double tWidth){
      double triArea = tLength * tWidth;
      double triArea2 = triArea / 2;
      Console.WriteLine(triArea2);
      return triArea2;
    }
    static double circleArea(double radius) {
      double rSquared = Math.Pow(radius, 2);
      double circArea = (Math.PI * rSquared);
      Console.WriteLine(circArea);
      return circArea;
    }
    public static void Main(string[] args)
    {
      Console.Write("Pick your shape > ");
      string whichShape = Console.ReadLine();
      if (whichShape == "circle") {
        Console.Write("Radius > ");
        string Radius = Console.ReadLine();
        int theRadius = Convert.ToInt32(Radius);
        circleArea(theRadius);
      } else if (whichShape == "rect") {
        Console.Write("Length > ");
        string length1 = Console.ReadLine();
        int lengthInput = Convert.ToInt32(length1);
        Console.Write("Width > ");
        string width1 = Console.ReadLine();
        int widthInput = Convert.ToInt32(width1);
        rectArea(lengthInput, widthInput);
      } else if (whichShape == "tri") {
        Console.Write("Length > ");
        string length2 = Console.ReadLine();
        int lengthInputT = Convert.ToInt32(length2);
        Console.Write("Width > ");
        string width2 = Console.ReadLine();
        int widthInputT = Convert.ToInt32(width2);
        triangleArea(lengthInputT, widthInputT);
      }
    }
  }
}
