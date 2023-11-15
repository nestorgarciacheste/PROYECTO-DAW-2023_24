/*const { Product } = require("./Product.js");*/

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
/*
const productList = [];
let selectedProduct = null;

function addProduct(product) {
  const existingProduct = productList.find(
    (existingProduct) => existingProduct.id === product.id
  );
  if (!existingProduct) {
    productList.push(product);
  }
}

function listProduct() {
  const imageElement = document.getElementById("Image");
  const titleElement = document.getElementById("Title");
  const descriptionElement = document.getElementById("Description");
  const priceElement = document.getElementById("Price");

  if (selectedProduct) {
    console.log(selectProduct.id);
    imageElement.style.backgroundImage = `url('${selectedProduct.image}')`;
    titleElement.innerText = selectedProduct.title;
    descriptionElement.innerText = selectedProduct.description;
    priceElement.innerText = `Price: ${selectedProduct.price}`;
  } else {
    console.error("Not selected product");
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
  selectedProduct = productList.find((product) => product.id === id);
  listProduct();
}

function createProducts() {
  const data = [
    {
      title: "Introduction to Programming",
      description:
        "This course provides the fundamentals of programming, including basic concepts of algorithms and data structures.",
      opinion: "Not bad kid...",
      imageUrl: "../IMG/product1.jpg",
    },
    {
      title: "Front-end Web Development",
      description:
        "Focuses on creating the user interface of websites using technologies like HTML, CSS, and JavaScript.",
      opinion: "Pretty awesome.",
      imageUrl: "../IMG/product2.jpg",
    },
    {
      title: "Back-end Web Development",
      description:
        "Centered on creating server logic and managing databases for web applications.",
      opinion: "As I expected...",
      imageUrl: "../IMG/product3.jpg",
    },
    {
      title: "User Interface Design",
      description:
        "Teaches how to create attractive and functional interfaces for applications and websites.",
      opinion: "To understand something, one must study all its aspects.",
      imageUrl: "../IMG/product4.jpg",
    },
    {
      title: "Databases and SQL",
      description:
        "Covers database management and the SQL language for storing and retrieving data.",
      opinion: "With great power comes great responsibility.",
      imageUrl: "../IMG/product5.jpg",
    },
    {
      title: "Python Programming",
      description:
        "Introduces the Python programming language and its applications in software development, data analysis, and more.",
      opinion: "With great power comes great capabilities.",
      imageUrl: "../IMG/product6.jpg",
    },
  ];

  let idProduct = 1;
  for (const productData of data) {
    const product = new Product(
      idProduct,
      productData.title,
      productData.description,
      getRandomNumber(30, 300),
      isOnSale(),
      productData.imageUrl
    );
    product.addReview("user", getRandomNumber(0, 10), productData.opinion);
    addProduct(product);
    idProduct++;
  }
  console.log("hlola");
  selectProduct(1);
  listProduct();
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

function hola() {
  console.log("hola");
}
*/
