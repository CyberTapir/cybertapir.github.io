#This is Python. The file extension is .py
#It is used mainly as it is a general language, and can be used for lots of things

import time #This is a framework, used for adding functionality to the program
import random #This is also a framework, This is for generating random numbers
#All frameworks used must be declared at the top of the file here

numVariable = 5 # This is a variable decleration, setting numVariable as 5

stringVariable = "Hello" # This is a string variable decleration, setting stringVariable as "Hello"

if numVariable >= 5: #This if statement says if numVariable is greater than or equal to 5, then execute.

    #In an if loop, it is important that The code inside is indented properly and the statement ends with a ':'

    numVariable += 1 #This adds one to numVariable, making it = 6

    numVariable -= 1 #This subtracts one from numVariable, making it = 5

for i in range(0,64):
    #this is a for loop
    print(i)
    #The output will be 0, 1, 2, etc

#This is out of the if loop, as it is not indented.
#This will run after the if loop

#Read Input
f = open('input.txt', 'r')
read_data = f.read()
f.close()
lines = read_data.split('\n')

#Split a string into a list
str.split(" ") #Use the char(s) you want to split

#Generate a random number
random.randrange(0, 2)
#also use 'import random' at the top of your python file