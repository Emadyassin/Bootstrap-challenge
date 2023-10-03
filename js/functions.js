let searchFunction = () => {
  console.log("a");
  var filter = "title";
  var searchValue = document.getElementById("search-box").value;
  var filteredData = products.filter(function (obj) {
    return obj[filter].toUpperCase().includes(searchValue.toUpperCase());
  });
  document.getElementById("products").innerHTML =
    refreshMainComponent(filteredData);
};

let calcPrice = () => {
  total = 0;
  products.forEach((element) => {
    total += element.price;
  });
  return total;
};

var base64Image = "";
function encodeImageFileAsURL(inputId) {
  return new Promise(function (resolve, reject) {
    const imageInput = document.getElementById(inputId);
    const selectedFile = imageInput.files[0];
    if (selectedFile) {
      setTimeout(function () {
        const reader = new FileReader();
        reader.onload = function (e) {
          base64Image = e.target.result;
          resolve();
        };
        reader.readAsDataURL(selectedFile);
      }, 2000);
    }
  });
}

let addProducts = () => {
  document.getElementById("btnAddProduct").disabled = false;
  document.getElementById("spinner").classList.add("spinner-border");
  encodeImageFileAsURL("Product-img").then((callback) => {
    // console.log(base64Image);

    products.push({
      title: document.getElementById("Product-name").value,
      description: document.getElementById("Product-description").value,
      price: Number(document.getElementById("Product-price").value),
      image: base64Image,
    });

    document.getElementById("Product-name").value = null;
    document.getElementById("Product-description").value = null;
    document.getElementById("Product-price").value = null;
    document.getElementById("Product-img").value = null;

    setStorage("shopProducts", products);
    document.getElementById("table-data").innerHTML =
      refreshDashboardTableComponent(getStorage("shopProducts"));
    cards = [
      {
        title: "Products No",
        value: products.length,
      },
      {
        title: "Products Price",
        value: "$ " + calcPrice(),
      },
    ];
    document.getElementById("card-data").innerHTML =
      refreshDashboardCardComponent(cards);
    document.getElementById("spinner").classList.remove("spinner-border");
    document.getElementById("btnAddProduct").removeAttribute("disabled");

    var myModal = document.getElementById("addProductModal");
    var modal = new bootstrap.Modal(myModal);
    modal.hide();
  });
};

let deleteProduct = (productsArray, index) => {
  productsArray.splice(index, index + 1);
  setStorage("shopProducts", products);
  document.getElementById("table-data").innerHTML =
    refreshDashboardTableComponent(getStorage("shopProducts"));
  cards = [
    {
      title: "Products No",
      value: products.length,
    },
    {
      title: "Products Price",
      value: "$ " + calcPrice(),
    },
  ];
  document.getElementById("card-data").innerHTML =
    refreshDashboardCardComponent(cards);
};

let updateProducts = (productsArray, index) => {
  encodeImageFileAsURL("update-Product-img").then((callback) => {
    productsArray[index].title = document.getElementById(
      "update-Product-name"
    ).value;
    productsArray[index].description = document.getElementById(
      "update-Product-description"
    ).value;
    productsArray[index].price = document.getElementById(
      "update-Product-price"
    ).value;
    if (document.getElementById("update-Product-img").value)
      if (base64Image) productsArray[index].image = base64Image;

    setStorage("shopProducts", products);
    document.getElementById("table-data").innerHTML =
      refreshDashboardTableComponent(getStorage("shopProducts"));
    cards = [
      {
        title: "Products No",
        value: products.length,
      },
      {
        title: "Products Price",
        value: "$ " + calcPrice(),
      },
    ];
    document.getElementById("card-data").innerHTML =
      refreshDashboardCardComponent(cards);
  });
};

let addFormToModelEditProducts = (productsArray, index) => {
  var items = `
        <form id="form" class="row">
          <div class="mb-3 col-12  d-flex justify-content-end">
            <img src="${productsArray[index].image}" class="bg-dark-subtle cart-image w-100 rounded-3 rounded-bottom-0">
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-name" class="form-label">Product name</label>
                  <div class="input-group">
                  <input type="text" value="${productsArray[index].title}" class="form-control" id="update-Product-name" aria-describedby="basic-addon3 basic-addon4">
              </div>
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-description" class="form-label">Product description</label>
                  <div class="input-group">
                  <input type="text" value="${productsArray[index].description}" class="form-control" id="update-Product-description" aria-describedby="basic-addon3 basic-addon4">
              </div>
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-price" class="form-label">Product price</label>
              <div class="input-group">
                  <input type="number" value="${productsArray[index].price}" class="form-control" id="update-Product-price" aria-describedby="basic-addon3 basic-addon4">
              </div>
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-img" class="form-label">Image URL</label>
              <div class="input-group">
                  <input type="file" value="${productsArray[index].image}" class="form-control" id="update-Product-img" aria-describedby="basic-addon3 basic-addon4">
              </div>
          </div>
        </form>
      `;
  if (items) {
    document.getElementById("model-edit-products").innerHTML = items;
  }
};

let addButtonsToAlertDeleteProducts = (productsArray, index) => {
  var items = `   
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">
              No
          </button> 
          <button type="button" onclick="deleteProduct(products ,${index})" data-bs-dismiss="modal" class="btn bg-danger text-white">
              Yse
          </button>
      `;
  if (items) {
    document.getElementById("modal-confirm-delete-buttons").innerHTML = items;
  }
};
let addButtonsToEditProducts = (productsArray, index) => {
  var items = `   
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">
              Close
          </button>
          <button id="btnAddProduct" type="button" onclick="updateProducts(products ,${index})" class="btn btn-primary" data-bs-dismiss="modal">
              <span id="spinner" class="spinner-border-sm" aria-hidden="true"></span>
              <span role="status">Save Change</span>
          </button>
      `;
  if (items) {
    document.getElementById("modal-confirm-edit-buttons").innerHTML = items;
  }
};

if (page === "index.html") {
  const searchBoxValue = el(".search-box");
  searchBoxValue.addEventListener("input", searchFunction);
}
