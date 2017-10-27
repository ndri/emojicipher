# emojicipher
Hide messages in emojis.

Demo at https://andri.io/emojicipher

I got the emojis and their order from http://unicode.org/emoji/charts/full-emoji-list.html (warning, huge page)

I recommend setting [Emoji One](http://emojione.com/) as a system font so the app works better.

The javascript version uses [peterolson/BigInteger.js](https://github.com/peterolson/BigInteger.js) to get accurate integers above 2^53.

# Rules

You enter either letters with spaces [27 total] or emojis [1791 total] separated by spaces and get the equivalent of the opposite alphabet.

There will be around 2.27 letters for every emoji if there are 27 letters and 1791 emojis. It would be 2.0 if there were 729 emojis and 3.0 if there were 19683 emojis.

The emojis have to be separated by spaces, because some emojis consist of two or more characters and separating them is a nightmare.

I guess this is more an encoding than a cipher.

# How it works

This table should explain it pretty well:

![table](https://i.imgur.com/awl0zED.png)

# Examples

hello <=> `😀 💘 ⚫`

what is up <=> `😚 🖕🏿 💵 💬 🏜`

the quick brown fox jumps over the lazy dog <=> `🦇 🇦🇷 🤶🏽 🇯🇲 ♣ 🕹 🐪 🇳🇺 🤰🏽 🔲 🇲🇷 🇲🇱 🇸🇱 🇸🇬 🍑 ♐ 🏜 📺 🇨🇦`

send nudes <=> `😘 👨‍👩‍👦 👞 🏉 🏭`

# Advanced

There is an advanced menu that opens when you click the “Advanced” link under the textbox.

It lets you change the order or the contents of the alphabets and there is a shuffle button to randomise the order.

You can add more characters like numbers, symbols or foreign letters.

You shouldn't really mess with the emoji alphabet, but you might want to use older emoji sets, since not all devices have the latest emojis yet. Maybe type in all the emojis from your phone keyboard.

Also, you can make your emoji alphabet have the same amount of characters as your regular alphabet, so it works as an **actual** cipher!

Keep in mind that the sender and recipient should have the same alphabets.

# Python version

There is a Python version that used to be a good alternative when the Javascript version was broken, but now it's useless and I might remove it. I guess it's more readable than the Javascript version.

# Changelog

* 2016-12-27
    * Added an advanced menu that lets you change the alphabets.
    * Changed the onkeyup event to oninput, which also detects pastes and whatnot.
* 2016-12-17
    * Added zero-width joiners between family members in family emojis, so they work better now.
* 2016-12-03
    * Added support for Emoji :shortcodes:, so now you can type for example `:grinning: :laughing: :grinning:` and it will work. This is great for copying emojis from sites like Slack and GitHub.
        * I got the shortcodes from http://emoji.codes/family and it seems that they're not very universal, so copying from some sites will not work.
        * Please add ones that you find to [emojishortcodes.js](https://github.com/ndri/emojicipher/blob/master/emojishortcodes.js). I have already added some that I found on Telegram.
    * Made it a little responsive, so it's better on mobile devices.
    * Removed the vertical centering and moved the container to the top, so the scrollbar works.
* 2016-11-27
    * Switched to [peterolson/BigInteger.js](https://github.com/peterolson/BigInteger.js), so the JavaScript app works well.

# TODO
* Improve the shortcode list
