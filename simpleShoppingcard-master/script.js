let productName = document.querySelector("#productName");
let productCatogre = document.querySelector("#productCatogre");
let productPrice = document.querySelector("#productPrice");
let productQuantite = document.querySelector("#productQuantite");
let productDes = document.querySelector("#productDes");
let productTable = document.querySelector("#productadd__table");
let addProductBtn = document.querySelector("#addProductBtn");
let mode = "creat";
let productIndex;
let products = [];
let productId;

if (localStorage.product != null) {
  products = JSON.parse(localStorage.product);
} else {
  products = [];
}
// ==================== creat Data =====================

addProductBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let newProduct = {
    id: productId ? productId : products.length + 1,
    productdata: productName.value,
    catogre: productCatogre.value,
    price: productPrice.value,
    quantite: productQuantite.value,
    description: productDes.value,
  };
  console.log(newProduct);
  console.log(products);

  if (mode == "creat") {
    products.push(newProduct);
  } else {
    console.log(newProduct);
    // products[productIndex] = newProduct;
    products.map((pro) => {
      if (pro.id == newProduct.id) {
        (pro.productdata = productName.value),
          (pro.catogre = productCatogre.value),
          (pro.price = productPrice.value),
          (pro.quantite = productQuantite.value),
          (pro.description = productDes.value),
          // products=newProduct
          console.log(pro);
        // console.log(pro);

        return newProduct;
      }
      return pro;
    });

    console.log(products);
    addProductBtn.textContent = "creat";
    mode = "creat";
  }
  localStorage.setItem("product", JSON.stringify(products));
  productUI();
  clearData();
});
productUI();

// ======================== Show Data ===================

function productUI() {
  let str = "";
  for (var i = 0; i < products.length; i++) {
    str += `
    <tr class="productadd__title">
    <td>${products[i].id}</td>
    <td>${products[i].productdata}</td>
    <td>${products[i].catogre}</td>
    <td id="quantiteDom">${products[i].quantite}</td>
    <td>${products[i].price}</td>
    <td>${products[i].price * products[i].quantite}</td>
    <td><button onclick="increment(${products[i].id})">-</button></td>
    <td><button onclick="decrement(${products[i].id})">+</button></td>
    <td><button onclick="updataproduct(${products[i].id})">Updata</button></td>
    <td><button onclick="deletproduct(${products[i].id})">Delete</button></td>
  </tr>
    `;
  }
  console.log("eeeee");
  // products.map((pr) => {
  //   str += `
  //   <tr class="productadd__title">
  //   <td>${pr.id}</td>
  //   <td>${pr.productdata}</td>
  //   <td>${pr.catogre}</td>
  //   <td id="quantiteDom">${pr.quantite}</td>
  //   <td>${pr.price}</td>
  //   <td>${pr.price * pr.quantite}</td>
  //   <td><button onclick="increment(${pr.id})">-</button></td>
  //   <td><button onclick="decrement(${pr.id})">+</button></td>
  //   <td><button onclick="updataproduct(${pr.id})">Updata</button></td>
  //   <td><button onclick="deletproduct(${pr.id})">Delete</button></td>
  // </tr>
  //   `;
  // });

  productTable.innerHTML = str;
}

// ====================== Clear Data =======================

function clearData() {
  productName.value = "";
  productCatogre.value = "";
  productPrice.value = "";
  productQuantite.value = "";
  productDes.value = "";
}

// ========================== Delet Data =========================

function deletproduct(id) {
  let confirm = window.confirm("Are you sSure to delete this record or Not ?");
  let choosenItem = products.find((product) => product.id === id);

  let index = products.indexOf(choosenItem);

  if (index != -1 && confirm == true) {
    products.splice(index, 1);
    localStorage.product = JSON.stringify(products);
    productUI(products);
  }
}

// ====================== Updata data ====================

function updataproduct(id) {
  let choosenItem = products.find((product) => product.id === id);
  let index = products.indexOf(choosenItem);
  console.log(choosenItem);
  productId = id;
  console.log(productId, index, id);
  productName.value = products[index].productdata;
  productCatogre.value = products[index].catogre;
  productPrice.value = products[index].price;
  productQuantite.value = products[index].quantite;
  productDes.value = products[index].description;

  addProductBtn.textContent = "Update";
  mode = "updata";

  scroll({
    top: 0,
  });
  console.log("error");
  // productName.value = products[productId].productdata;
  // productCatogre.value = products[productId].catogre;
  // productPrice.value = products[productId].price;
  // productQuantite.value = products[productId].quantite;
  // productDes.value = products[productId].description;
}
// ============================ Search Product =======================
let searchInput = document.querySelector("#search");

function searchProduct(value) {
  let tableProduct = "";
  for (let id = 0; id < products.length; id++) {
    if (products[id].productdata.includes(value)) {
      tableProduct += `
      <tr class="productadd__title">
      <td>${id}</td>
      <td>${products[id].productdata}</td>
      <td>${products[id].catogre}</td>
      <td id="quantiteDom">${products[id].quantite}</td>
      <td>${products[id].price}</td>
      <td>${products[id].price * products[id].quantite}</td>
      <td><button onclick="increment(${id + 1})">-</button></td>
      <td><button onclick="decrement(${id + 1})">+</button></td>
      <td><button onclick="updataproduct(${id + 1})">Updata</button></td>
      <td><button onclick="deletproduct(${id + 1})">Delete</button></td>
    </tr>
      `;
    }
  }
  productTable.innerHTML = tableProduct;
}

// ======================== payProduct =====================

let paybtn = document.querySelector("#paybtn");

function payProduct() {
  let confirm = window.confirm("Are you Sure you want to pay now");
  if (confirm == true) {
    paybtn.style.display = "block";
    localStorage.clear();
    products.splice(0);
    productUI();
  }
}

// function increment(id) {
//   let choosenItem = products.find((product) => product.id === id);

//   let index = products.indexOf(choosenItem);

//   let oldPrice = products[index].quantite;

//   if (oldPrice != 0) {
//     let newPrice = --oldPrice;

//     products[index].quantite = newPrice;

//     quantiteDom.innerHTML = newPrice;
//   }
// }

// function decrement(id) {
//   let choosenItem = products.find((product) => product.id === id);

//   let index = products.indexOf(choosenItem);

//   let oldPrice = products[index].quantite;

//   if (oldPrice != 0) {
//     let newPrice = ++oldPrice;

//     products[index].quantite = newPrice;

//     quantiteDom.innerHTML = newPrice;
//   }
// }
