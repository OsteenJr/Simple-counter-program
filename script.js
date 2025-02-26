const countLabel = document.getElementById("countlabel");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
let count = 0;

// increaseBtn.onclick = function () {
//     count++;
//     countLabel.textContent = count;
// }

// increaseBtn.addEventListener("click", function () {
//     count++;
//     countLabel.textContent = count;
// })

function increaseCount() {
    count++;
    countLabel.textContent = count;
}

function decreaseCount() {
    count--;
    countLabel.textContent = count;
}

function resetCount() {
    count = 0;
    countLabel.textContent = count;
}