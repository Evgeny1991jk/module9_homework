const btn = document.querySelector(".button");
const img = document.querySelector(".image");
const inputFirst = document.querySelector(".input_number_1");
const inputSecond = document.querySelector(".input_number_2");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    let firstNum = +inputFirst.value;
    let secondNum = +inputSecond.value;
    result.innerHTML = "";
    if ((isNaN(firstNum) || firstNum < 1 || firstNum > 10) && (isNaN(secondNum) || secondNum < 1 || secondNum > 10)) {
        result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (isNaN(firstNum) || firstNum < 1 || firstNum > 10) {
        result.innerHTML = "Номер страницы вне диапазона от 1 до 10"; 
    } else if (isNaN(secondNum) || secondNum < 1 || secondNum > 10) {
        result.innerHTML = "Лимит вне диапазона от 1 до 10";
    } else {
        sendRequest(`https://picsum.photos/v2/list?page=${firstNum}&limit=${secondNum}`);
    }
  });

  function sendRequest(url) {
    return fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      for(let key in data) {
        let item = data[key];
        result.innerHTML += `
         <img src=${item.download_url} width="150" height="150">
         `
      }
    });
  }