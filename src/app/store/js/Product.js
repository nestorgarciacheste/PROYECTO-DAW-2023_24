/*const { Product } = require("./Opinion.js");

class Product {
  #id;
  #title;
  #description;
  #price;
  #averageRating;
  #reviews;
  #onSale;
  #numSales;
  #image;

  constructor(
    id = 0,
    title = "",
    description = "",
    price = 0.0,
    onSale = false,
    image = ""
  ) {
    if (
      typeof title !== "string" ||
      title.length < 2 ||
      typeof description !== "string" ||
      description.length < 2 ||
      typeof price !== "number" ||
      typeof id !== "number" ||
      image.length === 0
    ) {
      throw new Error("Provided values are not valid");
    }

    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#price = price;
    this.#averageRating = 0;
    this.#reviews = [];
    this.#onSale = onSale;
    this.#numSales = 0;
    this.#image = image;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get price() {
    return this.#price;
  }

  get averageRating() {
    return this.#averageRating;
  }

  get reviews() {
    return this.#reviews;
  }

  get onSale() {
    return this.#onSale;
  }

  get numSales() {
    return this.#numSales;
  }

  set title(title) {
    if (typeof title !== "string" || title.length < 2) {
      throw new Error("Title must be a string with at least 2 characters");
    }
    this.#title = title;
  }

  set description(description) {
    if (typeof description !== "string" || description.length < 2) {
      throw new Error(
        "Description must be a string with at least 2 characters"
      );
    }
    this.#description = description;
  }

  set price(price) {
    if (typeof price !== "number") {
      throw new Error("Price must be a number");
    }
    this.#price = price;
  }

  set onSale(onSale) {
    this.#onSale = onSale;
  }

  addReview(user, punctuation, opinion) {
    const existingReview = this.#reviews.find(
      (existingReview) => existingReview.opinion === opinion
    );
    if (!existingReview) {
      let opn = new Opinion(user, punctuation, opinion);
      this.#reviews.push(opn);
    }
  }

  get image() {
    return this.#image;
  }

  set image(image) {
    if (typeof image !== "string" || image.length === 0) {
      throw new Error("Image must be a non-empty string (image path).");
    }
    this.#image = image;
  }
}

module.expo;
*/
