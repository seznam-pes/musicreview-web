function Submited() {
    alert("Vaše album bylo zasláno a brzy se na něj podívám!");
}

let dark = false;
const headers = document.getElementsByTagName("header");

function DarkMode() {
    if (dark === false) {
        dark = true;
        alert("čus pičus");
        headers[0].style.backgroundColor = "#461a3c";
    }
    else {
        dark = false;
    }
}
