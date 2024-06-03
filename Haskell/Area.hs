module Area where

-- add 1 to an integer
addOne :: Integer -> Integer
addOne int = int + 1

-- calculate area of a square with only integer lengths
areaSquare :: Integer -> Integer
areaSquare len = len * len

-- calculate area of a rectangle with only integer lengths
areaRectangle :: Double -> Double -> Double
areaRectangle height width = height * width

-- Use 3 inputs to calculate the area of a triangle
areaTriangle :: Double -> Double -> Double -> Double 
areaTriangle a b c = sqrt(s*(s-a)*(s-b)*(s-c))
    where
        s = (a+b+c) / 2