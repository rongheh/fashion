let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.qty, 0);
  let el = document.getElementById("cartCount");
  if (el) el.innerText = count;
}

function loadCart() {
  let container = document.getElementById("cartItems");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    container.innerHTML += `
      <p>${item.name} x ${item.qty} — $${item.price * item.qty}</p>
    `;
  });

  container.innerHTML += `<h3>Total: $${total}</h3>`;
}

updateCartCount();
