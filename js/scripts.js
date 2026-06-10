function Submited() {
    alert("Vaše album bylo zasláno a brzy se na něj podívám!");
}

let dark = false;
const headers = document.getElementsByTagName("header");
const links = document.getElementsByTagName("a");
const cards = document.getElementsByClassName("horiz-card");
const buttons = document.getElementsbyTagName("button");

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

        document.getElementByTagName("menu").style.backgroundColor = "#10011a";
        document.getElementByTagName("menu").style.color = "#f9f4f5";
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
            buttons[i].style.backgroundColor = "#effeee";
        }

        document.getElementByTagName("menu").style.backgroundColor = "#f9f4f5";
        document.getElementByTagName("menu").style.color = "#10011a";
    }
}
