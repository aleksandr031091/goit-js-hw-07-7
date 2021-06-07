// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
  value: document.querySelector("#value"),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const decrement = () => {
  if (counterValue !== 0) {
    refs.value.textContent = counterValue -= 1;
  }
};

const increment = () => {
  refs.value.textContent = counterValue += 1;
};

refs.btnDecrement.addEventListener("click", decrement);
refs.btnIncrement.addEventListener("click", increment);
