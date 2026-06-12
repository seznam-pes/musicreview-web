function Submited() {
    alert("Vaše album bylo zasláno a brzy se na něj podívám!");
}

let dark = false;
const headers = document.getElementsByTagName("header");
const links = document.getElementsByTagName("a");
const cards = document.getElementsByClassName("horiz-card");
const buttons = document.getElementsByTagName("button");
const menu = document.getElementsByTagName("menu");
const forms = document.getElementsByTagName("form");
const labels = document.getElementsByTagName("label");
const inputs = document.getElementsByTagName("input");

function DarkMode() {
    if (dark === false) {
        dark = true;
        headers[0].style.backgroundColor = "#461a3c";
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#effeee";
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.color = "#f9f4f5";
            cards[i].style.backgroundColor = "#10011a";
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#092607";
        }

        if (menu[0]) {
            menu[0].style.backgroundColor = "#10011a";
            menu[0].style.color = "#f9f4f5";
        }

        if (forms[0]) {
            forms[0].style.backgroundColor = "#461a3c";
        }

        if (labels[0]) {
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = "#f9f4f5";
        }
    }

        if (inputs[3]) {
            inputs[3].style.backgroundColor = "#092607";
        }
    }
    else {
        dark = false;
        headers[0].style.backgroundColor = "#ecc6e3";
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#10011a";
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "#f9f4f5";
            cards[i].style.color = "#10011a";
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#a1fcb5";
        }

        if (menu[0]) {
            menu[0].style.backgroundColor = "#f9f4f5";
            menu[0].style.color = "#10011a";
        }

        if (forms[0]) {
            forms[0].style.backgroundColor = "#ecc6e3";
        }

        if (labels[0]) {
            for (let i = 0; i < labels.length; i++) {
                labels[i].style.color = "#10011a";
            }
        }

        if (inputs[3]) {
            inputs[3].style.backgroundColor = "#a1fcb5";
        }
    }
}
