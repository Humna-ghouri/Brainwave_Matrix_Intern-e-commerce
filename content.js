const products = {
  perfume: [
    { 
      id: 1,
      name: "HALTANE", 
      price: "$55", 
      desc: "Premium long-lasting fragrance.", 
      rating: 4.5, 
      img: "https://i.pinimg.com/736x/ed/30/69/ed3069217f213f72ed16bb7bf79fcdd8.jpg",
      hoverImg: "https://i.pinimg.com/736x/f6/3c/bf/f63cbf92654e40fc1a9b7de319c5ab7f.jpg",
      category: "Perfume",
      material: "Eau de Parfum"
    },
    { 
      id: 2,
      name: "BADEE AL OUD", 
      price: "$45", 
      desc: "Fresh and cool scent.", 
      rating: 4.0, 
      img: "https://i.pinimg.com/736x/cd/16/24/cd16246a2498ef9695af15a3b7f0a2bb.jpg",
      hoverImg: "https://i.pinimg.com/736x/cc/de/b1/ccdeb1932558b2e5938da864218f4861.jpg",
      category: "Perfume",
      material: "Eau de Toilette"
    },
    { 
      id: 3,
      name: "TOMFORD", 
      price: "$60", 
      desc: "Warm and spicy scent.", 
      rating: 4.2, 
      img: "https://i.pinimg.com/736x/16/7d/7a/167d7a3df1ce00d4c7b7195dcadde527.jpg",
      hoverImg: "https://i.pinimg.com/736x/dd/c2/f6/ddc2f655bc3d996ac0b79706131e4f08.jpg",
      category: "Perfume",
      material: "Eau de Parfum"
    },
    { 
      id: 4,
      name: "KHAMRAH", 
      price: "$50", 
      desc: "Floral tones for elegance.", 
      rating: 4.3, 
      img: "https://i.pinimg.com/736x/73/f7/60/73f760d00af019ece1cacd5581dfa753.jpg",
      hoverImg: "https://i.pinimg.com/736x/eb/cc/9d/ebcc9d21035cb02e36b8818b7b0ed216.jpg",
      category: "Perfume",
      material: "Eau de Parfum"
    }
  ],
  candle: [
    { 
      id: 5,
      name: "THORNN", 
      price: "$20", 
      desc: "Smooth vanilla aroma candle.", 
      rating: 4.6, 
      img: "https://i.pinimg.com/736x/97/68/03/976803f00fb716e3d830ec8905f5cdd7.jpg",
      video: "./assets/candel1.mp4",
      category: "Candle",
      material: "Soy Wax"
    },
    { 
      id: 6,
      name: "BERGAMOT", 
      price: "$22", 
      desc: "Relaxing lavender scented candle.", 
      rating: 4.5, 
      img: "https://i.pinimg.com/736x/1e/a7/b0/1ea7b040dff48a62b0e78abeea64805c.jpg", 
      video: "./assets/candle2.mp4",
      category: "Candle",
      material: "Beeswax"
    },
    { 
      id: 7,
      name: "LUMIRA", 
      price: "$25", 
      desc: "Energizing citrus candle.", 
      rating: 4.4, 
      img: "https://i.pinimg.com/736x/42/e4/71/42e471fd62052d5ece70529ce8fd15fb.jpg",
      video: "./assets/candle3.mp4",
      category: "Candle",
      material: "Soy Wax"
    },
    { 
      id: 8,
      name: "ESTA", 
      price: "$28", 
      desc: "Earthy and rustic scent.", 
      rating: 4.1, 
      img: "https://i.pinimg.com/736x/d1/f3/0b/d1f30b830a52d47cd39a53f3e9c52a6d.jpg",
      video: "./assets/candle4.mp4",
      category: "Candle",
      material: "Paraffin Wax"
    }
  ],
  bags: [
    { 
      id: 9,
      name: "Classic Tote", 
      price: "$80", 
      desc: "Spacious and stylish.", 
      rating: 4.7, 
      img: "https://i.pinimg.com/736x/3c/87/02/3c870234e640fd37e8d765b34adc84f9.jpg",
      video: "./assets/bag1.mp4",
      category: "Bag",
      material: "Leather"
    },
    { 
      id: 10,
      name: "Urban Sling", 
      price: "$60", 
      desc: "Compact and modern.", 
      rating: 4.2, 
      img: "https://i.pinimg.com/736x/04/97/25/049725c8fb9a45b0aec50ed364636f15.jpg",
      video: "./assets/bag2.mp4",
      category: "Bag",
      material: "Canvas"
    },
    { 
      id: 11,
      name: "Backpack Pro", 
      price: "$90", 
      desc: "Elegant leather bag.", 
      rating: 4.8, 
      img: "https://i.pinimg.com/736x/04/7c/da/047cda2e1e8883dbf8a635fd6ffcd56f.jpg",
      video: "./assets/bag3.mp4",
      category: "Bag",
      material: "Leather"
    },
    { 
      id: 12,
      name: "Leather Carry", 
      price: "$70", 
      desc: "Durable and trendy.", 
      rating: 4.6, 
      img: "https://i.pinimg.com/736x/a0/7d/da/a07ddaaaddd466c059ce6a748e2c75f2.jpg",
      video: "./assets/bag4.mp4",
      category: "Bag",
      material: "Genuine Leather"
    }
  ],
  jewels: [
    { 
      id: 13,
      name: "Golden Ring", 
      price: "$120", 
      desc: "Elegant gold design.", 
      rating: 4.9, 
      img: "https://i.pinimg.com/736x/35/3f/96/353f9646730f3fc7a9006095c2e572b7.jpg",
      video: "./assets/ring1.mp4",
      category: "Jewelry",
      material: "14K Gold"
    },
    { 
      id: 14,
      name: "Pearl Necklace", 
      price: "$150", 
      desc: "Classic pearl style.", 
      rating: 4.8, 
      img: "https://i.pinimg.com/736x/ac/92/a0/ac92a0f780047bad12d51942f28a26d9.jpg",
            video: "./assets/pearl1.mp4",

      category: "Jewelry",
      material: "Pearl & Silver"
    },
    { 
      id: 15,
      name: "Silver Bracelet", 
      price: "$110", 
      desc: "Chic silver bracelet.", 
      rating: 4.5, 
      img: "https://i.pinimg.com/736x/fc/2d/e9/fc2de9f6286835fcdced2079985acb7c.jpg",
                  video: "./assets/bracelet.mp4",

      category: "Jewelry",
      material: "Sterling Silver"
    },
    { 
      id: 16,
      name: "Diamond Studs", 
      price: "$300", 
      desc: "Timeless diamond earrings.", 
      rating: 5.0, 
      img: "https://i.pinimg.com/736x/43/f8/3d/43f83d0dfbab6a0cb722274bf925114d.jpg",
      video: "./assets/earings.mp4",
      category: "Jewelry",
      material: "White Gold"
    }
  ]
};

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupPrice = document.getElementById("popup-price");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.getElementById("close");

