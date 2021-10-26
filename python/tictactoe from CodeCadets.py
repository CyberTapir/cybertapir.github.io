import random

#introduce 2d arrays 
gameArr = [[0, 0, 0],
		   [0, 0, 0],
		   [0, 0, 0]]
player1 = input("Player1 Name: ")
player2 = input("Player2 Name: ")
AI = 0
myAI = 0

#checks names aren't the same
if player2 == player1:
	player2 = input("Please enter a unique player2 name:")
elif player1 == "Computer":
	AI = 1
elif player2 == "Computer":
	AI = 2
elif player1 == "MyAI":
	myAI = 1
elif player2 == "MyAI":
	myAI = 2

movesPlayed = 1

def drawGrid() :
	xORo = "X"
	print("    |    |    ")
	print("    |    |    ")
	print("----|----|----")
	print("    |    |    ")
	print("    |    |    ")
	print("----|----|----")
	print("    |    |    ")
	print("    |    |    ")


def getInput(player):
	moveType = "X"
	if player == player2:
		moveType = "O"
	if player == "Computer":
		move = aiMove(player)
		row = move[0]
		col = move[1]
		print("Computer plays " + moveType + " at row " + str(row) + ", col " + str(col))
		checkMoveValid(row, col, player)
	elif player == "MyAI":
		move = myAIMove(player)
		row = move[0]
		col = move[1]
		print("MyAI played " + moveType + " at row " + str(row) + ", col " + str(col))
		checkMoveValid(row, col, player)
	#Human player case
	else:
		row = int(input(player + ", which row would you like to draw a " + moveType + "?: "))
		col = int(input(player + ", which column would you like to draw a " + moveType + "?: "))
		checkMoveValid(row, col, player)
	
#activity 2
def checkMoveValid(row, col, player):
	return False

#checkWin/ finishGame - EXCERSISE 3
def checkWin():
	return False

#What to do when game ends
def finishGame(winningType):
	winner = ""
	if winningType == 1:
		winner = player1
	else:
		winner = player2
	print(winner + " Won!!")


#activity 1
def reDrawGrid():
	print("    |    |    ")
	print("    |    |    ")
	print("----|----|----")
	print("    |    |    ")
	print("    |    |    ")
	print("----|----|----")
	print("    |    |    ")
	print("    |    |    ")

def arrToXO(row, col):
	if gameArr[row][col] == 1:
		return "X"
	elif gameArr[row][col] == 2:
		return "O"
	else:
		return " "

def nextPlayer(player):
	global movesPlayed
	movesPlayed = movesPlayed + 1
	if player == player1:
		return player2
	else:
		return player1


#Computer Player Algorithms

def myAIMove(player):
	#Placeholder, replace with your function/s
	#NOTE: can play your AI against the AI's from the session by having player1 as "MyAI" and player 2 as "Computer"
	return randomMove()

def aiMove(player):
	#LIST OF AI's - need to return array [row,col] of move
	#Comment/uncomment out different functions for differet types of computer player

	#First Legal 
	#return getFirst()

	#Random, empty move
	#return randomMove()

	#Goes for coners first, then random
	#return corners()

	#Random corners, with check win/ blocks loss
	return checkTwo(player)

#Generates a random move in clear cell
def randomMove():
	i = 1 
	exit = False
	#In case first random value has already been played
	while i < 10 and exit == False:
		#Generates random row and col from 0 -> 2
		row = random.randint(0,2)
		col = random.randint(0,2)
		#Checks if that cell is empty
		if isEmpty(row, col) == True:
			exit = True
			return [row, col]

#----------------------------------------
# 			- AI Activities -
#----------------------------------------

#-------------
#AI ACTIVITY 1
#-------------
#Gets the first legal move
def getFirst():
	return [0, 0]

#-------------
#AI ACTIVITY 2
#-------------

#Goes for alternate corners first, then random
def corners():
	return randomMove()

#-------------
#AI ACTIVITY 3
#-------------

#Checks if will loose or win in the next move
def checkTwo(player):
	return corners()


def isEmpty(i,i2):
	if gameArr[i][i2] == 1 or gameArr[i][i2] == 2:
		return False
	else:
		return True

#starts the game
drawGrid()
getInput(player1)



