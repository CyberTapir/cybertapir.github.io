code = "vkihecmedyyhuseudeciqecpubf"
code.lower() 

alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabetArray = list(alphabet)

def letterIndex(letter):
	for i in range(0, len(alphabetArray)):
		if letter == alphabetArray[i]:
			return i
	print("letter: "+ letter + " is not in the alphabet")

codeCharacters = list(code)

outputString = ""

for letter in codeCharacters:
    shiftedPosition = letterIndex(letter) + 1
    outputString += alphabetArray[shiftedPosition]