let counter = 0;

let span = document.querySelector("span");
let container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");

console.log(buttons);
buttons.forEach(function (item) {
  item.addEventListener("click", function () {
    if (this.classList.contains("decrease")) {
      counter--;
    } else if (this.classList.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    span.textContent = counter;

    if (counter < 0) {
      span.style.color = "red";
      container.style.borderColor = "red";
    } else if (counter > 0) {
      span.style.color = "green";
      container.style.borderColor = "green";
    } else {
      span.style.color = "black";
      container.style.borderColor = "black";
    }
  });
});