function createCard(product) {
  const card = document.createElement("div");
  card.className = "card";
  
  if (product.video) {
    // For products with video
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${product.img}" alt="${product.name}" class="product-main-img"/>
        <video autoplay loop muted playsinline class="product-hover-video">
          <source src="${product.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="card-info">
        <span class="product-category">${product.category} • ${product.material}</span>
        <h3>${product.name}</h3>
        <div class="rating">${"★".repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? "½" : ""}</div>
        <p>${product.price}</p>
        <button><i class="fas fa-shopping-cart"></i> Add to Cart</button>
      </div>
    `;
  } else if (product.hoverImg) {
    // For products with hover image
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${product.img}" alt="${product.name}" class="product-main-img"/>
        <img src="${product.hoverImg}" alt="${product.name}" class="product-hover-img"/>
      </div>
      <div class="card-info">
        <span class="product-category">${product.category} • ${product.material}</span>
        <h3>${product.name}</h3>
        <div class="rating">${"★".repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? "½" : ""}</div>
        <p>${product.price}</p>
        <button><i class="fas fa-shopping-cart"></i> Add to Cart</button>
      </div>
    `;
  } else {
    // For regular products
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${product.img}" alt="${product.name}" class="product-main-img"/>
      </div>
      <div class="card-info">
        <span class="product-category">${product.category} • ${product.material}</span>
        <h3>${product.name}</h3>
        <div class="rating">${"★".repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? "½" : ""}</div>
        <p>${product.price}</p>
        <button><i class="fas fa-shopping-cart"></i> Add to Cart</button>
      </div>
    `;
  }

  card.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Check if item already exists in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cartItems.push({...product, quantity: 1});
    }
    
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartBadge();
    showNotification(`${product.name} added to cart!`);
  });

  card.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() !== 'button') {
      popupImg.src = product.img;
      popupTitle.textContent = product.name;
      popupPrice.textContent = product.price;
      popupDesc.textContent = product.desc;
      popup.style.display = "flex";
    }
  });
  
  return card;
}

function updateCartBadge() {
  const badge = document.getElementById("badge");
  if (badge) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    badge.textContent = totalItems;
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  Object.keys(products).forEach(type => {
    const container = document.getElementById(type);
    products[type].forEach(prod => {
      const card = createCard(prod);
      container.appendChild(card);
    });
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});