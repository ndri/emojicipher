#/usr/bin/env python
# -*- coding: utf-8 -*-
# Emoji cipher

from sys import argv, exit

# Get the arguments
if argv[1] == "encipher":
    en = True
    string1 = " ".join(argv[2:])
elif argv[1] == "decipher":
    en = False
    string1 = " ".join(argv[2:]).split()
else:
    exit("Usage: emoji.py encipher|decipher) " \
         "(words with spaces|emojis separated by spaces)")

# The first alphabet is just letters with spaces
alphabet1 = list("abcdefghijklmnopqrstuvwxyz ")

# Getting the second alphabet from an external file
with open("emojilist") as f:
    emojilist = f.read().splitlines()
alphabet2 = [emoji.split("|")[0] for emoji in emojilist]
#meanings = [emoji.split("|")[1] for emoji in emojilist]

# Checking whether the inputs are appropriate for their alphabets
if en and any(letter not in alphabet1 for letter in string1):
    exit("Please use only letters and spaces.")
elif not en and any(letter not in alphabet2 for letter in string1):
    exit("Please use only emojis separated by spaces.")


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

# Enciphering/deciphering and returning the output
if en:
    string2 = " ".join(encipher(string1))
else:
    string2 = "".join(decipher(string1))

print string2