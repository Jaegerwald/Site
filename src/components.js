class HeaderElement extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
`<span id="logo"><img src="./img/logo.png" draggable="false"></img></span>
<ul>
    <li><a href="info.html" target="_blank">Site Info</a></li>
    <li><a href="https://github.com/Jaegerwald/Site/" target="_blank">Source</a></li>
</ul>`;
    }
}
customElements.define("header-content", HeaderElement);

class NavigationElement extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
`<span class="title">Site</span>
<ul class="navigation">
    <li><a href="./"><i- class="start">house</i-> Home</a></li>
    <li><a href="./sitemap"><i- class="start">sitemap</i-> Sitemap</a></li>
    <li><a href="./about"><i- class="start">help</i-> About</a></li>
    <li><a href="./noteboard"><i- class="start">note</i-> Noteboard</a></li>
    <li><a href="./credits"><i- class="start">heart</i-> Credits</a></li>
</ul>
<span class="title">You</span>
<ul class="navigation">
    <li><a href="./resources"><i- class="start">book</i-> Resources</a></li>
    <li><a href="./wmp_skins"><i- class="start">ipod</i-> WMP Skins</a></li>
</ul>
<span class="title">Me</span>
<ul class="navigation">
    <li><a href="./about_me"><i- class="start">user</i->About Me</a></li>
    <li><a href="./blog"><i- class="start">feed</i-> Blog</li>
</ul>
`
    }
}
customElements.define("navigation-content", NavigationElement);

class ChangelogElement extends HTMLElement {
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
customElements.define("changelog-content", ChangelogElement)

class FooterElement extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
`<div id="footerInfo">
    <span id="logoFooter"><img src="./img/logo.png" draggable="false"></img></span>
    <p>Copyright © 2025 Jaegerwald</p>
    <top-button>Return to top</top-button>
</div>
<div id="footerLinks">
    <h3>Links</h3>
    <ul>
        <li><a href="https://github.com/Jaegerwald/Site/" target="_blank">Site Source</a></li>
        <li><a href="info.html" target="_blank">Site Info</a></li>
        <li><s><a target="_blank">Contact</a></s> <- Soon™</li>
    </ul>
</div>`;
    }
}
customElements.define("footer-content", FooterElement);

class TopButtonElement extends HTMLElement {
    constructor() {
        super();

        this.addEventListener("click", function() {
            document.documentElement.scrollTop = 0;
        })
    }
}
customElements.define("top-button", TopButtonElement);