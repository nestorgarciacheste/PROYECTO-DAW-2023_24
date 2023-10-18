import producto from "./Product";
import { Opinion } from "./Opinion";

var productList = [];

function add_Product(product) {
  const existingProduct = productList.find(
    (existingProduct) => existingProduct.id === product.id
  );
  if (!existingProduct) {
    productList.push(product);
  }
}

function list_Products() {
  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    console.log(
      `${product.id}, ${product.title}, ${product.description}, ${product.price}€`
    );
  }
}

function deleteProduct(product) {
  const existingProductIndex = productList.findIndex(
    (existingProduct) => existingProduct.id === product.id
  );
  if (existingProductIndex !== -1) {
    productList.splice(existingProductIndex, 1);
  }
}
