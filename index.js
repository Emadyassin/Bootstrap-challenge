var products = [];

if (
  localStorage.localProducts != "null" &&
  localStorage.localProducts != undefined
) {
  products = JSON.parse(localStorage.localProducts);
}

let refresh = (productsArray) => {
  var items = "";
  productsArray.forEach((element) => {
    items += `
        <div class="col-12 col-md-4 col-lg-3 p-3">
                            <div class="card rounded-3 h-100">
                                <p class="Sale bg-color-black text-white m-0 position-absolute ">Sale</p>
                                <img src="${element.image}" class="bg-dark-subtle cart-image w-100 rounded-3 rounded-bottom-0">
                                <div class="card-body d-flex flex-column align-content-center align-items-center justify-content-between gap-3">
                                    <div class="card-info d-flex flex-column text-center">
                                        <h5 class="card-title fw-bold">${element.title}</h5>
                                        <div class="d-flex justify-content-center p-2"><i class="fa-solid fa-star bg-star-y"></i><i
                                                class="fa-solid fa-star bg-star-y"></i><i
                                                class="fa-solid fa-star bg-star-y"></i><i
                                                class="fa-solid fa-star bg-star-y"></i><i
                                                class="fa-solid fa-star bg-star-y"></i></div>
                                        <p class="card-text fw-medium">$${element.price}</p>
                                    </div>
                                    <div class="card-ptn">
                                        <a href="#" class="w-100 w-md-50 btn btn-outline-dark fw-medium">View options</a>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
  });
  if (items != null) {
    document.getElementById("products").innerHTML = items;
  }
};

var base64Image = "";
function encodeImageFileAsURL() {
  return new Promise(function (resolve, reject) {
    const imageInput = document.getElementById("Product-img");
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
  encodeImageFileAsURL().then((callback) => {

    console.log(base64Image);

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

    saveToLocal();
    document.getElementById("spinner").classList.remove("spinner-border");
    document.getElementById("btnAddProduct").removeAttribute("disabled");
  });
};

var calcPrice = () => {
  total = 0;
  products.forEach((element) => {
    total += element.price;
  });
  return total;
};

let searchFunction = () => {
  var filter = "title";
  var searchValue = document.getElementById("search-box").value;
  var filteredData = products.filter(function (obj) {
    return obj[filter].toUpperCase().includes(searchValue.toUpperCase());
  });
  refresh(filteredData);
};

let saveToLocal = () => (localStorage.localProducts = JSON.stringify(products));
