// Function that shuffles an array in place
// https://stackoverflow.com/a/12646864/12123296
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// Function that returns the index of the word in all possible combinations
// of the given alphabet
const intify = (string, alphabet) => {
    let number = 0n;
    for (let i = 0; i < string.length; i++) {
        number += BigInt(alphabet.length) ** BigInt(i);
    }

    let combinations = BigInt(alphabet.length) ** BigInt(string.length);
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        combinations = combinations / BigInt(alphabet.length);
        letternumber = BigInt(alphabet.indexOf(letter)) * combinations;
        number += letternumber;
    }
    return number;
};

// Function that turns the index into a word using the alphabet
const wordify = (number, alphabet) => {
    let out = [];
    while (true) {
        let alphabet_length = BigInt(alphabet.length);

        if (number <= BigInt(alphabet_length)) {
            out.unshift(alphabet[number - 1n]);
            break;
        }

        let loc = number % BigInt(alphabet_length);
        if (loc == 0n) {
            loc += BigInt(alphabet_length);
        }
        out.unshift(alphabet[loc - 1n]);
        number = (number - loc) / BigInt(alphabet_length);
    }
    return out;
};

// This activates when the input textbox is used
const main = () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const textalphabet = document.getElementById("textalphabet");
    const emojialphabet = document.getElementById("emojialphabet");

    let alphabet1 = textalphabet.value.split("");
    let alphabet2 = emojialphabet.value.split(" ");

    let text = input.value.toLowerCase();

    // Match all :shortcodes: and try to replace them with emojis
    let re = /:([^: ]+):/g;
    if (re.test(text)) {
        input.value = text.replace(re, getemoji);
    }

    text = text.split("");

    // Check whether the input is correct according to the first alphabet
    if (!text.some(e => alphabet1.indexOf(e) === -1)) {
        let integer = intify(text, alphabet1);
        output.value = wordify(integer, alphabet2).join(" ");
    } else {
        // Check the second alphabet
        let text = input.value.trim().split(" ");
        if (!text.some(e => alphabet2.indexOf(e) === -1)) {
            let integer = intify(text, alphabet2);
            output.value = wordify(integer, alphabet1).join("");
        } else {
            output.value = "Invalid input";
        }
    }

    output.style.height = "auto";
    output.style.height = output.scrollHeight + "px";
};

