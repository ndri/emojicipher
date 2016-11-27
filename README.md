# emojicipher
Turn words into emojis and vice versa.

Demo at http://andri.io/emojicipher

I got the emojis and their order from http://unicode.org/emoji/charts/full-emoji-list.html

I recommend setting [Emoji One](http://emojione.com/) as a system font so the app works better.

The javascript version uses [peterolson/BigInteger.js](https://github.com/peterolson/BigInteger.js) to get accurate integers above 2^53.

# Rules

You enter either letters with spaces [27 total] or emojis [1791 total] separated by spaces and get the equivalent of the opposite alphabet.

The emojis have to be separated by spaces, because some emojis consist of two or more characters and separating them is a nightmare.

# How it works

This table should explain it pretty well:

![table](https://i.imgur.com/awl0zED.png)

# Python version

There is a Python version that used to be a good alternative when the Javascript version was broken, but now it's useless and I might remove it.

# Examples

hello => 😀 💘 ⚫

what is up => 😚 🖕🏿 💵 💬 🏜

the quick brown fox jumps over the lazy dog => 🦇 🇦🇷 🤶🏽 🇯🇲 ♣ 🕹 🐪 🇳🇺 🤰🏽 🔲 🇲🇷 🇲🇱 🇸🇱 🇸🇬 🍑 ♐ 🏜 📺 🇨🇦

send nudes => 😘 👨‍👩‍👦 👞 🏉 🏭

# TODO
* Find out whether this is actually a cipher or not
* Make the web app responsive
