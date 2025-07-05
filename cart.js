console.clear();

// Helper function to format price
function formatPrice(price) {
  return typeof price === 'string' 
    ? parseFloat(price.replace(/[^0-9.]/g, '')) 
    : price;
}

// Helper function to display price
function displayPrice(price) {
  return 'Rs ' + price.toFixed(2);
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="close-notification">&times;</button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 4000);
  
  // Manual close
  notification.querySelector('.close-notification').addEventListener('click', () => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  });
}

// Update badge count and total items
function updateBadge() {
  const badge = document.getElementById("badge");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  
  if (badge) badge.textContent = totalItems.toString();
  
  const totalItemElement = document.getElementById("totalItem");
  if (totalItemElement) {
    totalItemElement.textContent = `Total Items: ${totalItems}`;
  }
}

// Update quantity in cart
function updateQty(productName, change) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const index = cartItems.findIndex(item => item.name === productName);
  
  if (index > -1) {
    const item = cartItems[index];
    item.quantity = item.quantity || 1;
    
    if (change === -1) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        showNotification(`Reduced quantity of ${productName}`, 'success');
      } else {
        cartItems.splice(index, 1);
        showNotification(`Removed ${productName} from cart`, 'warning');
      }
    } else if (change === 1) {
      item.quantity += 1;
      showNotification(`Increased quantity of ${productName}`, 'success');
    }
    
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateBadge();
    renderCart();
  }
}

// Render cart items and total
function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartContainer = document.getElementById("cartContainer");
  const totalAmountDisplay = document.getElementById("totalAmount");
  
  if (cartContainer) cartContainer.innerHTML = '';
  
  let totalAmount = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    if (totalAmountDisplay) {
      totalAmountDisplay.textContent = displayPrice(0);
    }
    return;
  }

  cartItems.forEach(product => {
    const price = formatPrice(product.price);
    const quantity = product.quantity || 1;
    totalAmount += price * quantity;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    const img = document.createElement("img");
    img.src = product.img || './images/default-product.jpg';
    img.alt = product.name;

    const info = document.createElement("div");
    info.className = "item-info";
    info.innerHTML = `
      <h3>${product.name}</h3>
      <p>${displayPrice(price)}</p>
    `;

    const qtyControl = document.createElement("div");
    qtyControl.className = "qty-control";

    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.onclick = () => updateQty(product.name, -1);

    const qty = document.createElement("span");
    qty.textContent = quantity.toString();

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.onclick = () => updateQty(product.name, 1);

    qtyControl.append(minus, qty, plus);
    itemDiv.append(img, info, qtyControl);
    cartContainer.appendChild(itemDiv);
  });

  if (totalAmountDisplay) {
    totalAmountDisplay.textContent = displayPrice(totalAmount);
  }
}

// Modal functions
function openModal() {
  document.getElementById("modalOverlay").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}

// Handle order placement
function setupCheckout() {
  const checkoutBtn = document.getElementById("checkoutBtn");
  const confirmBtn = document.getElementById("confirmOrder");
  const closeModalBtn = document.getElementById("closeModal");

  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      if (cartItems.length === 0) {
        showNotification("Your cart is empty!", 'error');
        return;
      }
      openModal();
    };
  }

  if (confirmBtn) {
    confirmBtn.onclick = () => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("address").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!name || !email || !address || !phone) {
        showNotification("Please fill all fields", 'error');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification("Please enter a valid email address", 'error');
        return;
      }

      if (!/^[0-9]{10,15}$/.test(phone)) {
        showNotification("Please enter a valid phone number", 'error');
        return;
      }

      closeModal();
      showNotification("Order placed successfully!", 'success');
      localStorage.removeItem("cartItems");
      updateBadge();
      renderCart();
      
      // Reset form
      document.getElementById("checkoutForm").reset();
    };
  }

  if (closeModalBtn) {
    closeModalBtn.onclick = closeModal;
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  updateBadge();
  renderCart();
  setupCheckout();
  
  // Close modal when clicking outside
  document.getElementById("modalOverlay").addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
      closeModal();
    }
  });
});
