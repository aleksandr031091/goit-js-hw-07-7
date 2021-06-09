// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка 'незнакомец'.

const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

const inputText = () =>
  (refs.outputName.textContent =
    refs.inputName.value !== "" ? refs.inputName.value : "незнакомец");

refs.inputName.addEventListener("input", inputText);
