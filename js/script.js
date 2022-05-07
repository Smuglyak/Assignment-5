// const { Console } = require("console");

class Category {
  constructor(catId, catName, desc) {
    this.catId = catId;
    this.catName = catName;
    this.desc = desc;
  }
}

class Item {
  constructor(
    itemId,
    itemTitle,
    desc,
    brand,
    unitPrice,
    stockQuantity,
    make,
    img,
    category
  ) {
    this.itemId = itemId;
    this.itemTitle = itemTitle;
    this.desc = desc;
    this.brand = brand;
    this.unitPrice = unitPrice;
    this.stockQuantity = stockQuantity;
    this.make = make;
    this.img = img;
    this.category = category;
  }
}

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
    "Wallets",
    "Wallets with the original Dota 2 Art Print"
  );
  categories.push(category);
  category = new Category(
    8,
    "Squishies",
    "Squishies based on the Dota 2 characters"
  );
  categories.push(category);
  // console.log(categories);
}

/**
 * Returns the category which matches the specified id.
 * @param {*} categoryId Id used to find category.
 */
function getCategory(categoryId) {
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].catId == categoryId) {
      return categories[i];
    }
  }
  return null;
}

/**
 *20 items belonging to 8 different categories
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
    "/images/blindBag.png",
    getCategory(8)
  );
  catalog.push(item);
  item = new Item(
    2,
    "Figma Lina Batch 2",
    'The hero with fiery abilities is joining the figma series! From the popular game "Dota 2" comes a figma of Lina the Slayer!',
    "Dota 2 original merchandise",
    76,
    10,
    "Valve",
    "/images/figmaLuna.jpg",
    getCategory(1)
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
    "/images/nendoroid.jpg",
    getCategory(1)
  );
  catalog.push(item);
  item = new Item(
    4,
    "Dota 2 Doodle t-shirt",
    '100% cotton basic slim fit men"s crew t shirt',
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/doodle.jpg",
    getCategory(2)
  );
  catalog.push(item);
  item = new Item(
    5,
    "Meat Is Sweet",
    "100% cotton basic slim fit men's crew t shirt with pudge art",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/meatIsSweet.png",
    getCategory(1)
  );
  catalog.push(item);
  item = new Item(
    6,
    "Dire Creeps",
    "100% cotton basic slim fit men's crew t shirt with dire creeps art",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/direCreeps.png",
    getCategory(2)
  );
  catalog.push(item);
  item = new Item(
    7,
    "I Bring My Blade",
    "100% cotton basic slim fit men's crew t shirt with juggernaut art",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/iBringMyBlade.png",
    getCategory(2)
  );
  catalog.push(item);
  item = new Item(
    8,
    "Phantom Assassin Inked",
    "The International 2017 Dota 2 Phantom Assassin Inked t shirt",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/phantom.png",
    getCategory(2)
  );
  catalog.push(item);
  item = new Item(
    9,
    "Flying Courier Service",
    "100% Cotton basic slim fit men's crew t shirt with Flying Courier Service art",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/Flying.jpg",
    getCategory(2)
  );
  catalog.push(item);
  item = new Item(
    10,
    "Dazzle Grin Mask",
    "Double-layer face mask with elastic ear loops",
    "Dota 2 original merchandise",
    12,
    100,
    "Valve",
    "/images/dazzle.png",
    getCategory(6)
  );
  catalog.push(item);
  item = new Item(
    11,
    "Techies Vs Jakiro Canvas Wallet",
    "Canvas Wallets feature full-coverage artwork with rich pigment color and are made from 100% polyester.",
    "Dota 2 original merchandise",
    18,
    100,
    "Valve",
    "/images/techies.jpg",
    getCategory(7)
  );
  catalog.push(item);
  item = new Item(
    12,
    "Doppleganger Lancer Canvas Wallet",
    "Canvas Wallets feature full-coverage artwork with rich pigment color and are made from 100% polyester.",
    "Dota 2 original merchandise",
    18,
    100,
    "Valve",
    "/images/doppel.png",
    getCategory(7)
  );
  catalog.push(item);
  item = new Item(
    13,
    "Charge Into Darkness Canvas Wallet",
    "ACanvas Wallets feature full-coverage artwork with rich pigment color and are made from 100% polyester.",
    "Dota 2 original merchandise",
    18,
    100,
    "Valve",
    "/images/charge.png",
    getCategory(7)
  );
  catalog.push(item);
  item = new Item(
    14,
    "Lane Battle Art Print",
    "Fine Art Print",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/lane.png",
    getCategory(4)
  );
  catalog.push(item);
  item = new Item(
    15,
    "Templar Assassin Portrait Mousepad",
    "Our Marrow Edge mousepads will not fray over time.",
    "Dota 2 original merchandise",
    20,
    1000,
    "Valve",
    "/images/TAImg.png",
    getCategory(3)
  );
  catalog.push(item);
  item = new Item(
    16,
    "Fury of the Blade Art Print",
    "Fine Art Print",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/FuryJugg.jpg",
    getCategory(4)
  );
  catalog.push(item);
  item = new Item(
    17,
    "Sting From the Shadows Mousepad",
    "Our Marrow Edge mousepads will not fray over time.",
    "Dota 2 original merchandise",
    22,
    100,
    "Valve",
    "/images/StingMousepad.png",
    getCategory(3)
  );
  catalog.push(item);
  item = new Item(
    18,
    "The Sorcerer Stings Mousepad",
    "Our Marrow Edge mousepads will not fray over time. ",
    "Dota 2 original merchandise",
    20,
    100,
    "Valve",
    "/images/RubickMousePad.png",
    getCategory(3)
  );
  catalog.push(item);
  item = new Item(
    19,
    "Ranger Smoke Art Print",
    "Fine Art Print",
    "Dota 2 original merchandise",
    25,
    100,
    "Valve",
    "/images/DrowPrint.png",
    getCategory(4)
  );
  catalog.push(item);
  item = new Item(
    20,
    "We Speak For the Trees",
    "Fine Art Print",
    "Dota 2 original merchandise",
    25,
    120,
    "Valve",
    "/images/TreesPrint.png",
    getCategory(4)
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
function showStatusMessage(cssClass, messageToDisplay) {
  let alertBox = document.getElementById("alertBox");
  alertBox.style.display = "block";
  alertBox.setAttribute("class", cssClass);
  alertBox.innerHTML = "<p>" + messageToDisplay + "</p>";
  setTimeout(hideStatusMessage, 5000);
}

/**
 * Hides the status alert.
 */
