let cart = [];
let heroIndex = 0;

/* HERO SLIDER */

const heroSlides = [
  {
    bg: "linear-gradient(110deg, #ffd84d 0%, #ffd84d 55%, #f6c744 55%)",
    title: "Up to 30% off on hotels",
    text: "Now available on desktop",
    brand: "amazon pay"
  },
  {
    bg: "linear-gradient(110deg, #a7d8ff 0%, #a7d8ff 55%, #6bbcff 55%)",
    title: "Big deals on electronics",
    text: "Laptops, headphones and accessories",
    brand: "amazon deals"
  },
  {
    bg: "linear-gradient(110deg, #ffc0cb 0%, #ffc0cb 55%, #ff8fa3 55%)",
    title: "Fashion sale is live",
    text: "Shop clothes, shoes and accessories",
    brand: "amazon fashion"
  },
  {
    bg: "linear-gradient(110deg, #b8f7c1 0%, #b8f7c1 55%, #7ee08e 55%)",
    title: "Fresh groceries delivered",
    text: "Daily essentials at your doorstep",
    brand: "amazon fresh"
  }
];

/* PRODUCTS */

const products = [
  {
    name: "Men Regular Fit Shorts",
    price: "₹399",
    img: "https://images.pexels.com/photos/6311644/pexels-photo-6311644.jpeg",
    desc: "Comfortable men's casual shorts."
  },
  {
    name: "Men Capri Pants",
    price: "₹449",
    img: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
    desc: "Stylish capri pants for men."
  },
  {
    name: "Track Pants",
    price: "₹599",
    img: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    desc: "Comfortable sports track pants."
  },
  {
    name: "Screen Cleaner Kit",
    price: "₹329",
    img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
    desc: "Cleaning kit for screens and laptops."
  },
  {
    name: "Wireless Headphones",
    price: "₹1,499",
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    desc: "Premium wireless headphones."
  },
  {
    name: "Gaming Headset",
    price: "₹2,299",
    img: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg",
    desc: "RGB gaming headset."
  },
  {
    name: "HP Laptop",
    price: "₹76,990",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    desc: "HP laptop for coding and office work."
  },
  {
    name: "ASUS Gaming Laptop",
    price: "₹79,790",
    img: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    desc: "Gaming laptop with high performance."
  },
  {
    name: "MacBook Style Laptop",
    price: "₹92,990",
    img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg",
    desc: "Premium laptop for editing and work."
  },
  {
    name: "Kitchen Cookware Set",
    price: "₹999",
    img: "https://images.pexels.com/photos/699608/pexels-photo-699608.jpeg",
    desc: "Kitchen cookware set."
  },
  {
    name: "Non Stick Pan",
    price: "₹699",
    img: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    desc: "Non stick frying pan."
  },
  {
    name: "Beauty Face Wash",
    price: "₹299",
    img: "https://images.pexels.com/photos/6621338/pexels-photo-6621338.jpeg",
    desc: "Face wash and skincare product."
  },
  {
    name: "Body Lotion",
    price: "₹249",
    img: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg",
    desc: "Moisturizing body lotion."
  },
  {
    name: "Home Decor Lamp",
    price: "₹799",
    img: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
    desc: "Decorative lamp for home."
  },
  {
    name: "Wall Clock",
    price: "₹499",
    img: "https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg",
    desc: "Modern wall clock."
  },
  {
    name: "Hand Grip Strengthener",
    price: "₹339",
    img: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg",
    desc: "Adjustable hand grip strengthener."
  }
];

/* CATEGORIES */

