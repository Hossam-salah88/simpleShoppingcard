let productName = document.querySelector("#productName");
let productCatogre = document.querySelector("#productCatogre");
let productPrice = document.querySelector("#ProductPrice");
let productQuantite = document.querySelector("#ProductQuantite");
let productDes = document.querySelector("#ProductDes");
let productCart = document.querySelector("#productCart");
let addProductBtn = document.querySelector("#addProductBtn");

let products = [];

addProductBtn.addEventListener("click", function (e) {
  e.preventDefault();
  products.push({
    id: products.length + 1,
    productdata: productName.value,
    catogre: productCatogre.value,
    price: productPrice.value,
    quantite: productQuantite.value,
  });
  console.log(products);
});