function hideStatusMessage() {
  // let alertBox = document.getElementById("alertBox");
  // alertBox.style.display = "none";
}

/**
 * Clears the div element which contains shoe information.
 */
function clearMainContainer() {
  document.getElementById("divMainContainer").innerHTML = "";
}

/**
 * Displays all shoes in the catalog using bootstrap cards.
 */
function showListOfItems() {
  clearMainContainer();
  let mainContainer = document.getElementById("divMainContainer");
  //init all the containers
  let content = `<div class="container">`;
  content += `<div class="row rowShift">`;
  //logic for separating the rows by 4 items,
  //first we check if the current item is the fourth one by count, if not we add the content of the card,
  //else if it is, we add the ending part of element, and we create another row.
  for (let i = 0; i < catalog.length; i++) {
    const item = catalog[i];
    const addRow = i % 4 == 0;
    if (addRow && i > 0) {
      content += `</div> <div class="row rowShift">`;
    }
    content += `
        <div class="card text-white text-center bg-dark mt-5" style="width: 20.5rem; margin-right: 0%">
            <div class="card-header">${item.category.catName}</div>
            <div class="card-body"> 
                <img src="${item.img}" class="card-img-top" alt="..." style="width: 15rem; height: 250px; border-radius: 10pt">
                <h5 class="card-title"><br>${item.itemTitle}</h5>
                <p class="card-text">${item.desc}</p>
                <p class="card-text">$${item.unitPrice}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${item.itemId})">Add To Cart <i class="fa fa-cart-plus"></i></button>
                <button type="button" class="btn btn-secondary" onclick="showItemDetails(${item.itemId})")>Details <i class="fa fa-info"></i></button>
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
