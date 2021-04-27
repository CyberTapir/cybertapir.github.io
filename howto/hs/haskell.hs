--This is Haskell, a function based programming language
--Every piece of code is executed through functions
--It is run through the terminal, once some bits are installed

module haskell where
--This is the main statement. each file will have a line that looks like this
--Inbetween module and where is where the name of the file goes (without the .hs)

demoFunc :: Double -> Double
--This will accept one floating point number as an input
demoFunc inpDouble = inpDouble * 2
--This will double the floating point number input, and output it

--there must be a one line space between functions
demoFuncTwo :: Int -> Int -> Int --You can chain however many inputs you need
demoFuncTwo num1 num2 = num1 + num2
--here the two int inputs are added together


--The first line is the initialising statement
--demoFunc :: Double -> Double
--The function is called demoFunc
--The output will be a FPN, and has one FPN input

--the second line is where the action happens
--demoFunc inpDouble = inpDouble * 2
--In function demoFunc, with input named inpDouble, Double inpDouble