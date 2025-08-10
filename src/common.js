console.log("%c💬 Haii! Feel free to go to sources and copy my code. :3", "font-size:16px;color:white;")

async function getJson(url) {
    let result = {};
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            result = data;
        });
    return result;
}

// .webp only, has to match filename
const EMOJIS = [
    "33", "sheldon", "yippee"
]

class Emoji extends HTMLElement {
    constructor() {
        super();

        const name = this.innerText.trim();
        if (EMOJIS.includes(name)) {
            this.innerText = "";

            const emoji = document.createElement("img");
            emoji.className = "emoji";
            emoji.src = `./img/emojis/${name}.webp`;
            emoji.alt = `:${name}:"`;

            this.appendChild(emoji);
        } else {
            this.innerText = `:${name}:`;
        }
    }
}
customElements.define("e-", Emoji);

const ICONS = [
    "coins", "house", "new", "time", "error", "picture", "asterisk_orange", "asterisk_yellow", "newspaper",
    "paste_plain", "book_open", "sitemap", "note", "heart", "feed", "book", "help", "user"
]

class Icon extends HTMLElement {
    constructor() {
        super();

        const name = this.innerText.trim().toLowerCase();
        if (ICONS.includes(name)) {
            this.innerText = "";

            const icon = document.createElement("img");
            icon.draggable = false;
            icon.className = "icon";
            icon.src = `./img/icons/${name}.png`;
            icon.alt = `[${name}]"`;

            this.appendChild(icon);
        } else {
            this.innerText = `[${name}]`;
        }
    }
}
customElements.define("i-", Icon);
