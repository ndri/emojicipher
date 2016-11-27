# emojicipher
Turn words into emojis and vice versa.

Demo at http://andri.io/emojicipher

I got the emojis and their order from http://unicode.org/emoji/charts/full-emoji-list.html

There is a web version and a Python version.

# Rules

You enter either a-z+spaces[27 total] or emojis[1791 total] separated by spaces and get the opposite.

The emojis have to be separated by spaces, because some emojis consist of two or more characters and separating them is a nightmare.

# How it works

This table should explain it pretty well:

![table](https://i.imgur.com/awl0zED.png)

# Problem with the Javascript version

Javascript only supports integers up to 2^53, after which they become inaccurate. Because of this, the Javascript version gives incorrect results with inputs of more than 11 characters or 5 emojis, since they have more than 2^53 possible combinations.

This is a huge problem and I don't yet know how to fix this. The Python script however, works flawlessly.

# Examples

    $ python emojicipher.py test
    🤰🏽 🙍🏿


    $ python emojicipher.py 🤰🏽 🙍🏿
    test


    $ python emojicipher.py this is a really long sentence and the python script does not have a problem with it
    🛑 ♿ 🕢 🇪🇪 ✈ 🔎 🤞🏿 🌫 💲 👯 🏩 🐱 🚲 🏀 ⛳ 🍋 🤢 🚄 🐥 ✌🏾 🤙🏼 🖊 🚶🏾 🇹🇦 👪 🤝🏽 ♉ ⏬ 👖 👩‍❤️‍💋‍👩 ✔ 🐩 🇦🇷 🚄 🎏 🖕🏼 🐠


    $ python emojicipher.py 🛑 ♿ 🕢 🇪🇪 ✈ 🔎 🤞🏿 🌫 💲 👯 🏩 🐱 🚲 🏀 ⛳ 🍋 🤢 🚄 🐥 ✌🏾 🤙🏼 🖊 🚶🏾 🇹🇦 👪 🤝🏽 ♉ ⏬ 👖 👩‍❤️‍💋‍👩 ✔ 🐩 🇦🇷 🚄 🎏 🖕🏼 🐠
    this is a really long sentence and the python script does not have a problem with it

![example1](https://i.imgur.com/ar46EaX.png)

![example2](https://i.imgur.com/ZL2jTQE.png)


# TODO
* Javascript big numbers support for the web version
* Make the web app responsive
* Find out whether this is actually a cipher or not