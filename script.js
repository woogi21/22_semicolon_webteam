const searchst = document.getElementById("s-s")

function changest() {
    searchst.style.width = "150px";
    searchst.style.transition = "1s";
}

searchst.addEventListener("focus", changest);

function reBack() {
    searchst.style.width = "40px";
}

searchst.addEventListener("blur", reBack)

