let Login = document.getElementById("login1");
function toggleLogin() {
  Login.classList.toggle("open1");
}
/*------------------------------------search&filter-----------------------------------*/
let products = {
  data: [
    {
      productName: "Combo khuyến mãi MayoB",
      category: "Chicken",
      price: "129.000",
      image: "image/Ga1.png",
    },
    {
      productName: "Combo MayoB 2",
      category: "Chicken",
      price: "155.000",
      image: "image/Ga2.png",
    },
    {
      productName: "Combo MayoB 3",
      category: "Chicken",
      price: "253.000",
      image: "image/Ga3.png",
    },
    {
      productName: "Combo MayoB 4",
      category: "Chicken",
      price: "263.000",
      image: "image/Ga4.png",
    },
    {
      productName: "Hamburger cá",
      category: "Hamburger",
      price: "57.000",
      image: "image/Burger1.png",
    },
    {
      productName: "Hamburger tôm",
      category: "Hamburger",
      price: "60.000",
      image: "image/Burger2.png",
    },
    {
      productName: "Hamburger gà",
      category: "Hamburger",
      price: "55.000",
      image: "image/Burger3.png",
    },
    {
      productName: "Combo hamburger",
      category: "Hamburger",
      price: "55.000",
      image: "image/Burger5.png",
    },
    {
      productName: "Mì ý S2",
      category: "Spaghetti&Rice",
      price: "57.000",
      image: "image/Miy1.png",
    },
    {
      productName: "Mì ý S4",
      category: "Spaghetti&Rice",
      price: "145.000",
      image: "image/Miy2.png",
    },
    {
      productName: "Combo cơm gà",
      category: "Spaghetti&Rice",
      price: "157.000",
      image: "image/Com.png",
    },
    {
      productName: "Khoai tây nghiền",
      category: "Snack",
      price: "60.000",
      image: "image/Snack.png",
    },
    {
      productName: "Bánh Tart phô mai",
      category: "Snack",
      price: "55.000",
      image: "image/Snack1.png",
    },
    {
      productName: "Snack mực",
      category: "image/Snack",
      price: "55.000",
      image: "image/Snack2.png",
    },
    {
      productName: "Bắp cải trộn",
      category: "Snack",
      price: "55.000",
      image: "image/Snack3.png",
    },
    {
      productName: "Sprite",
      category: "Drink",
      price: "24.000",
      image: "image/Sprite.png",
    },
    {
      productName: "Coca Cola",
      category: "Drink",
      price: "24.000",
      image: "image/Coca.png",
    },
    {
      productName: "Fanta",
      category: "Drink",
      price: "24.000",
      image: "image/Fanta.png",
    },
    {
      productName: "Dasani",
      category: "Drink",
      price: "20.000",
      image: "image/Dasani.png",
    },
  ],
};
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("imagecontainer");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h4");
  name.classList.add("productname");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h5");
  price.classList.add("price");
  price.innerHTML = `<span>${i.price}</span>đ`;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  let button = document.createElement("div");
  button.classList.add("btn-container")
  button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
  container.appendChild(button);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("btn-active");
    } else {
      button.classList.remove("btn-active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  let paginaion = document.querySelectorAll(".listPage");
  //loop through all cards
  paginaion.forEach((page) => {
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
        page.style.display="flex";
        loadItem();
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
          page.style.display="none";
        } else {
          //hide other elements
          element.classList.add("hide");
          page.style.display="none";
        }
      }
    });
  });
  }

  function deletePagination(){
    let paginaion = document.querySelectorAll(".listPage");
    paginaion.forEach((page) => {
      page.style.display="none";
    });
  }
  
  function filterByPrice(minPrice, maxPrice) {
    // Convert minPrice and maxPrice to numbers
    minPrice = parseFloat(minPrice);
    maxPrice = parseFloat(maxPrice);

    // Select all cards
    let elements = document.querySelectorAll(".card");

    // Loop through all cards
    elements.forEach((element) => {
      // Get the price of the product
      let price = parseFloat(element.querySelector(".price").innerText.replace(/đ/g, ''));

      // Check if the price is within the range
      if ((isNaN(minPrice) || price >= minPrice) && (isNaN(maxPrice) || price <= maxPrice)) {
        // If it is, display the card
        element.classList.remove("hide");
      }
      else {
        // If it isn't, hide the card
        element.classList.add("hide");
      }
    });
  }
  function filterbyName() {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".productname");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  }

  document.getElementById("search").addEventListener("click", () => {
    filterbyName();
    deletePagination();

  });

  document.getElementById("price-filter").addEventListener("click", () => {
    let minPrice = document.querySelector('input[name="minPrice"]').value;
    let maxPrice = document.querySelector('input[name="maxPrice"]').value;
    filterByPrice(minPrice, maxPrice);
    deletePagination();
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  /*---------------------------------------cart---------------------------------------*/
  const btn = document.querySelectorAll(".btn-container i")
  //console.log(btn)
  btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      {
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector(".productname").innerText
        var productPrice = product.querySelector("h5 span").innerText
        console.log(productPrice, productImg, productName)
        addcart(productPrice, productImg, productName)
      }
    })
  })

  function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll(".title")
      if (productT[i].innerHTML == productName) {
        alert("Sản phẩm của bạn đã có trong giỏ hàng")
        return
      }
    }
    var trcontent = productPrice
    addtr.innerHTML = '<tr><td style="display: flex; align-items: center;"><img style="width:70px;" src="' + productImg + '" alt=""><span class="title" style="padding: 0px 20px;">' + productName + '</span></td><td><span class="prices">' + productPrice + '</span></td><td><input style="width: 50px; height: 30px; padding: 10px 10px; border-radius: 10px; outline: none;" type="number" value="1" min="1"></td><td style="cursor:  pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
  }

  function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0

    //console.log(cartItem.length)
    for (var i = 0; i < cartItem.length; i++) {
      var inputValue = cartItem[i].querySelector("input").value
      // console.log(inputValue)       
      var productPrice = cartItem[i].querySelector(".prices").innerHTML
      // console.log(productPrice)
      var newsProductPrice = productPrice.split('.').join("");
      totalA = newsProductPrice * inputValue
      // totalB = totalA.toLocaleString('de-DE')       
      // console.log(totalB)
      totalC = totalC + totalA
      //totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon")
    console.log(cartTotalA, cartPrice)
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
    // console.log(cartTotalA)
  }

  function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll(".cart-delete")
      productT[i].addEventListener("click", function (event) {
        var cartDelete = event.target
        var cartitemR = cartDelete.parentElement.parentElement
        cartitemR.remove()
        carttotal()
        console.log(cartitemR)
      })

    }
  }

  function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
      var inputValue = cartItem[i].querySelector("input")
      inputValue.addEventListener("change", function () {
        carttotal()
      })

    }
  }

  const cartbtn = document.querySelector("#hidecart")
  const cartshow = document.querySelector(".cart-icon")
  cartshow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0";
  })
  cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%"
  })
  /*---------------------------------------cart---------------------------------------*/

 
  function isCartEmpty() {
    var cartItems = document.querySelectorAll("tbody tr");
    return cartItems.length === 0;
  }
  function checkout() {
    if (isCartEmpty()) {
      
      alert("Vui lòng thêm sản phẩm vào giỏ hàng trước khi chốt đơn!");
      return;
    }
    else {
      var chotdons =document.getElementById("chotdon");
      chotdons.href="form.html";
    }
  
    
  }
    



