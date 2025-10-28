const shoe1 = document.querySelector(".shoe1");
const shoe2 = document.querySelector(".shoe2");
const shoe3 = document.querySelector(".shoe3");
const shoe4 = document.querySelector(".shoe4");
const shownshoe = document.querySelector(".shown-shoe");

function show1() {
    shownshoe.src = shoe1.src
}

function show2() {
    shownshoe.src = shoe2.src
}

function show3() {
    shownshoe.src = shoe3.src
}

function show4() {
    shownshoe.src = shoe4.src
}

shoe1.addEventListener("click", show1);
shoe2.addEventListener("click", show2);
shoe3.addEventListener("click", show3);
shoe4.addEventListener("click", show4);
