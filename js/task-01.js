const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

const listHeaders = document.querySelectorAll(".item h2");
listHeaders.forEach(function (element) {
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
}); 