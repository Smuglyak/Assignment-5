const { Console } = require("console");

//the arrays that will store all elements
var categories = [];
var catalog = [];
var cart = [];

//Populate the arrays with elements
//5.5 and 5.6
let category = new Category(
  1,
  "Bags",
  "Bags with the original Dota 2 Art Print"
);
categories.push(category);
category = new Category(
  2,
  "T-Shirts",
  "T-Shirts with the original Dota 2 Art Print"
);
categories.push(category);
category = new Category(
  3,
  "MousePads",
  "MousePads with the original Dota 2 Art Print"
);
categories.push(category);
category = new Category(
  4,
  "Posters",
  "Posters with the original Dota 2 Art Print"
);
categories.push(category);
category = new Category(
  5,
  "T-Shirts for Women",
  "T-Shirts for Women with the original Dota 2 Art Print"
);
categories.push(category);
category = new Category(6, "Masks", "Masks with the original Dota 2 Art Print");
categories.push(category);
category = new Category(
  7,
  "Backpacks",
  "Backpacks with the original Dota 2 Art Print"
);
categories.push(category);
category = new Category(
  8,
  "Squishies",
  "Squishies based on the Dota 2 characters"
);
categories.push(category);
console.log(categories);
