import { Opinion } from "./Opinion";

class Product {
  #id;
  #title;
  #description;
  #price;
  #averageRating;
  #reviews;
  #onSale;
  #numSales;

  constructor(
    id = 0,
    title = "",
    description = "",
    price = 0.0,
    onSale = false
  ) {
    if (
      typeof title !== "string" ||
      !/^.{2,}$/.test(title) ||
      typeof description !== "string" ||
      !/^.{2,}$/.test(description) ||
      typeof price !== "number" ||
      typeof id !== "number"
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

  add_Review(user, punctuation, opinion) {
    const existingReview = reviews.find(
      (existingReview) => existingReview.opinion === opinion
    );
    if (!existingReview) {
      let opn = new Opinion(user, punctuation, opinion);
      this.#reviews.push(opn);
      reviews.push(opn);
    }
  }
}

export default Product;
