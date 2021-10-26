module AngleConversion where

--radians to degrees
degreesToRadians :: Double -> Double
degreesToRadians angle = (pi/180) * angle

--radiansToDegrees
radiansToDegrees :: Double -> Double
radiansToDegrees radian = (180/pi) * radian