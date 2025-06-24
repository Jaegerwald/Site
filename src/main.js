// .webp only, has to match filename
const EMOJIS = [
    "33",
    "sheldon",
    "yippee"
]

class Emoji extends HTMLElement {

    constructor() {
        super();

        const n = this.innerText.trim();
        console.log(n);
        if (EMOJIS.includes(n)) {
            this.innerText = "";

            const emoji = document.createElement("img");
            emoji.className = "emoji";
            emoji.src = `./img/emojis/${n}.webp`;
            emoji.alt = `:${n}:"`

            this.appendChild(emoji);
        }
    }
}
customElements.define("e-", Emoji);