// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelectorAll(".item");

console.log(`'в списке ${categoriesRef.length} категории.'`);

const arrCategories = [...categoriesRef];

arrCategories.forEach((item) => {
  const nameCategories = item.firstElementChild.textContent;
  const quantityElinCategories = item.lastElementChild.children.length;
  console.log(
    `Категория: ${nameCategories} \nКоличество элементов: ${quantityElinCategories}`
  );
});
