{-|
Module      : Season
Author      : Debashish Chakraborty, Your name and UID here
Date        : 29/01/2019
Description : This module contains functions to check characteristics of 
              different seasons.
-}
module Season where

data Season = Spring | Summer | Autumn | Winter
    deriving Show

--Exersise 2 in 3rd lab
--I am fairly sure this should work
isCold :: Season -> Bool
isCold season = case season of
    Spring | Summer | Autumn -> False
    --Summer -> False
    --Autumn -> False
    Winter -> True