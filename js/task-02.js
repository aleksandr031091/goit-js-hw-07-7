// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsRef = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// ingredients.map((item) =>
//   ingredientsRef.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
// );

const arrItems = ingredients.map((item) => {
  const markupEl = document.createElement("li");

  markupEl.textContent = item;

  return markupEl;
});

ingredientsRef.append(...arrItems);
