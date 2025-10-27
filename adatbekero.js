// Termékek listája
const products = [
  { id: 1, name: "Neural Chip", description: "Kísérleti agyi interfész.", price: 19999, img: "images/termek1.jpg" },
  { id: 2, name: "Smart Mirror", description: "Megmutatja, ki is vagy valójában.", price: 29999, img: "images/termek2.jpg" },
  { id: 3, name: "Time Tracker", description: "Minden pillanat számít.", price: 9999, img: "images/termek3.jpg" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

// Termékek megjelenítése
function displayProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p class="price">${p.price.toLocaleString()} Ft</p>
      <div class="buttons">
        <button onclick="addToCart(${p.id})">+</button>
        <button onclick="removeFromCart(${p.id})">-</button>
      </div>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function removeFromCart(id) {
  const index = cart.findIndex(p => p.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  cartTotal.textContent = total.toLocaleString();
}

// Szűrés név és ár alapján
document.getElementById("searchName").addEventListener("input", filterProducts);
document.getElementById("filterPrice").addEventListener("change", filterProducts);

function filterProducts() {
  const nameFilter = document.getElementById("searchName").value.toLowerCase();
  const priceFilter = document.getElementById("filterPrice").value;

  let filtered = products.filter(p => p.name.toLowerCase().includes(nameFilter));

  if (priceFilter === "low") filtered = filtered.filter(p => p.price < 10000);
  else if (priceFilter === "mid") filtered = filtered.filter(p => p.price >= 10000 && p.price <= 30000);
  else if (priceFilter === "high") filtered = filtered.filter(p => p.price > 30000);

  displayProducts(filtered);
}

displayProducts(products);
