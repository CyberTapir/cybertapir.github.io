import random

board = [["1","2","3"],
         ["4","5","6"],
         ["7","8","9"]]

def initialiseBoard():
    global board
    board = [["1","2","3"],
             ["4","5","6"],
             ["7","8","9"]]

def getPos(y,x):
    global board

    return board[y][x]
    

def setPos(y,x,value):
    global board

    board[y][x]= value

# Only look at the code below here if you are interested!
# If you just want to get the game working, you only have to write the code above

def displayBoard():
    global board

    #Loop through each row of the board, and display it
    for y in range(0,3):
        print (board[y])

def checkForWin():
    hasWon = False
    #First check for 3 across
    for y in range(0,3):
        same = True
        for x in range(0,3):
            if x > 0:
                same = same and getPos(y,(x-1)) == getPos(y,x)
        if (same):
            hasWon = True
    #Then check for 3 down
    for x in range(0,3):
        same = True
        for y in range(0,3):
            if y > 0:
                same = same and getPos((y-1),x) == getPos(y,x)
        if (same):
            hasWon = True

    #Finally check diagonals
    hasWon = hasWon or (getPos(0,0) == getPos(1,1) and getPos(1,1) == getPos(2,2)) or (getPos(0,2) == getPos(1,1) and getPos(1,1) == getPos(2,0))
    return hasWon


