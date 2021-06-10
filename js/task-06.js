// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputref = document.querySelector("#validation-input");

const focusValue = () => {
  if (inputref.value.length === Number(inputref.dataset.length)) {
    replaceClass("invalid", "valid");
  } else {
    replaceClass("valid", "invalid");
  }
};

const replaceClass = (oldClass, newClass) => {
  inputref.classList.add(newClass);
  inputref.classList.remove(oldClass);
};

inputref.addEventListener("blur", focusValue);
