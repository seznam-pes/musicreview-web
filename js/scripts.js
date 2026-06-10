function Submited() {
    alert("Vaše album bylo zasláno a brzy se na něj podívám!");
}

let dark = false;
const headers = document.getElementsByTagName("header");
const links = document.getElementsByTagName("a");

function DarkMode() {
    if (dark === false) {
        dark = true;
        headers[0].style.backgroundColor = "#461a3c";
        links.style.color = "#effeee";
    }
    else {
        dark = false;
        headers[0].style.backgroundColor = "#ecc6e3";
        links.style.color = "#10011a";
    }
}
