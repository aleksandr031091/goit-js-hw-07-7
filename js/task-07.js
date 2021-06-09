// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  text: document.querySelector("#text"),
  sizeControl: document.querySelector("#font-size-control"),
};

const inputSize = () => {
  refs.text.style.fontSize = refs.sizeControl.value + "px";
};

refs.sizeControl.addEventListener("input", inputSize);
