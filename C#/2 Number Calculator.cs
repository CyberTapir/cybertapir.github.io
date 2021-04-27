using System;
namespace calculator
{
    class Program
    {
        public static void Main(string[] args)
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
                    result1 = x0 /  x1;
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
        }
    }
}