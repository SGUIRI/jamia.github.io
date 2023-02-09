var mOnu = document.getElementById("monu");
var hamBorger = document .getElementById("hamborger");


hamBorger.addEventListener("click",clickMe);
function clickMe() {
    mOnu.classList.toggle ("is-active");
    hamBorger. classList. toggle("is-active");
}

