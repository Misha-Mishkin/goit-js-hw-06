const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredients => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredients;
  
  return liEl;
})

const ulEl = document.querySelector('#ingredients');
ulEl.append(...elements);
console.log(ulEl);

