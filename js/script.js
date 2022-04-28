const { Console } = require("console");

//the arrays that will store all elements
var categories = [];
var catalog = [];
var cart = [];

var imageFolder = "images/";

function initializeCategories() {
  //Populate the arrays with elements
  //5.5 and 5.6
  let category = new Category(
    1,
    "Figurines",
    "Figurines with the original Dota 2 Art Print"
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
  category = new Category(
    6,
    "Masks",
    "Masks with the original Dota 2 Art Print"
  );
  categories.push(category);
  category = new Category(
    7,
    "Backpacks",
    "Backpacks with the original Dota 2 Art Print"
  );
  categories.push(category);
  category = new Category(
    8,
    Squishies,
    "Squishies based on the Dota 2 characters"
  );
  categories.push(category);
  // console.log(categories);
}

/**
 * Returns the category which matches the specified id.
 * @param {*} categoryId Id used to find category.
 */
function getCategory(categoryId) {}

/**
 * Creates 3 Shoe objects for each category class (24 Shoe objects in total).
 */
function initializeItems() {
  let item = new Item(
    1,
    "DOTA 2 Blind Bag Collectible Squishies",
    'A dota 2 hero squishie that is 3"tall',
    "Dota 2 original merchandise",
    15,
    20,
    "Valve",
    null,
    Squishies
  );
  catalog.push(item);
  item = new Item(
    2,
    "figma Lina Batch 2",
    'The hero with fiery abilities is joining the figma series! From the popular game "Dota 2" comes a figma of Lina the Slayer!',
    "Dota 2 original merchandise",
    76,
    10,
    "Valve",
    null,
    Figurines
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null,
    Figurines
  );
  catalog.push(item);
  item = new Item(
    4,
    "Dota 2 Doodle t-shirt",
    '100% cotton basic slim fit men"s crew t shirt',
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null,
    T - Shirts
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
  item = new Item(
    3,
    "Nendoroid Dragon Knight",
    "A dragon knight figurine!",
    "Dota 2 original merchandise",
    45,
    100,
    "Valve",
    null
  );
  catalog.push(item);
}

/**
 * Sets up the webpage for the user.
 */
function setUpCart() {
  initializeCategories();
  initializeItems();
  showListOfItems();
  hideStatusMessage();
}

/**
 * Displays an alert based on user interaction.
 * @param {*} cssClass Class used to change styling of alert.
 * @param {*} messageToDisplay Message to display in the alert.
 */
var timeoutForMsg;
function showStatusMessage(cssClass, messageToDisplay) {}

/**
 * Hides the status alert.
 */
function hideStatusMessage() {}

/**
 * Clears the div element which contains shoe information.
 */
function clearMainContainer() {}

/**
 * Displays all shoes in the catalog using bootstrap cards.
 */
function showListOfItems() {
  clearMainContainer();
  let mainContainer = document.getElementById("divMainContainer");
  let content = `<div class="container">`;
  content += `<div class="row rowShift">`;
  for (let i = 0; i < catalog.length; i++) {
    const item = catalog[i];
    const addRow = i % 3 == 0;
    if (addRow && i > 0) {
      content += `</div> <div class="row rowShift">`;
    }
    content += `
        <div class="card text-white text-center bg-dark mb-3" style="width: 21rem; margin-right: 2%">
            <div class="card-header">${item.category.name}</div>
            <div class="card-body">
                <img src="${item.image}" class="card-img-top" alt="..." style="width: 17rem; height: 250px; border-radius: 10pt">
                <h5 class="card-title"><br>${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">$${item.price}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${item.id})">Add To Cart <i class="fa fa-cart-plus"></i></button>
                <button type="button" class="btn btn-secondary" onclick="showItemDetails(${item.id})")>Details <i class="fa fa-info"></i></button>
            </div>
        </div>
        `;
  }
  content += "</div> </div>";
  mainContainer.innerHTML += content;
}

/**
 * Displays all shoes found in the user's cart in a bootstrap table.
 */
function viewCart() {
  clearMainContainer();

  let mainContainer = document.getElementById("divMainContainer");
  let shoeTable =
    '<table class="table table-striped tableAlignText"><thead><tr class="trTitle"><th colspan=9>Cart Details</th></tr> <tr><th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Display</th><th></th><th></th></tr></thead><tbody>';

  cart.forEach((shoe) => {
    shoeTable += `<tr> <td>${shoe.id}</td> <td>${shoe.title}</td> <td>${shoe.description}</td> <td>$${shoe.price}</td> <td><img src="${shoe.image}" width="75" height="75" class="img-thumbnail"/></td> <td><button type="button" class="btn btn-danger" onclick="removeFromCart(${shoe.id})">Remove Item <i class="fa fa-minus"></i></button></td> <td><button type="button" class="btn btn-primary" onclick="showItemDetails(${shoe.id})">Details <i class="fa fa-info"></i></button></td></tr>`;
  });

  shoeTable += "</tbody></table>";

  mainContainer.innerHTML = shoeTable;
}

/**
 * Finds an item in catalog based on id.
 * @param {*} itemId Id used to search for item.
 */
function findItemById(itemId) {}

/**
 * Displays the details of an item.
 * @param {*} itemId Id used to find item to be detailed.
 */
function showItemDetails(itemId) {}

/**
 * Adds an item from the catalog to the user's cart.
 * @param {*} itemId Id to find item in catalog.
 */
function addToCart(itemId) {}

/**
 * Removes an item from the user's cart.
 * @param {*} itemId Id to find item in cart.
 */
function removeFromCart(itemId) {}

/**
 * Displays a specified array as a boostrap table.
 * @param {*} array Array to display as a table.
 */
function viewArrayAsTable(array) {}

/**
 * Seaches for an item based on what the user typed.
 */
function searchByKeyword() {
  let searchBar = document.getElementById("carSearchBar");
  const keyword = searchBar.value;
  if (keyword) {
    let completedSearch =
      findShoeWithProperty(keyword, "category") ||
      findShoeWithProperty(keyword, "description") ||
      findShoeWithProperty(keyword, "title");
    if (!completedSearch) {
      showStatusMessage(
        "alert alert-info",
        `There are no items with a category, name or description matching \"${keyword}\".`
      );
      showListOfItems();
    }
  } else {
    viewArrayAsTable(catalog);
  }
  searchBar.value = "";
}

class Category {
  constructor(catId, catName, desc) {
    this.catId = catId;
    this.catName = catName;
    this.desc = desc;
  }
}

class Item {
  constructor(
    itemID,
    itemtitle,
    desc,
    brand,
    unitPrice,
    stockQuantity,
    make,
    img,
    category
  ) {
    this.itemID = itemID;
    this.itemtitle = itemtitle;
    this.desc = desc;
    this.brand = brand;
    this.unitPrice = unitPrice;
    this.stockQuantity = stockQuantity;
    this.make = make;
    this.img = img;
    this.Category = category;
  }
}

setUpCart();
