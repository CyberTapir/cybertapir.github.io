operatortodo = input("What operator would you like to use? (a/s/m/d)")
while true:
    if operatortodo == ("a"):
        print("you have chosen addition")
        number1 = input("Enter your first number ")
        number2 = input("Enter your second number ")
        print(number1 + number2)
    if operatortodo == ("s"):
        print("you have chosen subtraction")
        number1 = input("Enter your first number")
        number2 = input("Enter your second number")
        print(number1 - number2)
    if operatortodo ==  ("m"):
        print("you  have chosen multipication.")
        number1 = input("Enter your first number")
        number2 = input("Enter your second number")
        print(number1 * number2)
    if operatortodo == ("d"):
        print("you have chosen division")
        number1 = input("Enter your first number")
        number2 = input("Enter your second number")
        print(number1 / number2)
    else:
        print("Entered incorectly")
