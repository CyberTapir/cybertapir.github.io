#include <stdio.h>
int main(){
    //Get input stored in a variable
    printf("Enter your equation with a space between the operator and numbers > ");
    int num1;
    int num2;
    scanf("");
    string dataInput = input;
    //store seperated floats in variables
    inpNum1 = dataInput[0];
    inpNum2 = dataInput[4];
    inpOperator = dataInput[2];
    //call the function with the inputs
    calculate(inpNum1, inpNum2, inpOperator);
}

Int calculate(float num1; float num2; string operator){
    //Set result to 0
    float result = 0;
    //if opetater is ==, calculate result
    if (operator == "+"){
        result = num1 + num2;
    } else if (operator == "-"){
        result = num1 - num2;
    } else if (operator == "*"){
        result = num1 * num2;
    } else if (operator == "/"){
        result = num1 / num2;
    }
    //write result
    printf(result);
}
