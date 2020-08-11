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
