let searchFunction = () => {
  var filter = "title";
  var searchValue = el("#search-box").value;
  var filteredData = products.filter(function (obj) {
    return obj[filter].toUpperCase().includes(searchValue.toUpperCase());
  });
  el("#products").innerHTML = ProductCardComponent(filteredData);
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
    const imageInput = el(inputId);
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
    } else {
      resolve();
    }
  });
}

let addProducts = () => {
  if (
    el("#Product-name").value !== "" &&
    el("#Product-description").value !== "" &&
    el("#Product-price").value !== "" &&
    el("#Product-img").value !== ""
  ) {
    el("#btnAddProduct").disabled = false;
    el("#addSpinner").classList.add("spinner-border");
    encodeImageFileAsURL("#Product-img").then((callback) => {
      products.push({
        title: el("#Product-name").value,
        description: el("#Product-description").value,
        price: Number(el("#Product-price").value),
        image: base64Image,
      });

      el("#Product-name").value = null;
      el("#Product-description").value = null;
      el("#Product-price").value = null;
      el("#Product-img").value = null;

      setStorage("shopProducts", products);
      el("#table-data").innerHTML = tableRowsComponent(
        getStorage("shopProducts")
      );
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
      el("#card-data").innerHTML = statisticsCardComponent(cards);
      el("#addSpinner").classList.remove("spinner-border");
      el("#btnAddProduct").removeAttribute("disabled");
      const addProductModal =
        bootstrap.Modal.getOrCreateInstance("#addProductModal");
      addProductModal.toggle();
    });
  }
};

let updateProducts = (productsArray, index) => {
  if (
    el("#Product-name").value !== "" &&
    el("#Product-description").value !== "" &&
    el("#Product-price").value !== ""
  ) {
    el("#btnUpdateProduct").disabled = false;
    el("#updateSpinner").classList.add("spinner-border");

    encodeImageFileAsURL("#update-Product-img").finally(() => {
      productsArray[index].title = el("#update-Product-name").value;
      productsArray[index].description = el(
        "#update-Product-description"
      ).value;
      productsArray[index].price = el("#update-Product-price").value;
      if (el("#update-Product-img").value)
        if (base64Image) productsArray[index].image = base64Image;

      setStorage("shopProducts", products);
      el("#table-data").innerHTML = tableRowsComponent(
        getStorage("shopProducts")
      );
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
      el("#card-data").innerHTML = statisticsCardComponent(cards);
      el("#updateSpinner").classList.remove("spinner-border");
      el("#btnUpdateProduct").removeAttribute("disabled");
      const updateProductModal =
        bootstrap.Modal.getOrCreateInstance("#editProductModal");
      updateProductModal.toggle();
    });
  }
};

let deleteProduct = (productsArray, index) => {
  productsArray.splice(index, index === 0 ? index + 1 : index);
  setStorage("shopProducts", products);
  el("#table-data").innerHTML = tableRowsComponent(getStorage("shopProducts"));
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
  el("#card-data").innerHTML = statisticsCardComponent(cards);
};

let addFormToModelEditProducts = (productsArray, index) => {
  var items = `
        <div id="form" class="row">
          <div class="mb-3 col-12  d-flex justify-content-end">
            <img src="${productsArray[index].image}" class="bg-dark-subtle cart-image w-100 rounded-3 rounded-bottom-0">
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-name" class="form-label">Product name</label>
                  <div class="input-group">
                  <input type="text" value="${productsArray[index].title}" class="form-control" id="update-Product-name" aria-describedby="basic-addon3 basic-addon4" required >
              </div>
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-description" class="form-label">Product description</label>
                  <div class="input-group">
                  <input type="text" value="${productsArray[index].description}" class="form-control" id="update-Product-description" aria-describedby="basic-addon3 basic-addon4" required>
              </div>
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-price" class="form-label">Product price</label>
              <div class="input-group">
                  <input type="number" value="${productsArray[index].price}" class="form-control" id="update-Product-price" aria-describedby="basic-addon3 basic-addon4" required>
              </div>
          </div>
          <div class="mb-3 col-12 col-md-6">
              <label for="Product-img" class="form-label">Image URL</label>
              <div class="input-group">
                  <input type="file" class="form-control" id="update-Product-img" aria-describedby="basic-addon3 basic-addon4" accept="image/*">
              </div>
          </div>
        </div>
      `;
  if (items) {
    el("#model-edit-products").innerHTML = items;
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
    el("#modal-confirm-delete-buttons").innerHTML = items;
  }
};
let addButtonsToEditProducts = (productsArray, index) => {
  var items = `   
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">
              Close
          </button>
          <button id="btnUpdateProduct" type="submit" onclick="updateProducts(products ,${index})" class="btn bg-color-black text-white" >
              <span id="updateSpinner" class="spinner-border-sm" aria-hidden="true"></span>
              <span role="status">Save Change</span>
          </button>
      `;
  if (items) {
    el("#modal-confirm-edit-buttons").innerHTML = items;
  }
};

window.addEventListener("load", () => {
  if (page === "index.html") {
    const searchBoxValue = el(".search-box");
    searchBoxValue.addEventListener("input", searchFunction);
  }
  if (page === "dashboard.html") {
    stopFromSubmitRefresh(el("#addForm"));
    stopFromSubmitRefresh(el("#updateForm"));
  }
});