running = True
while running:
    wouldYouLikeToPlaylevel123or4 = input("Would you like to play level 1, 2, 3 or 4? (1/2/3/4)")
    if wouldYouLikeToPlaylevel123or4 == "" or wouldYouLikeToPlaylevel123or4.startswith("1") or wouldYouLikeToPlaylevel123or4.startswith("2") or wouldYouLikeToPlaylevel123or4.startswith("3") or wouldYouLikeToPlaylevel123or4.startswith("4"):
        gameWon = False

        #Clear the board
        initialiseBoard()
        print("You are going to play as O, so the computer will move first")

        #Place the computer's first piece
        if wouldYouLikeToPlaylevel123or4.startswith("1"):
            setPos(random.randint(0,2),random.randint(0,2),"X")
        if wouldYouLikeToPlaylevel123or4.startswith("2"):
            setPos(1,1,"X")
        if wouldYouLikeToPlaylevel123or4.startswith("3"):
            setPos(1,1,"X")
        if wouldYouLikeToPlaylevel123or4.startswith("4"):
            setPos(1,1,"X")
            setPos(2,2,"O")
            setPos(0,0,"X")

        #Loop while the game has not been won
        while not gameWon:

            #Display the board
            displayBoard()

            #Get the players input
            playerChoice = input("Where would you like to place a piece?")
            personplayHappened = False 
            for y in range(0,3):
                for x in range(0,3):

                    #If this coordinate is the number that the player entered (and they didn't try to cheat by using "X" or "O")
                    if getPos(y,x) == playerChoice and (playerChoice != "X" and playerChoice != "O"):

                        #Confirm that something has happened this turn, and set the board position to an O
                        personplayHappened = True
                        setPos(y,x,"O")


                        #If there has been a win since that piece was placed, the player has won, so tell them that
                        if checkForWin():
                            print("You won! Well Done!")
                            displayBoard()
                            gameWon = True
                        
                        #Otherwise, we need to see what the computer will do
                        if wouldYouLikeToPlaylevel123or4.startswith("1") or wouldYouLikeToPlaylevel123or4.startswith("2"):
                            computerplayHappened = False
                            nextPosX = random.randint(0,2)
                            nextPosY = random.randint(0,2)
                            setPos(nextPosX, nextPosY, "X")
                            computerplayHappened = True
                        else:
                            y = 0
                            computerplayHappened = False
                             
                            nextPosX = -1
                            nextPosY = -1

                            for y in range (0,3):  #Finding out if it has two "X"s in a row to then take the last square if there isn't already a nought
                                CountX = 0
                                SpaceColumn = 5
                                for X in range (0,3):
                                    if getPos(y,X) == "X":
                                        CountX=CountX + 1
                                    else:
                                        if getPos(y,X) != 'O':
                                            SpaceColumn = X
                                if CountX == 2 and SpaceColumn < 3:
                                    setPos(y,SpaceColumn,"X")
                                    computerplayHappened = True
                                if computerplayHappened == False:
                                    for X in range (0,3):  #Finding out if it has two "X"s in a column to then take the last square if there isn't already a nought
                                        CountY = 0
                                        SpaceRow = 5
                                        for y in range (0,3):
                                            if getPos(y,X) == "X":
                                                CountY = CountY + 1
                                            else:
                                                if getPos(y,X) != 'O':
                                                    SpaceRow = y
                                        if CountY == 2 and SpaceRow < 3:
                                            setPos(SpaceRow,X,"X")
                                            computerplayHappened = True
    
                            if computerplayHappened == False and wouldYouLikeToPlaylevel123or4.startswith("4"):
                                for y in range (0,3):  #Blocking the Nought from collecting 3 in a row
                                    CountNoughtRow = 0
                                    SpaceColumnP = 5
                                    for X in range (0,3):
                                        if getPos(y,X) == "X":
                                            CountNoughtRow = CountNoughtRow + 1
                                        else:
                                            if getPos(y,X) != 'O':
                                                SpaceColumnP = X
                                    print(CountNoughtRow)
                                    print(SpaceColumnP)
                                    if CountNoughtRow == 2 and SpaceColumnP < 3:
                                        print("Moved to block in row")
                                        setPos(y,SpaceColumnP,"X")
                                        computerplayHappened = True
                                 
                            if computerplayHappened == False and wouldYouLikeToPlaylevel123or4.startswith("4"):
                                for x in range (0,3):  #Blocking the Nought from collecting 3 in a column. Still a work in progress...
                                    CountNoughtColumn = 0
                                    SpaceRowP = 5
                                    for y in range (0,3):
                                        if getPos(y,x) == "O":
                                            CountNoughtColumn = CountNoughtColumn + 1
                                        else:
                                            if getPos(y,x) != 'X':
                                                SpaceRowP = y
                                    print(CountNoughtRow)
                                    print(SpaceRowP)
                                    if CountNoughtColumn == 2 and SpaceRowP < 3:
                                        print("Moved to block in Column")
                                        setPos(SpaceRowP,x,"X")
                                        computerplayHappened = True

                            if computerplayHappened == False:
                                 print("AI moved randomly")
                                 nextPosX = random.randint(0,2)
                                 nextPosY = random.randint(0,2)
                                 setPos(nextPosX,nextPosY, "X")
 
                            #Generate new random numbers until the computer has selected an empty square
                            while getPos(nextPosY,nextPosX) == "X" or getPos(nextPosY,nextPosX) == "O":
                                nextPosX = random.randint(0,2)
                                nextPosY = random.randint(0,2)

                            #Place an X in the square that the computer has chosen
                            if nextPosX == nextPosY and nextPosX == -1:
                                setPos(nextPosY,nextPosX,"X")
 
                            #If there has been a win after that piece was placed, the computer has won, so say that
                            if checkForWin():
                                print("Computer won! Better luck next time!")
                                displayBoard()
                                gameWon = True

            #If nothing happened this turn, it means the player chose an invalid space, so tell them that
            if not personplayHappened:
                print("Please choose an unoccupied space")

            #Otherwise, we need to check if there are any free spaces
            else:
                vacantSquare = False
                for y in range(0,3):
                    for x in range(0,3):
                        #This line is a bit complicated, but, basically, if there is any unfilled square, this will set vacantSquare to True. If you've got any questions about this, I can explain it to you in more detail.
                        vacantSquare = vacantSquare or (getPos(y,x) != "X" and getPos(y,x) != "O")

                #If there are no blank spaces, and the game hasn't been won, then there has been a draw.
                if not vacantSquare and not gameWon:
                    gameWon = True
                    print("It was a draw!")
                    displayBoard()