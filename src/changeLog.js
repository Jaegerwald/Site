
// <ul id="changelog">
//     <li>Icons, Shrine Box, To-do List, extra stuff, and a few tweaks<span class="date">7/3/2025</span></li>
//     <li>Locked in—Guestbook, Site info, and much more <span class="date">7/2/2025</span></li>
//     <li>Basic mobile compatability, emojis <span class="date">6/24/2025</span></li>
//     <li>Added everything <e->33</e-> <span class="date">6/11/2025</span></li>
// </ul>



class ChangeLogElement extends HTMLElement {
    constructor() {
        super();

        const populate = async () => {
            let changes = await getJson("./src/data/changes.json");
            console.log("%c[Changes]", "color:orange;", changes);
            changes.reverse();

            let list = document.createElement("ul");
            list.id = "changelog";

            changes.forEach(change => {
                let item = document.createElement("li");
                item.innerHTML = `${change.note} <span class="date">${change.date}</span>`;
                list.appendChild(item);
            });

            this.innerText = "";
            this.appendChild(list);
        };
        populate();
    }
}
customElements.define("changelog-content", ChangeLogElement)