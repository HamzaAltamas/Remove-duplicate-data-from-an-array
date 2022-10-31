let numInput = document.querySelector(".numInput");
let btn = document.querySelector(".btn");
let numbers = document.querySelector(".numbers");
let err = document.querySelector(".err");

let arr = [];
let uniqArr = [];

btn.addEventListener("click", () => {
  if (!numInput.value) {
    numInput.placeholder = "Please Enter a data";
  } else {
    numInput.placeholder = "Enter your data...";
    arr.push(numInput.value);
    arr.map((i) => {
      if (uniqArr.indexOf(i) === -1) {
        numbers.innerHTML = "";
        uniqArr.push(i);
        numbers.innerHTML += `${uniqArr}.`;
        err.innerHTML = ``;
      } else {
        err.innerHTML = `Same Data is Not Acceptable.`;
        err.style.color = "red";
      }
    });
  }
  numInput.value = "";
});
