/*
C programming language
file extension is .c
The MacOS Kernel is written in C
The Windows Kernel is written in C, with a bit of Assembly

to run your program
open a terminal window
run gcc fileName.c
run a.out

Comments are // for one line or / *		* / for multi-line
*/
#include <stdio.h>//Main framework. This must be at the top of every C file

int main() { //This is the main method of the program. All code in here will be executed

	int myNum = 5; //Here is an example variable decleration. Int of value 5 is stored as myNum

	bool isFive = false; //Here is a bool statement being declared

	if(myNum = 5){ //Here is an example C if statement. 
		//if the value in the brackets is true, execute the following code

		isFive = true; //Updating the value of the boolean variable

		exampleMethod(); 
		//This is calling the method exampleMethod with no input value
		
	} //Don't forget to end the if statement!

	return(0); //This line terminates the program, so use it wisely!
}

int exampleMethod() {
	//This is a method that can be called within the main function

	int[] myArray = [1,2,3,4,5,6,7,8,9,0];
	//This is a number array with 10 values (0-9)

	for (int i = 0; i < myArray.Length; i++) {
		//This is an example for loop
		//It has an int value (i), with a value of 0
		//The array will stop when i is no longer smaller than myArray.length
		// one will be added to i

		printf(myArray[i]);
		//This will print the array value equal to i
		//if i = 2, it will output 3

	} //End the for loop
}//end of method