function Submited() {
    alert("Vaše album bylo zasláno a brzy se na něj podívám!");
}

let dark = false;
const headers = document.getElementsByTagName("header");

function DarkMode() {
    if (dark === false) {
        dark = true;
        headers[0].style.backgroundColor = "#461a3c";
        headers[0].style.color = "#effeee";
    }
    else {
        dark = false;
        headers[0].style.backgroundColor = "#ecc6e3";
        headers[0].style.color = "#10011a";
    }
}
