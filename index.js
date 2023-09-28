var products = [];

localStorage.localProducts+='';

if (localStorage.localProducts != 'null'){
    products = JSON.parse(localStorage.localProducts);
}
  
let refresh = () =>{
    var items ='';
    products.forEach((element) => {
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
      }
      );
      if (items != null) {
        document.getElementById('products').innerHTML = items;
      }
    
    }

  let addProducts = ( ) =>{
    products.push({
      title: document.getElementById("Product-name").value,
      description: document.getElementById("Product-description").value,
      price: Number(document.getElementById("Product-price").value),
      image: document.getElementById("Product-img").value,
    });

    document.getElementById("Product-name").value = null;
    document.getElementById("Product-description").value = null;
    document.getElementById("Product-price").value = null;
    document.getElementById("Product-img").value = null;

    saveToLocal();
}

  
  var calcPrice = () => {
    total = 0;
    products.forEach((element) => {
      total += element.price;
    });
    return total;
  };
  
  var searchProducts = () => {
    var searchPox = prompt("Search by product title");
    var searchArry = [];
    products.forEach((element) => {
      var proTitle = element.title.toUpperCase;
      if (proTitle.inclide(searchPox.toUpperCase)) {
      }
    });
    return total;
  };
  
  let searchFunction = () => {
    // var searchBox = prompt("Search by product title");
    var searchResult = [];
    var i = 0;
    products.forEach((element) => {
      if (element.title.toUpperCase().includes(searchBox.toUpperCase())) {
        searchResult.push(element);
      }
    });
    return showProducts(searchResult)
  };
  

let saveToLocal = ()=>localStorage.localProducts = JSON.stringify(products);