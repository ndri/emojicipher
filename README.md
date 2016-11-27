# emojicipher
Turn words into emojis and vice versa.

Demo at http://andri.io/emojicipher

I got the emojis and their order from http://unicode.org/emoji/charts/full-emoji-list.html

I recommend setting [Emoji One](http://emojione.com/) as a system font so the app works better

The javascript version uses [peterolson/BigInteger.js](https://github.com/peterolson/BigInteger.js) to get accurate integers above 2^53.

# Rules

You enter either a-z+spaces[27 total] or emojis[1791 total] separated by spaces and get the opposite.

The emojis have to be separated by spaces, because some emojis consist of two or more characters and separating them is a nightmare.

# How it works

This table should explain it pretty well:

![table](https://i.imgur.com/awl0zED.png)


# Examples

![example1](https://i.imgur.com/ar46EaX.png)

![example2](https://i.imgur.com/ZL2jTQE.png)

    $ python emojicipher.py test
    🤰🏽 🙍🏿


    $ python emojicipher.py 🤰🏽 🙍🏿
    test


# TODO
* Find out whether this is actually a cipher or not
* Make the web app responsive
