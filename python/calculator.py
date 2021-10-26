operatortodo = input("What operator would you like to use? (a/s/m/d)")
solved = False
while solved == False:
    if operatortodo == ("a"):
        print("you have chosen addition")
        number1 = input("Enter your first number ")
        number2 = input("Enter your second number ")
        print(number1 + number2)
        solved = True
    if operatortodo == ("s"):
        print("you have chosen subtraction")
        number1 = input("Enter your first number")
        number2 = input("Enter your second number")
        print(number1 - number2)
        solved = True
    if operatortodo ==  ("m"):
        print("you  have chosen multipication.")
        number1 = input("Enter your first number")
        number2 = input("Enter your second number")
        print(number1 * number2)
        solved = True
    if operatortodo == ("d"):
        print("you have chosen division")
        number1 = input("Enter your first number")
        number2 = input("Enter your second number")
        print(number1 / number2)
        solved = True
    else:
        print("Entered incorectly")