const categoryData = {
  all: products,

  fashion: [
    products[0],
    products[1],
    products[2]
  ],

  electronics: [
    products[3],
    products[4],
    products[5],
    products[6],
    products[7],
    products[8]
  ],

  deals: [
    products[2],
    products[3],
    products[4],
    products[7],
    products[9],
    products[10],
    products[15]
  ],

  fresh: [
    {
      name: "Fresh Apples",
      price: "₹199",
      img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
      desc: "Fresh red apples."
    },
    {
      name: "Vegetables Pack",
      price: "₹299",
      img: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg",
      desc: "Fresh vegetables pack."
    }
  ],

  sell: [
    {
      name: "Start Selling",
      price: "Register Now",
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      desc: "Start selling products online."
    }
  ],

  mx: [
    {
      name: "MX Player Subscription",
      price: "Free",
      img: "https://images.pexels.com/photos/7991373/pexels-photo-7991373.jpeg",
      desc: "Watch entertainment online."
    }
  ],

  rufus: [
    {
      name: "AI Shopping Assistant",
      price: "Free",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      desc: "Amazon-style AI shopping assistant."
    }
  ],

  buyagain: [
    products[0],
    products[1],
    products[3],
    products[8],
    products[11]
  ],

  giftcards: [
    {
      name: "Amazon Gift Card",
      price: "₹500",
      img: "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg",
      desc: "Shopping gift card."
    },
    {
      name: "Birthday Gift Card",
      price: "₹1000",
      img: "https://images.pexels.com/photos/1729791/pexels-photo-1729791.jpeg",
      desc: "Birthday special gift card."
    }
  ],

  basics: [
    {
      name: "USB Cable",
      price: "₹299",
      img: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg",
      desc: "Fast charging USB cable."
    },
    {
      name: "Laptop Bag",
      price: "₹899",
      img: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
      desc: "Laptop backpack bag."
    },
    {
      name: "Wireless Mouse",
      price: "₹699",
      img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
      desc: "Wireless computer mouse."
    }
  ],

  pay: [
    {
      name: "Mobile Recharge",
      price: "Pay Now",
      img: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg",
      desc: "Recharge using Amazon Pay."
    },
    {
      name: "Electricity Bill",
      price: "Pay Bill",
      img: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
      desc: "Pay bills online."
    }
  ],

  home: [
    {
      name: "Wall Light",
      price: "₹799",
      img: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
      desc: "Decorative wall light."
    },
    {
      name: "Study Table",
      price: "₹3,499",
      img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      desc: "Modern study table."
    },
    {
      name: "Tools Kit",
      price: "₹999",
      img: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      desc: "Basic home tools kit."
    }
  ],

  service: [
    {
      name: "Track Order",
      price: "Support",
      img: "https://images.pexels.com/photos/7709088/pexels-photo-7709088.jpeg",
      desc: "Customer support and order tracking."
    }
  ],

  new: [
    products[2],
    products[5],
    products[6],
    products[9],
    products[15]
  ]
};

/* IMAGE HELPER */

function imageTag(src, alt = "Product Image") {
  return `
    <img 
      src="${src}" 
      alt="${alt}" 
      onerror="this.src='https://placehold.co/300x250?text=Product+Image'">
  `;
}

/* ALL PRODUCTS */

function getAllProducts() {
  return [
    ...products,
    ...categoryData.fresh,
    ...categoryData.sell,
    ...categoryData.mx,
    ...categoryData.rufus,
    ...categoryData.giftcards,
    ...categoryData.basics,
    ...categoryData.pay,
    ...categoryData.home,
    ...categoryData.service
  ];
}

/* PRODUCT ROWS */

function createRow(id, items) {
  const row = document.getElementById(id);
  if (!row) return;

  row.innerHTML = "";

  items.forEach((p) => {
    row.innerHTML += `
      <div class="row-item" onclick="openProductDirect('${p.name}')">
        ${imageTag(p.img, p.name)}
        <h4>${p.name}</h4>
        <p>${p.price}</p>
      </div>
    `;
  });
}

function createHistory() {
  const history = document.getElementById("historyProducts");
  if (!history) return;

  history.innerHTML = "";

  products.forEach((p) => {
    history.innerHTML += `
      <div class="history-card" onclick="openProductDirect('${p.name}')">
        ${imageTag(p.img, p.name)}
        <h4>${p.name}</h4>
        <p class="stars">★★★★☆</p>
        <p class="price">${p.price}</p>
        <span class="deal">Limited Deal</span>
      </div>
    `;
  });
}

/* CATEGORY SELECT FROM SEARCH DROPDOWN */

function showSelectedCategory() {
  const selectedCategory = document.getElementById("searchCategory").value;

  if (selectedCategory === "all") {
    home();
  } else {
    showCategory(selectedCategory);
  }
}

/* SHOW CATEGORY */

function showCategory(category) {
  if (category === "all") {
    home();
    return;
  }

  const items = categoryData[category] || products;

  document.getElementById("mainContent").innerHTML = `
    <section class="scroll-row">
      <h2>${category.toUpperCase()} PRODUCTS</h2>
      <div class="row-products" id="categoryRow"></div>
    </section>
  `;

  const row = document.getElementById("categoryRow");

  items.forEach((p) => {
    row.innerHTML += `
      <div class="row-item" onclick="openProductDirect('${p.name}')">
        ${imageTag(p.img, p.name)}
        <h4>${p.name}</h4>
        <p>${p.price}</p>
      </div>
    `;
  });
}

/* PRODUCT DETAILS */

function openProductDirect(name) {
  const allProducts = getAllProducts();
  const p = allProducts.find(item => item.name === name) || products[0];
  openProduct(p);
}

