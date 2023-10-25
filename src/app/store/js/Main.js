import { Opinion } from "./Opinion";
import Product from "./Product";

var productList = [];
var selectedProductID = 0;

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

function selectProduct(id) {
  selectedProductID = id;
}

function createProducts() {
  var data = [
    "Introduction to Programming",
    "This course provides the fundamentals of programming, including basic concepts of algorithms and data structures.",
    "Front-end Web Development",
    "Focuses on creating the user interface of websites using technologies like HTML, CSS, and JavaScript.",
    "Back-end Web Development",
    "Centered on creating server logic and managing databases for web applications.",
    "User Interface Design",
    "Teaches how to create attractive and functional interfaces for applications and websites.",
    "Databases and SQL",
    "Covers database management and the SQL language for storing and retrieving data.",
    "Python Programming",
    "Introduces the Python programming language and its applications in software development, data analysis, and more.",
  ];

  var idProduct = 0;
  for (let i = 0; i < 10; i += 2) {
    var o = new Product(
      idProduct,
      data[i],
      data[i + 1],
      getRandomNumber(30, 300),
      isOnSale()
    );
    o.add_Review(user, getRandomNumber(0, 10), "Vegetta");
    idProduct++;
    add_Product(o);
  }
}

function getRandomNumber(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

function isOnSale() {
  const randomNum = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  if (randomNum === 1) {
    return false;
  }
  return true;
}
