let productName = document.querySelector("#productName");
let productCatogre = document.querySelector("#productCatogre");
let productPrice = document.querySelector("#productPrice");
let productQuantite = document.querySelector("#productQuantite");
let productDes = document.querySelector("#productDes");
let productTable = document.querySelector("#productadd__table");
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
    description: productDes.value,
  });
  console.log(products);
  productUI();
});

function productUI() {
  let productUI = products.map((product) => {
    return `
    <tr class="productadd__title">
    <td>${product.id}</td>
    <td>${product.productdata}</td>
    <td>${product.catogre}</td>
    <td id="quantiteDom">${product.quantite}</td>
    <td>${product.price}</td>
    <td>${product.price * product.quantite}</td>
    <td><button onclick="increment(${product.id})">-</button></td>
    <td><button onclick="decrement(${product.id})">+</button></td>
    <td><button onclick="updataproduct(${product.id})">Updata</button></td>
    <td><button onclick="deletproduct(${product.id})">Delete</button></td>
  </tr>
    `;
  });

  productTable.innerHTML = productUI;
  productName.value = "";
  productCatogre.value = "";
  productPrice.value = "";
  productQuantite.value = "";
  productDes.value = "";
}

function deletproduct(id) {
  let confirm = window.confirm("Are you sSure to delete this record or Not ?");
  let choosenItem = products.find((product) => product.id === id);

  let index = products.indexOf(choosenItem);

  if (index != -1 && confirm == true) {
    products.splice(index, 1);
    productUI(products);
  }
}

function updataproduct(id) {
  let choosenItem = products.find((product) => product.id === id);
  console.log(choosenItem);

  let index = products.indexOf(choosenItem);
  console.log(index);

  productName.value = products[index].productdata;
  productCatogre.value = products[index].catogre;
  productPrice.value = products[index].price;
  productQuantite.value = products[index].quantite;
  productDes.value = products[index].description;

  addProductBtn.textContent = "UPdate";
}

function increment(id) {
  let choosenItem = products.find((product) => product.id === id);

  let index = products.indexOf(choosenItem);

  let oldPrice = products[index].quantite;

  if (oldPrice != 0) {
    let newPrice = --oldPrice;

    products[index].quantite = newPrice;

    quantiteDom.innerHTML = newPrice;
  }
}

function decrement(id) {
  let choosenItem = products.find((product) => product.id === id);

  let index = products.indexOf(choosenItem);

  let oldPrice = products[index].quantite;

  if (oldPrice != 0) {
    let newPrice = ++oldPrice;

    products[index].quantite = newPrice;

    quantiteDom.innerHTML = newPrice;
  }
}
