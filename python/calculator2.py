str = input("Enter the equation as follows (5 + 2) > ")
equation = str.split(" ")
num1 = int(equation[0])
operator = equation[1]
num2 = int(equation[2])
answer = 0
match operator:
    case "+":
        answer = num1 + num2
    case "-":
        answer = num1 - num2
    case "*":
        answer = num1 * num2
    case "/": 
        answer = num1 / num2
print(answer)