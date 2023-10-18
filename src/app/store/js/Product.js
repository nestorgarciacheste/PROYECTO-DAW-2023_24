import { Opinion } from "./Opinion";

class Product {
  constructor(
    id = 0,
    title = "",
    description = "",
    price = 0.0,
    onSale = false
  ) {
    if (
      typeof title !== "string" ||
      !/^.{2,20}$/.test(title) ||
      !/^.{2,200}$/.test(description) ||
      typeof description !== "string" ||
      typeof price !== "number" ||
      typeof id !== "number"
    ) {
      throw new Error("Provided values are not valid");
    }

    this.title = title;
    this.description = description;
    this.price = price;
    this.averageRating = 0;
    this.reviews = [];
    this.onSale = onSale;
    this.numSales = 0;
    this.id = id;
  }
}

export default Product;
