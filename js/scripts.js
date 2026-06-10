function Submited() {
    alert("Vaše album bylo zasláno a brzy se na něj podívám!");
}

dark = false;

function DarkMode() {
    alert("čus pičus");
    if (dark == false) {
        dark = true;
        document.getElementsByTagName("header").style.backgroundColor = "#461a3c";
    }
    else {

    }
}
