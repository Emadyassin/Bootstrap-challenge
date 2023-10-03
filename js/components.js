const navComponent = (headerItems) => {
  const elements = headerItems
    .map((item) => {
      return `
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" onclick="saveToLocal()" href="${item.link}">${item.title}</a>
            </li>        
        `;
    })
    .join("");

  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid container">
            <a class="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0">
                    ${elements}
                </ul>

                <a class=" btn btn-outline-dark">
                    <div class="cart-btn d-flex justify-content-around align-items-center w-100 flex-row">
                        <i class="cart-icon fa-solid fa-cart-shopping"></i>card
                    </div>
                </a>
            </div>
        </div>
    </nav>
      `;
};

const headerComponent = () => {
  return `
    <header class="bg-color-black text-white w-100 d-flex justify-content-center align-items-center flex-column">
        <h1 class="fw-bold">Shop in style</h1>
        <p>With this shop homepage template</p>
        <div class="row">
            <div class="input-group mb-3 ">
                <input id="search-box" type="text"  class="form-control search-box" placeholder="Search by product name" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn bg-secondary-subtle" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </header>
      `;
};

const refreshMainComponent = (headerItems) => {
  console.log(headerItems);
  if (!headerItems) return "";
  const elements = headerItems
    .map((item) => {
      return `
        <div class="col-12 col-md-4 col-lg-3 p-3">
            <div class="card rounded-3 h-100">
                <p class="Sale bg-color-black text-white m-0 position-absolute ">Sale</p>
                <img src="${item.image}" class="bg-dark-subtle cart-image w-100 rounded-3 rounded-bottom-0">
                <div class="card-body d-flex flex-column align-content-center align-items-center justify-content-between gap-3">
                    <div class="card-info d-flex flex-column text-center">
                        <h5 class="card-title fw-bold">${item.title}</h5>
                        <div class="d-flex justify-content-center p-2"><i class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i></div>
                        <p class="card-text fw-medium">$${item.price}</p>
                    </div>
                    <div class="card-ptn">
                        <a href="#" class="w-100 w-md-50 btn btn-outline-dark fw-medium">View options</a>
                    </div>
                </div>
            </div>
        </div>       
          `;
    })
    .join("");

  return `
        ${elements}
    `;
};

const shopMainComponent = (headerItems) => {
  if (!headerItems) return "";
  const elements = headerItems
    .map((item) => {
      return `
        <div class="col-12 col-md-4 col-lg-3 p-3">
            <div class="card rounded-3 h-100">
                <p class="Sale bg-color-black text-white m-0 position-absolute ">Sale</p>
                <img src="${item.image}" class="bg-dark-subtle cart-image w-100 rounded-3 rounded-bottom-0">
                <div class="card-body d-flex flex-column align-content-center align-items-center justify-content-between gap-3">
                    <div class="card-info d-flex flex-column text-center">
                        <h5 class="card-title fw-bold">${item.title}</h5>
                        <div class="d-flex justify-content-center p-2"><i class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i><i
                                class="fa-solid fa-star bg-star-y"></i></div>
                        <p class="card-text fw-medium">$${item.price}</p>
                    </div>
                    <div class="card-ptn">
                        <a href="#" class="w-100 w-md-50 btn btn-outline-dark fw-medium">View options</a>
                    </div>
                </div>
            </div>
        </div>       
          `;
    })
    .join("");

  return `
        <main class="pt-5 pb-5">
            <div class="container">
                <div id="products" class="row">
                  ${elements}
                </div>
            </div>
        </main>
        `;
};
const footerComponent = () => {
  return `
    <footer class="bg-color-black text-white w-100 d-flex justify-content-center align-items-center flex-column">
        <p class="d-block">Done by Emad Yassin</p>
    </footer>
      `;
};
const refreshDashboardCardComponent = (headerItems) => {
  if (!headerItems) return "";
  const elements = headerItems
    .map((item) => {
      return `
      <div class="col-12 col-md-${12 / headerItems.length} p-3">
        <div class="card rounded-5 h-100 overflow-hidden">
          <img class="card-bg-img" src="../dots.png" alt="" srcset="">
          <div class="card-body d-flex flex-column justify-content-between gap-3 text-white bg-color-black">
              <div class="card-info d-flex flex-column ">
                  <p class="card-text fw-medium z-1">${item.title}</p>
                  <h5 class="card-title fw-bold text-center fa-2x z-1"> ${
                    item.value
                  }</h5>
              </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
  return `
      ${elements}   
      `;
};
const dashboardCardComponent = (headerItems) => {
  const elements = headerItems
    .map((item) => {
      return `
      <div class="col-12 col-md-${12 / headerItems.length} p-3">
        <div class="card rounded-5 h-100 overflow-hidden">
          <img class="card-bg-img" src="../dots.png" alt="" srcset="">
          <div class="card-body d-flex flex-column justify-content-between gap-3 text-white bg-color-black">
              <div class="card-info d-flex flex-column ">
                  <p class="card-text fw-medium z-1">${item.title}</p>
                  <h5 class="card-title fw-bold text-center fa-2x z-1"> ${
                    item.value
                  }</h5>
              </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
  return `
  <div class="container">
    <div class="row"  id="card-data">
      ${elements} 
    </div>  
  </div>  
      `;
};

const refreshDashboardTableComponent = (headerItems) => {
  if (!headerItems) return "";
  const elements = headerItems
    .map((item, index) => {
      return `
        <tr>
        <th scope="row" class="table-data">${index + 1}</th>
        <td><img src="${
          item.image
        }" class="bg-dark-subtle cart-image table-image rounded-5 "></td>
        <td class="table-data">${item.title}</td>
        <td class="table-data">${item.description}</td>
        <td class="table-data">${item.price}</td>
        <td class="table-data">
          <button type="button"  onclick="addButtonsToAlertDeleteProducts(products ,${index})" class="btn" data-bs-toggle="modal" data-bs-target="#deleteProductAlert">
            <i class="fa-solid fa-trash text-danger"></i> 
          </button>
          <button type="button" onclick="addFormToModelEditProducts(products ,${index}) ; addButtonsToEditProducts(products ,${index})" class="btn" data-bs-toggle="modal" data-bs-target="#editProductModal">
            <i class="fa-solid fa-pen text-warning"></i> 
          </button>
        </td>
      </tr>    
          `;
    })
    .join("");
  return `
        ${elements}
    `;
};

const dashboardTableComponent = (headerItems) => {
  if (!headerItems) return "";
  const elements = headerItems
    .map((item, index) => {
      return `
        <tr>
        <th scope="row" class="table-data">${index + 1}</th>
        <td><img src="${
          item.image
        }" class="bg-dark-subtle cart-image table-image rounded-5 "></td>
        <td class="table-data">${item.title}</td>
        <td class="table-data">${item.description}</td>
        <td class="table-data">${item.price}</td>
        <td class="table-data">
          <div class="d-flex">
            <button type="button"  onclick="addButtonsToAlertDeleteProducts(products ,${index})" class="btn" data-bs-toggle="modal" data-bs-target="#deleteProductAlert">
              <i class="fa-solid fa-trash text-danger"></i> 
            </button>
            <button type="button" onclick="addFormToModelEditProducts(products ,${index}) ;addButtonsToEditProducts(products ,${index})" class="btn" data-bs-toggle="modal" data-bs-target="#editProductModal">
              <i class="fa-solid fa-pen text-warning"></i> 
            </button>
          </div>
        </td>
      </tr>    
          `;
    })
    .join("");

  return `
        <main class="pt-5 pb-5">
            <div class="container">
                <div class="d-flex justify-content-between m-1"> 
                    <p>
                        List of products
                    </p>
                    <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addProductModal">Add products</button>
                </div>
                <div class="table-responsive">
                    
                    <table class="table table-striped caption-top">
                        <thead>
                            <tr>
                                <th class="bg-color-black text-white" scope="col">#</th>
                                <th class="bg-color-black text-white" scope="col">image</th>
                                <th class="bg-color-black text-white" scope="col">title</th>
                                <th class="bg-color-black text-white" scope="col">description</th>
                                <th class="bg-color-black text-white" scope="col">price</th>
                                <th class="bg-color-black text-white" scope="col">-</th>
                            </tr>
                        </thead>
                        <tbody id="table-data">
                          ${elements}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        `;
};

const addProModuleComponent = () => {
  return `
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Add Product
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="model-add-products" class="modal-body">
                <form id="form" class="row">
                    <div class="mb-3 col-12 col-md-6">
                        <label for="Product-name" class="form-label">Product name</label>
                            <div class="input-group">
                            <input type="text" class="form-control" id="Product-name" aria-describedby="basic-addon3 basic-addon4">
                        </div>
                    </div>
                    <div class="mb-3 col-12 col-md-6">
                        <label for="Product-description" class="form-label">Product description</label>
                            <div class="input-group">
                            <input type="text" class="form-control" id="Product-description" aria-describedby="basic-addon3 basic-addon4">
                        </div>
                    </div>
                    <div class="mb-3 col-12 col-md-6">
                        <label for="Product-price" class="form-label">Product price</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="Product-price" aria-describedby="basic-addon3 basic-addon4">
                        </div>
                    </div>
                    <div class="mb-3 col-12 col-md-6">
                        <label for="Product-img" class="form-label">Image URL</label>
                        <div class="input-group">
                            <input type="file" class="form-control" id="Product-img" aria-describedby="basic-addon3 basic-addon4">
                        </div>
                    </div>
                </form>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button id="btnAddProduct" type="button" onclick="addProducts()" class="btn btn-primary">
                        <span id="spinner" class="spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Add Product</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
        `;
};
const editProModuleComponent = () => {
  return `
    <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Add Product
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="model-edit-products" class="modal-body">
                </div>
                <div id="modal-confirm-edit-buttons" class="modal-footer">

                </div>
            </div>
        </div>
    </div>
        `;
};

const delProModuleComponent = () => {
  return `
    <div class="modal fade bd-" id="deleteProductAlert" tabindex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-danger" id="exampleModalLabel">
                        Are you shore you want to delete this product ?
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>                        
                <div class="modal-footer" id="modal-confirm-delete-buttons">
                
                </div>
            </div>
        </div>
    </div>
        `;
};

renderHtml(
  navComponent([
    {
      title: "Shop",
      link: "/index.html",
    },
    {
      title: "Dashboard",
      link: "/page/dashboard.html",
    },
  ])
);

if (page === "index.html") renderHtml(headerComponent());

if (page === "index.html")
  renderHtml(shopMainComponent(getStorage("shopProducts")));

if (page === "dashboard.html")
  renderHtml(
    dashboardCardComponent([
      {
        title: "Products No",
        value: products.length,
      },
      {
        title: "Products Price",
        value: "$ " + calcPrice(),
      },
    ])
  );


renderHtml(dashboardTableComponent(getStorage("shopProducts")));
renderHtml(addProModuleComponent());
renderHtml(editProModuleComponent());
renderHtml(delProModuleComponent());
renderHtml(footerComponent());
