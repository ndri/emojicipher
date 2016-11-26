#/usr/bin/env python
# -*- coding: utf-8 -*-
# Emoji cipher
from sys import argv, exit

# Function that returns the index of the word in all possible combinations
# of the given alphabet
def intify(string, alphabet):
    number = sum([len(alphabet)**i for i in range(len(string))])
    combinations = len(alphabet)**(len(string))
    for letter in string:
        combinations /= len(alphabet)
        number += alphabet.index(letter) * combinations
    return number

# Function that turns the index into a word using the alphabet
def wordify(number, alphabet):
    out = []
    while 1:
        if number <= len(alphabet):
            out.insert(0, alphabet[number-1])
            break
        loc = number % len(alphabet)
        loc += len(alphabet) * (loc == 0)
        out.insert(0, alphabet[loc-1])
        number = (number - loc) / len(alphabet)
    return out

# Functions that use the above functions to encipher/decipher words
def encipher(string):
    integer = intify(string, alphabet1)
    return wordify(integer, alphabet2)

def decipher(string):
    integer = intify(string, alphabet2)
    return wordify(integer, alphabet1)


# The first alphabet is just the latin alphabet with a space
alphabet1 = list("abcdefghijklmnopqrstuvwxyz ")

# Getting the second alphabet (1791 emojis) from an external file
with open("emojilist") as f:
    emojilist = f.read().splitlines()
alphabet2 = [emoji.split("|")[0] for emoji in emojilist]
#meanings = [emoji.split("|")[1] for emoji in emojilist]


# Getting the input from the args
string1 = " ".join(argv[1:]).lower()

# Checking whether the inputs are valid and which alphabet the input is using
if not any(letter not in alphabet1 for letter in string1):
    print " ".join(encipher(string1))
else:
    string1 = string1.split()
    if not any(letter not in alphabet2 for letter in string1):
        print "".join(decipher(string1))
    else:
        print "Invalid input."