// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputref = document.querySelector("#validation-input");

// const focusValue = () => {
//   if (inputref.value.length === Number(inputref.dataset.length)) {
//     inputref.classList.add("valid");
//     inputref.classList.remove("invalid");
//   } else {
//     inputref.classList.add("invalid");
//     inputref.classList.remove("valid");
//   }
// };

const focusValue = () => {
  inputref.value.length !== Number(inputref.dataset.length)
    ? inputref.classList.add("invalid")
    : inputref.classList.replace("invalid", "valid");
};

inputref.addEventListener("blur", focusValue);
