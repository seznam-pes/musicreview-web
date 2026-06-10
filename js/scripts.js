function Submited() {
    alert("Vaše album bylo zasláno a brzy se na něj podívám!");
}

dark = false;

function DarkMode() {
    if (dark == false) {
        dark = true;
        alert("čus pičus");
        document.getElementsByTagName("header").style.backgroundColor = "#461a3c";
    }
    else {
        dark = false;
    }
}