window.onload = () => {
    const input = document.getElementById("input");
    const advancedbutton = document.getElementById("advancedbutton");
    const advanced = document.getElementById("advanced");
    const textalphabet = document.getElementById("textalphabet");
    const emojialphabet = document.getElementById("emojialphabet");
    const shuffletext = document.getElementById("shuffletext");
    const shuffleemojis = document.getElementById("shuffleemojis");

    textalphabet.value = "abcdefghijklmnopqrstuvwxyz ";
    emojialphabet.value = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 ☺ 🙂 🤗 🤔 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 🤓 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 😬 😰 😱 😳 😵 😡 😠 😇 🤠 🤡 🤥 😷 🤒 🤕 🤢 🤧 😈 👿 👹 👺 💀 ☠ 👻 👽 👾 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🙈 🙉 🙊 👦 👦🏻 👦🏼 👦🏽 👦🏾 👦🏿 👧 👧🏻 👧🏼 👧🏽 👧🏾 👧🏿 👨 👨🏻 👨🏼 👨🏽 👨🏾 👨🏿 👩 👩🏻 👩🏼 👩🏽 👩🏾 👩🏿 👴 👴🏻 👴🏼 👴🏽 👴🏾 👴🏿 👵 👵🏻 👵🏼 👵🏽 👵🏾 👵🏿 👶 👶🏻 👶🏼 👶🏽 👶🏾 👶🏿 👼 👼🏻 👼🏼 👼🏽 👼🏾 👼🏿 👮 👮🏻 👮🏼 👮🏽 👮🏾 👮🏿 🕵 🕵🏻 🕵🏼 🕵🏽 🕵🏾 🕵🏿 💂 💂🏻 💂🏼 💂🏽 💂🏾 💂🏿 👷 👷🏻 👷🏼 👷🏽 👷🏾 👷🏿 👳 👳🏻 👳🏼 👳🏽 👳🏾 👳🏿 👱 👱🏻 👱🏼 👱🏽 👱🏾 👱🏿 🎅 🎅🏻 🎅🏼 🎅🏽 🎅🏾 🎅🏿 🤶 🤶🏻 🤶🏼 🤶🏽 🤶🏾 🤶🏿 👸 👸🏻 👸🏼 👸🏽 👸🏾 👸🏿 🤴 🤴🏻 🤴🏼 🤴🏽 🤴🏾 🤴🏿 👰 👰🏻 👰🏼 👰🏽 👰🏾 👰🏿 🤵 🤵🏻 🤵🏼 🤵🏽 🤵🏾 🤵🏿 🤰 🤰🏻 🤰🏼 🤰🏽 🤰🏾 🤰🏿 👲 👲🏻 👲🏼 👲🏽 👲🏾 👲🏿 🙍 🙍🏻 🙍🏼 🙍🏽 🙍🏾 🙍🏿 🙎 🙎🏻 🙎🏼 🙎🏽 🙎🏾 🙎🏿 🙅 🙅🏻 🙅🏼 🙅🏽 🙅🏾 🙅🏿 🙆 🙆🏻 🙆🏼 🙆🏽 🙆🏾 🙆🏿 💁 💁🏻 💁🏼 💁🏽 💁🏾 💁🏿 🙋 🙋🏻 🙋🏼 🙋🏽 🙋🏾 🙋🏿 🙇 🙇🏻 🙇🏼 🙇🏽 🙇🏾 🙇🏿 🤦 🤦🏻 🤦🏼 🤦🏽 🤦🏾 🤦🏿 🤷 🤷🏻 🤷🏼 🤷🏽 🤷🏾 🤷🏿 💆 💆🏻 💆🏼 💆🏽 💆🏾 💆🏿 💇 💇🏻 💇🏼 💇🏽 💇🏾 💇🏿 🚶 🚶🏻 🚶🏼 🚶🏽 🚶🏾 🚶🏿 🏃 🏃🏻 🏃🏼 🏃🏽 🏃🏾 🏃🏿 💃 💃🏻 💃🏼 💃🏽 💃🏾 💃🏿 🕺 🕺🏻 🕺🏼 🕺🏽 🕺🏾 🕺🏿 👯 🕴 🗣 👤 👥 🤺 🏇 ⛷ 🏂 🏌 🏄 🏄🏻 🏄🏼 🏄🏽 🏄🏾 🏄🏿 🚣 🚣🏻 🚣🏼 🚣🏽 🚣🏾 🚣🏿 🏊 🏊🏻 🏊🏼 🏊🏽 🏊🏾 🏊🏿 ⛹ ⛹🏻 ⛹🏼 ⛹🏽 ⛹🏾 ⛹🏿 🏋 🏋🏻 🏋🏼 🏋🏽 🏋🏾 🏋🏿 🚴 🚴🏻 🚴🏼 🚴🏽 🚴🏾 🚴🏿 🚵 🚵🏻 🚵🏼 🚵🏽 🚵🏾 🚵🏿 🏎 🏍 🤸 🤸🏻 🤸🏼 🤸🏽 🤸🏾 🤸🏿 🤼 🤼🏻 🤼🏼 🤼🏽 🤼🏾 🤼🏿 🤽 🤽🏻 🤽🏼 🤽🏽 🤽🏾 🤽🏿 🤾 🤾🏻 🤾🏼 🤾🏽 🤾🏾 🤾🏿 🤹 🤹🏻 🤹🏼 🤹🏽 🤹🏾 🤹🏿 👫 👬 👭 💏 👩‍❤️‍💋‍👨 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩 💑 👩‍❤️‍👨 👨‍❤️‍👨 👩‍❤️‍👩 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 🏻 🏼 🏽 🏾 🏿 💪 💪🏻 💪🏼 💪🏽 💪🏾 💪🏿 🤳 🤳🏻 🤳🏼 🤳🏽 🤳🏾 🤳🏿 👈 👈🏻 👈🏼 👈🏽 👈🏾 👈🏿 👉 👉🏻 👉🏼 👉🏽 👉🏾 👉🏿 ☝ ☝🏻 ☝🏼 ☝🏽 ☝🏾 ☝🏿 👆 👆🏻 👆🏼 👆🏽 👆🏾 👆🏿 🖕 🖕🏻 🖕🏼 🖕🏽 🖕🏾 🖕🏿 👇 👇🏻 👇🏼 👇🏽 👇🏾 👇🏿 ✌ ✌🏻 ✌🏼 ✌🏽 ✌🏾 ✌🏿 🤞 🤞🏻 🤞🏼 🤞🏽 🤞🏾 🤞🏿 🖖 🖖🏻 🖖🏼 🖖🏽 🖖🏾 🖖🏿 🤘 🤘🏻 🤘🏼 🤘🏽 🤘🏾 🤘🏿 🤙 🤙🏻 🤙🏼 🤙🏽 🤙🏾 🤙🏿 🖐 🖐🏻 🖐🏼 🖐🏽 🖐🏾 🖐🏿 ✋ ✋🏻 ✋🏼 ✋🏽 ✋🏾 ✋🏿 👌 👌🏻 👌🏼 👌🏽 👌🏾 👌🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👎 👎🏻 👎🏼 👎🏽 👎🏾 👎🏿 ✊ ✊🏻 ✊🏼 ✊🏽 ✊🏾 ✊🏿 👊 👊🏻 👊🏼 👊🏽 👊🏾 👊🏿 🤛 🤛🏻 🤛🏼 🤛🏽 🤛🏾 🤛🏿 🤜 🤜🏻 🤜🏼 🤜🏽 🤜🏾 🤜🏿 🤚 🤚🏻 🤚🏼 🤚🏽 🤚🏾 🤚🏿 👋 👋🏻 👋🏼 👋🏽 👋🏾 👋🏿 👏 👏🏻 👏🏼 👏🏽 👏🏾 👏🏿 ✍ ✍🏻 ✍🏼 ✍🏽 ✍🏾 ✍🏿 👐 👐🏻 👐🏼 👐🏽 👐🏾 👐🏿 🙌 🙌🏻 🙌🏼 🙌🏽 🙌🏾 🙌🏿 🙏 🙏🏻 🙏🏼 🙏🏽 🙏🏾 🙏🏿 🤝 🤝🏻 🤝🏼 🤝🏽 🤝🏾 🤝🏿 💅 💅🏻 💅🏼 💅🏽 💅🏾 💅🏿 👂 👂🏻 👂🏼 👂🏽 👂🏾 👂🏿 👃 👃🏻 👃🏼 👃🏽 👃🏾 👃🏿 👣 👀 👁 👁‍🗨 👅 👄 💋 💘 ❤ 💓 💔 💕 💖 💗 💙 💚 💛 💜 🖤 💝 💞 💟 ❣ 💌 💤 💢 💣 💥 💦 💨 💫 💬 🗨 🗯 💭 🕳 👓 🕶 👔 👕 👖 👗 👘 👙 👚 👛 👜 👝 🛍 🎒 👞 👟 👠 👡 👢 👑 👒 🎩 🎓 ⛑ 📿 💄 💍 💎 🐵 🐒 🦍 🐶 🐕 🐩 🐺 🦊 🐱 🐈 🦁 🐯 🐅 🐆 🐴 🐎 🦌 🦄 🐮 🐂 🐃 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🐫 🐘 🦏 🐭 🐁 🐀 🐹 🐰 🐇 🐿 🦇 🐻 🐨 🐼 🐾 🦃 🐔 🐓 🐣 🐤 🐥 🐦 🐧 🕊 🦅 🦆 🦉 🐸 🐊 🐢 🦎 🐍 🐲 🐉 🐳 🐋 🐬 🐟 🐠 🐡 🦈 🐙 🐚 🦀 🦐 🦑 🦋 🐌 🐛 🐜 🐝 🐞 🕷 🕸 🦂 💐 🌸 💮 🏵 🌹 🥀 🌺 🌻 🌼 🌷 🌱 🌲 🌳 🌴 🌵 🌾 🌿 ☘ 🍀 🍁 🍂 🍃 🍇 🍈 🍉 🍊 🍋 🍌 🍍 🍎 🍏 🍐 🍑 🍒 🍓 🥝 🍅 🥑 🍆 🥔 🥕 🌽 🌶 🥒 🍄 🥜 🌰 🍞 🥐 🥖 🥞 🧀 🍖 🍗 🥓 🍔 🍟 🍕 🌭 🌮 🌯 🥙 🥚 🍳 🥘 🍲 🥗 🍿 🍱 🍘 🍙 🍚 🍛 🍜 🍝 🍠 🍢 🍣 🍤 🍥 🍡 🍦 🍧 🍨 🍩 🍪 🎂 🍰 🍫 🍬 🍭 🍮 🍯 🍼 🥛 ☕ 🍵 🍶 🍾 🍷 🍸 🍹 🍺 🍻 🥂 🥃 🍽 🍴 🥄 🔪 🏺 🌍 🌎 🌏 🌐 🗺 🗾 🏔 ⛰ 🌋 🗻 🏕 🏖 🏜 🏝 🏞 🏟 🏛 🏗 🏘 🏙 🏚 🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏬 🏭 🏯 🏰 💒 🗼 🗽 ⛪ 🕌 🕍 ⛩ 🕋 ⛲ ⛺ 🌁 🌃 🌄 🌅 🌆 🌇 🌉 ♨ 🌌 🎠 🎡 🎢 💈 🎪 🎭 🖼 🎨 🎰 🚂 🚃 🚄 🚅 🚆 🚇 🚈 🚉 🚊 🚝 🚞 🚋 🚌 🚍 🚎 🚐 🚑 🚒 🚓 🚔 🚕 🚖 🚗 🚘 🚙 🚚 🚛 🚜 🚲 🛴 🛵 🚏 🛣 🛤 ⛽ 🚨 🚥 🚦 🚧 🛑 ⚓ ⛵ 🛶 🚤 🛳 ⛴ 🛥 🚢 ✈ 🛩 🛫 🛬 💺 🚁 🚟 🚠 🚡 🚀 🛰 🛎 🚪 🛌 🛏 🛋 🚽 🚿 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🛁 ⌛ ⏳ ⌚ ⏰ ⏱ ⏲ 🕰 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 🕙 🕥 🕚 🕦 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌙 🌚 🌛 🌜 🌡 ☀ 🌝 🌞 ⭐ 🌟 🌠 ☁ ⛅ ⛈ 🌤 🌥 🌦 🌧 🌨 🌩 🌪 🌫 🌬 🌀 🌈 🌂 ☂ ☔ ⛱ ⚡ ❄ ☃ ⛄ ☄ 🔥 💧 🌊 🎃 🎄 🎆 🎇 ✨ 🎈 🎉 🎊 🎋 🎍 🎎 🎏 🎐 🎑 🎀 🎁 🎗 🎟 🎫 🎖 🏆 🏅 🥇 🥈 🥉 ⚽ ⚾ 🏀 🏐 🏈 🏉 🎾 🎱 🎳 🏏 🏑 🏒 🏓 🏸 🥊 🥋 🥅 🎯 ⛳ ⛸ 🎣 🎽 🎿 🎮 🕹 🎲 ♠ ♥ ♦ ♣ 🃏 🀄 🎴 🔇 🔈 🔉 🔊 📢 📣 📯 🔔 🔕 🎼 🎵 🎶 🎙 🎚 🎛 🎤 🎧 📻 🎷 🎸 🎹 🎺 🎻 🥁 📱 📲 ☎ 📞 📟 📠 🔋 🔌 💻 🖥 🖨 ⌨ 🖱 🖲 💽 💾 💿 📀 🎥 🎞 📽 🎬 📺 📷 📸 📹 📼 🔍 🔎 🔬 🔭 📡 🕯 💡 🔦 🏮 📔 📕 📖 📗 📘 📙 📚 📓 📒 📃 📜 📄 📰 🗞 📑 🔖 🏷 💰 💴 💵 💶 💷 💸 💳 💹 💱 💲 ✉ 📧 📨 📩 📤 📥 📦 📫 📪 📬 📭 📮 🗳 ✏ ✒ 🖋 🖊 🖌 🖍 📝 💼 📁 📂 🗂 📅 📆 🗒 🗓 📇 📈 📉 📊 📋 📌 📍 📎 🖇 📏 📐 ✂ 🗃 🗄 🗑 🔒 🔓 🔏 🔐 🔑 🗝 🔨 ⛏ ⚒ 🛠 🗡 ⚔ 🔫 🏹 🛡 🔧 🔩 ⚙ 🗜 ⚗ ⚖ 🔗 ⛓ 💉 💊 🚬 ⚰ ⚱ 🗿 🛢 🔮 🛒 🏧 🚮 🚰 ♿ 🚹 🚺 🚻 🚼 🚾 🛂 🛃 🛄 🛅 ⚠ 🚸 ⛔ 🚫 🚳 🚭 🚯 🚱 🚷 📵 🔞 ☢ ☣ ⬆ ↗ ➡ ↘ ⬇ ↙ ⬅ ↖ ↕ ↔ ↩ ↪ ⤴ ⤵ 🔃 🔄 🔙 🔚 🔛 🔜 🔝 🛐 ⚛ 🕉 ✡ ☸ ☯ ✝ ☦ ☪ ☮ 🕎 🔯 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔀 🔁 🔂 ▶ ⏩ ⏭ ⏯ ◀ ⏪ ⏮ 🔼 ⏫ 🔽 ⏬ ⏸ ⏹ ⏺ ⏏ 🎦 🔅 🔆 📶 📳 📴 ♻ 📛 ⚜ 🔰 🔱 ⭕ ✅ ☑ ✔ ✖ ❌ ❎ ➕ ➖ ➗ ➰ ➿ 〽 ✳ ✴ ❇ ‼ ⁉ ❓ ❔ ❕ ❗ 〰 © ® ™ #️⃣ *️⃣ 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 💯 🔠 🔡 🔢 🔣 🔤 🅰 🆎 🅱 🆑 🆒 🆓 ℹ 🆔 Ⓜ 🆕 🆖 🅾 🆗 🅿 🆘 🆙 🆚 🈁 🈂 🈷 🈶 🈯 🉐 🈹 🈚 🈲 🉑 🈸 🈴 🈳 ㊗ ㊙ 🈺 🈵 ▪ ▫ ◻ ◼ ◽ ◾ ⬛ ⬜ 🔶 🔷 🔸 🔹 🔺 🔻 💠 🔘 🔲 🔳 ⚪ ⚫ 🔴 🔵 🏁 🚩 🎌 🏴 🏳 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🇪🇷 🇪🇸 🇪🇹 🇪🇺 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇦 🇹🇨 🇹🇩 🇹🇫 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇲 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇽🇰 🇾🇪 🇾🇹 🇿🇦 🇿🇲 🇿🇼";

    let alphabet1 = textalphabet.value.split("");
    let alphabet2 = emojialphabet.value.split(" ");

    main(); // Run it in case there is something in the input box from the cache
    input.addEventListener("input", main); // oninput is great

    // This toggles the advanced form when you click on the button
    advancedbutton.onclick = () => {
        advanced.style.display = advanced.style.display === "none" ? "" : "none";
    };

    // These update the alphabet variables when the respective textboxes are used
    textalphabet.oninput = () => {
        alphabet1 = textalphabet.value.split("");
        main();
    };
    emojialphabet.oninput = () => {
        alphabet2 = emojialphabet.value.split(" ");
        main();
    };

    // These shuffle the alphabets and update the variables
    shuffletext.onclick = () => {
        shuffle(alphabet1);
        textalphabet.value = alphabet1.join("");
        main();
    };
    shuffleemojis.onclick = () => {
        shuffle(alphabet2);
        emojialphabet.value = alphabet2.join(" ");
        main();
    };
};
