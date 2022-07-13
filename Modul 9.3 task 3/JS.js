
function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    const val = +input.value;
    if (val < 1 || val > 10) {
        resultNode.innerText = "Введите число от 1 до 10";
      } else {
        let responseUrl = "https://picsum.photos/v2/list?limit=" + val;
    xhr.open("GET", responseUrl);
        };
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };
  
  const resultNode = document.querySelector('.j-result');
  
  const input = document.querySelector(".input_number");
  
  const btnNode = document.querySelector('.j-btn-request');
  
  function displayResult(apiData) {
    let cards = '';  
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });  
    resultNode.innerHTML = cards;
  }
  
  btnNode.addEventListener('click', () => {
    useRequest('https://picsum.photos/v2/list?limit=10', displayResult);
  })