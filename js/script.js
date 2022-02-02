// Question 1

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    console.log("I'm a button");
});
// const onClick = function () {
//     console.log("I'm a button");
// };
// btn.addEventListener("click", onClick);


const input = document.querySelector("input[type=text]");
const counter = document.querySelector(".count");
const btn2 = document.querySelector("button[type=button]");

function characterCount() {
    const countCharacters = input.value.trim().length;
    counter.innerHTML = countCharacters;
}
btn2.addEventListener("click", characterCount);

// message.onkeyup = function (event) {
//     console.log(event.target.value.length);
//     const len = event.target.value.length;
//     countCharacters.innerHTML = len;
// };
