const categoriesItems = document.querySelectorAll(".item");
console.log('Numbers of categories: ' + categoriesItems.length);

categoriesItems.forEach((categoriesItem) => {
    const textH2 = categoriesItem.querySelector("h2");
    console.log('Category: ', textH2.textContent);

    const numberOfItems = categoriesItem.querySelectorAll("li");
    console.log('Elements: ', numberOfItems.length);
});