function openProduct(p) {
  document.getElementById("mainContent").innerHTML = `
    <section class="product-page">
      <div class="product-img-box">
        ${imageTag(p.img, p.name)}
      </div>

      <div class="product-info">
        <h1>${p.name}</h1>
        <p class="rating">★★★★☆ 4.3 | 2,458 ratings</p>
        <hr>

        <h2 class="price">${p.price}</h2>

        <p>
          M.R.P:
          <del>₹1,999</del>
          <b> Limited Deal</b>
        </p>

        <p>Inclusive of all taxes</p>

        <div class="offers">
          <h3>Offers</h3>
          <p>🏦 10% instant bank discount</p>
          <p>💳 EMI available</p>
          <p>🔁 Exchange offer available</p>
        </div>

        <h3>About this item</h3>
        <p>${p.desc}</p>
        <p>✔ Good quality product</p>
        <p>✔ Easy replacement</p>
        <p>✔ Secure transaction</p>
      </div>

      <div class="buy-box">
        <h2>${p.price}</h2>
        <p>FREE delivery Tomorrow</p>
        <p>Delivering to Mangalagiri</p>
        <p class="stock">In Stock</p>

        <button class="cart-btn" onclick="addToCart('${p.name}')">
          Add to Cart
        </button>

        <button class="buy-btn" onclick="alert('Buy Now selected for ${p.name}')">
          Buy Now
        </button>

        <button class="back-btn" onclick="home()">
          Back to Home
        </button>
      </div>
    </section>
  `;
}

/* CART */

function addToCart(name) {
  cart.push(name);

  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = cart.length;
  }

  alert(name + " added to cart");
}

function showCart() {
  closePopups();

  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<li>Your cart is empty</li>";
  } else {
    cart.forEach(item => {
      list.innerHTML += `<li>${item}</li>`;
    });
  }

  document.getElementById("cartPopup").style.display = "block";
}

/* POPUPS */

function openPopup(id) {
  closePopups();

  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = "block";
  }
}

function closePopups() {
  ["locationPopup", "loginPopup", "ordersPopup", "cartPopup"].forEach(id => {
    const popup = document.getElementById(id);

    if (popup) {
      popup.style.display = "none";
    }
  });
}

/* SEARCH SUGGESTIONS */

function showSearchSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const box = document.getElementById("suggestionsBox");

  box.innerHTML = "";

  if (input.trim() === "") {
    box.style.display = "none";
    return;
  }

  const matched = getAllProducts().filter(product =>
    product.name.toLowerCase().includes(input)
  );

  if (matched.length === 0) {
    box.style.display = "none";
    return;
  }

  matched.slice(0, 6).forEach(product => {
    box.innerHTML += `
      <div class="suggestion-item" onclick="selectSuggestion('${product.name}')">
        ${product.name}
      </div>
    `;
  });

  box.style.display = "block";
}

function selectSuggestion(name) {
  document.getElementById("searchInput").value = name;
  document.getElementById("suggestionsBox").style.display = "none";
  openProductDirect(name);
}

/* SEARCH PRODUCTS */

function searchProducts() {
  const selectedCategory = document.getElementById("searchCategory").value;
  const text = document.getElementById("searchInput").value.toLowerCase();

  let searchList;

  if (selectedCategory === "all") {
    searchList = getAllProducts();
  } else {
    searchList = categoryData[selectedCategory] || [];
  }

  const result = searchList.filter(p =>
    p.name.toLowerCase().includes(text)
  );

  document.getElementById("mainContent").innerHTML = `
    <section class="scroll-row">
      <h2>Search Results</h2>
      <div class="row-products" id="searchRow"></div>
    </section>
  `;

  const row = document.getElementById("searchRow");

  if (result.length === 0) {
    row.innerHTML = "<h3>No products found</h3>";
    return;
  }

  result.forEach((p) => {
    row.innerHTML += `
      <div class="row-item" onclick="openProductDirect('${p.name}')">
        ${imageTag(p.img, p.name)}
        <h4>${p.name}</h4>
        <p>${p.price}</p>
      </div>
    `;
  });
}

/* HERO SLIDER */

function changeHero(direction) {
  heroIndex += direction;

  if (heroIndex < 0) {
    heroIndex = heroSlides.length - 1;
  }

  if (heroIndex >= heroSlides.length) {
    heroIndex = 0;
  }

  const slide = heroSlides[heroIndex];
  const hero = document.querySelector(".hero");

  if (!hero) return;

  hero.style.background = slide.bg;

  document.querySelector(".hero-text h1").innerText = slide.title;
  document.querySelector(".hero-text p").innerText = slide.text;
  document.querySelector(".hero-text h2").innerText = slide.brand;
}

/* HOME */

function home() {
  location.reload();
}

/* INITIAL LOAD */

createRow("shortsRow", products.slice(0, 8));
createRow("cartBasedRow", products.slice(2, 10));
createRow("computerRow", products.slice(3, 12));
createHistory();