const btn = document.querySelector(".button");
const img = document.querySelector(".image");
const inputFirst = document.querySelector(".input_number_1");
const inputSecond = document.querySelector(".input_number_2");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  let firstNum = +inputFirst.value;
  let secondNum = +inputSecond.value;
  if (typeof firstNum === "number" && typeof secondNum === "number" && !isNaN(firstNum) && !isNaN(secondNum)) {
    if (firstNum >= 100 && firstNum <= 300 && secondNum >= 100 && secondNum <= 300) {
      result.innerText = "";
      let fetchUrl = `https://picsum.photos/${firstNum}/${secondNum}`;
      fetch(fetchUrl)
        .then((response) => {
          return response;})
        .then((data) => {
          img.setAttribute("src", data.url);
        })
    } else {
      result.innerText = "Одно из чисел вне диапазона от 100 до 300";
    }
  } else {
    result.innerText = "Ошибка при вводе данных"
  }
})