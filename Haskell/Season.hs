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

isCold :: Season -> Bool
isCold season = case season of
    Spring -> False
    Summer -> False
    Autumn -> False
    Winter -> True