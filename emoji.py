#/usr/bin/env python
# -*- coding: utf-8 -*-
# Emoji cipher
import json
from sys import argv, exit

# Get the first string from the arguments
string1 = " ".join(argv[1:])
# The first alphabet is a string of the 26 letters in the latin alphabet
alphabet1 = "abcdefghijklmnopqrstuvwxyz"

# Check whether the argv input only contains the letters of the alphabet
if any(letter not in alphabet1 for letter in string1):
    # If not, abort
    exit("Invalid input. Aborting.")

# Get the emoji list from the emojilist file
with open("emojilist") as f:
    emojilist = json.loads(f.read())

# The second alphabet is a string of all emojis
alphabet2 = "".join([emoji[0] for emoji in emojilist])

# This is a list of the emoji meanings that will be used later on
meanings = [emoji[1] for emoji in emojilist]


# Function that takes a string and an alphabet and returns the
# position of the string in all combinations of the alphabet
def intify(string, alphabet):
    # Add up all combinations for lengths lower than the current length
    number = sum([len(alphabet)**i for i in range(len(string))])
    # Variable for the possible combinations of the current length
    combinations = len(alphabet)**(len(string))
    # Go through each letter in the string
    for letter in string:
        # Prepare the possible combinations for the next letter
        combinations /= len(alphabet)
        # Add the possible combinations for the current letter to the 
        # total number
        number += alphabet.index(letter) * combinations
    return number

# Function that takes a number and an alphabet and returns the 
# number-th combination of the alphabet
def wordify(number, alphabet):
    string = ""
    while 1:
        # Check whether this is the final character
        if number <= len(alphabet):
            # Prepend final character to string
            string = alphabet[number-1] + string
            # Stop the loop, it is done
            break
        # Get the  character position
        loc = number % len(alphabet)
        # If it's the last character it shouldn't be 0
        loc += len(alphabet) * (loc == 0)
        # Prepend character to string
        # (it works from the ground up)
        string = alphabet[loc-1] + string
        # Remove character from number
        number = (number - loc) / len(alphabet)
    return string


# Get the integer from the first string and first alphabet
integer = intify(string1, alphabet1)

# Get the second string from the integer and second alphabet
string2 = wordify(integer, alphabet2)

# Print the important things
#print number
print string2
print ", ".join([meanings[alphabet2.index(letter)] for letter in string2])
