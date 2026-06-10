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
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#effeee";
        }
    }
    else {
        dark = false;
        headers[0].style.backgroundColor = "#ecc6e3";
        for (let i = 0; i < links.length; i++) {
            links.style.color = "#10011a";
        }
        
    }
}
