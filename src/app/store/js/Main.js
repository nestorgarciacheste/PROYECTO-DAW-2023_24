import { Product } from "./Product.js";

document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");
  fetch("../../header_footer/html/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });
  fetch("../../header_footer/html/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footerContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error al cargar el footer:", error);
    });
});

const productList = [];
let selectedProductID = 0;

function addProduct(product) {
  const existingProduct = productList.find(
    (existingProduct) => existingProduct.id === product.id
  );
  if (!existingProduct) {
    productList.push(product);
  }
}

function listProducts() {
  productList.forEach((product) => {
    console.log(
      `${product.id}, ${product.title}, ${product.description}, ${product.price}€`
    );
  });
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
  const data = [
    "Introduction to Programming",
    "This course provides the fundamentals of programming, including basic concepts of algorithms and data structures.",
    "Not bad kid...",
    "Front-end Web Development",
    "Focuses on creating the user interface of websites using technologies like HTML, CSS, and JavaScript.",
    "Pretty awesome.",
    "Back-end Web Development",
    "Centered on creating server logic and managing databases for web applications.",
    "As I expected...",
    "User Interface Design",
    "Teaches how to create attractive and functional interfaces for applications and websites.",
    "To understand something, one must study all its aspects.",
    "Databases and SQL",
    "Covers database management and the SQL language for storing and retrieving data.",
    "With great power comes great responsibility.",
    "Python Programming",
    "Introduces the Python programming language and its applications in software development, data analysis, and more.",
    "With great power comes great capabilities.",
  ];

  let idProduct = 0;
  for (let i = 0; i < data.length; i += 2) {
    const product = new Product(
      idProduct,
      data[i],
      data[i + 1],
      getRandomNumber(30, 300),
      isOnSale()
    );
    product.addReview(user, getRandomNumber(0, 10), data[i + 2]);
    idProduct++;
    addProduct(product);
  }
}

function getRandomNumber(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isOnSale() {
  return Math.random() < 0.5;
}
