code = "urerunirnserrpubpbyngr"
code = code.lower()

alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabetArray = list(alphabet)

def letterIndex(letter):
	for i in range(0, len(alphabetArray)):
		if letter == alphabetArray[i]:
			return i
	print("letter: "+ letter + " is not in the alphabet")

codeCharacters = list(code)

for something in range(26):

	outputString = ""

	for letter in codeCharacters:
	    shiftedPosition = letterIndex(letter) + something
        if shiftedPosition >= 26:
            shiftedPosition = shiftedPosition - 26
	    outputString += alphabetArray[shiftedPosition]

	print(outputString)