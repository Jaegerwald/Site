// .webp only, has to match filename
const EMOJIS = [
    "33",
    "sheldon",
    "yippee"
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
