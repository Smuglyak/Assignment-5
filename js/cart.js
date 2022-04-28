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
    this.category = category;
  }
}
