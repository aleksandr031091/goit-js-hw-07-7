// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const refs = {
  input: document.querySelector("input"),
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  divBox: document.querySelector("#boxes"),
};

const getAmount = () => {
  let amount = refs.input.value;

  const markup = createBoxes(amount);

  refs.divBox.insertAdjacentHTML("afterbegin", markup);
};

const createBoxes = (amount) => {
  let element = "";
  let elSize = 30;
  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    element += `<div
     style="width:${elSize}px;
      height:${elSize}px;
       background-color:
    rgb(
    ${random()},
    ${random()},
    ${random()}
    );"
    ></div>`;

    elSize += 10;
  }

  return element;
};

const destroyBoxes = () => {
  refs.divBox.innerHTML = "";
};

const random = () => {
  return Math.floor(Math.random() * 255);
};

refs.render.addEventListener("click", getAmount);
refs.destroy.addEventListener("click", destroyBoxes);
