// ================= DATA (Correct images per category) =================
const cart = {};

const productData = {
  // ---- TECH: realistic India MRP (₹) ----
  tech: [
    { name: "iPhone 15 Pro 256GB",      img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80", basePrice: 134900 },
    { name: "MacBook Air M2 8GB",       img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&q=80", basePrice: 114900 },
    { name: "Sony WH-1000XM5",          img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80", basePrice: 29990  },
    { name: "Samsung Galaxy S24+",      img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80", basePrice: 79999  },
    { name: "iPad Air 11\" M2",         img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80", basePrice: 69900  },
    { name: "Dell Inspiron 15",         img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80", basePrice: 62990  },
    { name: "AirPods Pro 2nd Gen",      img: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&q=80", basePrice: 24900  },
    { name: "boAt Wave Flex Watch",     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", basePrice: 1999   },
    { name: "Cosmic Byte KB Wired",     img: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80", basePrice: 1599   },
    { name: "Logitech G502 X Mouse",    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", basePrice: 5995   }
  ],

  // ---- FOOD: 20 items, Indian delivery pricing (₹) ----
  food: [
    { name: "Cheese Burst Burger",      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", basePrice: 199 },
    { name: "Margherita Pizza (Lg)",    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&q=80", basePrice: 349 },
    { name: "Sushi Platter (12pcs)",    img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80", basePrice: 799 },
    { name: "Butter Chicken + Naan",    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80", basePrice: 379 },
    { name: "Paneer Tikka Masala",      img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80", basePrice: 299 },
    { name: "Veg Spring Rolls (6pcs)",  img: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400&q=80", basePrice: 159 },
    { name: "Masala Dosa",              img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80", basePrice: 129 },
    { name: "Chicken Biryani (Full)",   img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", basePrice: 349 },
    { name: "Veg Fried Rice",           img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80", basePrice: 179 },
    { name: "Dark Chocolate Cake",      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80", basePrice: 449 },
    { name: "Mango Lassi (500ml)",      img: "https://images.unsplash.com/photo-1571006682671-5b28de966c97?w=400&q=80", basePrice: 89  },
    { name: "Pav Bhaji (2 Pav)",        img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80", basePrice: 149 },
    { name: "Chole Bhature (2pcs)",     img: "https://images.unsplash.com/photo-1626132647523-68c0d2a2e1c3?w=400&q=80", basePrice: 169 },
    { name: "Samosa Chaat Plate",       img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", basePrice: 99  },
    { name: "Hakka Noodles",            img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80", basePrice: 189 },
    { name: "Gulab Jamun (6pcs)",       img: "https://images.unsplash.com/photo-1666274857070-6ca4e6a8fd76?w=400&q=80", basePrice: 99  },
    { name: "Cold Coffee Frappe",       img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", basePrice: 149 },
    { name: "Tandoori Chicken Half",    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80", basePrice: 399 },
    { name: "Aloo Paratha (2pcs)",      img: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400&q=80", basePrice: 119 },
    { name: "Fresh Fruit Bowl",         img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=80", basePrice: 179 }
  ],

  // ---- MAKEUP: 20 items, India-realistic ₹ prices ----
  makeup: [
    { name: "Lakme Lipstick (Matte)",   img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80", basePrice: 299  },
    { name: "Maybelline Fit Me Foundation", img: "https://images.unsplash.com/photo-1631452180775-6e5e9a3f6531?w=400&q=80", basePrice: 499  },
    { name: "NYX Eyeshadow Palette",    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80", basePrice: 1299 },
    { name: "L'Oréal Volume Mascara",   img: "https://images.unsplash.com/photo-1631214240010-a2a99f6db7a0?w=400&q=80", basePrice: 699  },
    { name: "Minimalist 10% Niacinamide Serum", img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&q=80", basePrice: 599  },
    { name: "SUGAR Blush & Bronzer Duo", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80", basePrice: 799  },
    { name: "Colorbar Nail Lacquer Set", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80", basePrice: 349  },
    { name: "Dot & Key Watermelon Moisturizer", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80", basePrice: 699  },
    { name: "Stay Quirky Setting Spray", img: "https://images.unsplash.com/photo-1643185539104-3622eb1b1f54?w=400&q=80", basePrice: 399  },
    { name: "Swiss Beauty Highlighter", img: "https://images.unsplash.com/photo-1599733589046-833d67e38da3?w=400&q=80", basePrice: 499  },
    { name: "Maybelline Kajal Intense", img: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&q=80", basePrice: 199  },
    { name: "Plum E-Luminence Face Wash", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80", basePrice: 349  },
    { name: "Mamaearth Vitamin C Cream", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80", basePrice: 499  },
    { name: "Faces Canada Concealer",   img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80", basePrice: 599  },
    { name: "NY Bae Contour Palette",   img: "https://images.unsplash.com/photo-1619451683688-aa1403f4ceef?w=400&q=80", basePrice: 699  },
    { name: "WOW Aloe Vera Gel (200ml)", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80", basePrice: 299  },
    { name: "Pilgrim Sunscreen SPF 50", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80", basePrice: 449  },
    { name: "Nykaa Glossy Lip Gloss",   img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&q=80", basePrice: 249  },
    { name: "Forest Essentials Rose Toner", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80", basePrice: 1295 },
    { name: "Biotique Bio Papaya Scrub", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80", basePrice: 199  }
  ],

  // ---- DAILY: 20 items, supermarket pricing in ₹ ----
  daily: [
    { name: "Head & Shoulders Shampoo 340ml",  img: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=400&q=80", basePrice: 299  },
    { name: "Vaseline Body Lotion 400ml",       img: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400&q=80", basePrice: 249  },
    { name: "Oral-B Pro-Flex Toothbrush",       img: "https://images.unsplash.com/photo-1559591937-bdf0ef5d5596?w=400&q=80", basePrice: 199  },
    { name: "Surf Excel Matic 2kg",             img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80", basePrice: 449  },
    { name: "Dettol Hand Sanitizer 500ml",      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80", basePrice: 179  },
    { name: "Vim Dish Wash Bar (4-pack)",        img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80", basePrice: 99   },
    { name: "Himalaya Purifying Neem Face Wash", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", basePrice: 149  },
    { name: "Dove Men Care Deo 150ml",          img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=400&q=80", basePrice: 249  },
    { name: "Tissue Roll Pack (6-roll)",        img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80", basePrice: 199  },
    { name: "Colin Glass Cleaner 500ml",        img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80", basePrice: 129  },
    { name: "Tata Salt 1kg",                    img: "https://images.unsplash.com/photo-1581574919402-5b119de98fs?w=400&q=80", basePrice: 28   },
    { name: "Aashirvaad Atta 5kg",              img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80", basePrice: 289  },
    { name: "Amul Butter 500g",                 img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80", basePrice: 275  },
    { name: "Fortune Sunflower Oil 1L",         img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", basePrice: 175  },
    { name: "Lifebuoy Total Soap (4-pack)",     img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80", basePrice: 149  },
    { name: "Colgate MaxFresh Toothpaste 150g", img: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=400&q=80", basePrice: 99   },
    { name: "Reynolds Pens Box of 10",          img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80", basePrice: 99   },
    { name: "Classmate Notebook Set (5-pack)",  img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80", basePrice: 149  },
    { name: "Good Knight Mosquito Liquid",      img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80", basePrice: 89   },
    { name: "Scotch-Brite Scrub Pad (3-pack)",  img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80", basePrice: 79   }
  ]
};

// ================= GENERATE PRODUCTS =================
const products = [];
const categories = ["tech", "food", "makeup", "daily"];

// ---- Seller pool ----
const SELLERS = [
  { name: "Ravi Kumar",    shop: "Ravi General Store",      phone: "9876543210", city: "Delhi",   avatar: "RK", rating: "4.8", sales: "1.2k" },
  { name: "Priya Sharma",  shop: "Priya's Kitchen & Co.",   phone: "9123456780", city: "Mumbai",  avatar: "PS", rating: "4.9", sales: "3.4k" },
  { name: "Amit Verma",    shop: "Amit Electronics Hub",    phone: "9988776655", city: "Bangalore",avatar: "AV", rating: "4.7", sales: "890"  },
  { name: "Sunita Gupta",  shop: "SG Beauty Mart",          phone: "9011223344", city: "Pune",    avatar: "SG", rating: "4.6", sales: "2.1k" },
  { name: "Deepak Joshi",  shop: "Deepak Daily Needs",      phone: "8877665544", city: "Hyderabad",avatar:"DJ", rating: "4.8", sales: "567"  },
  { name: "Meena Pillai",  shop: "Meena Fresh Foods",       phone: "9345612780", city: "Chennai", avatar: "MP", rating: "4.9", sales: "4.8k" },
  { name: "Rahul Nair",    shop: "Rahul Tech World",        phone: "9700112233", city: "Kochi",   avatar: "RN", rating: "4.7", sales: "1.8k" },
  { name: "Anita Singh",   shop: "Anita Cosmetics Pvt Ltd", phone: "9654321098", city: "Jaipur",  avatar: "AS", rating: "4.5", sales: "3.0k" },
];

categories.forEach(cat => {
  productData[cat].forEach((item, idx) => {
    const discount = Math.floor(Math.random() * 25) + 8;
    const price = item.basePrice;
    const mrp = Math.round(price * (1 + discount / 100));
    const seller = SELLERS[Math.floor(Math.random() * SELLERS.length)];

    products.push({
      id: `${cat}-${idx}`,
      name: item.name,
      category: cat,
      price,
      mrp,
      discount,
      rating: (Math.random() * 0.8 + 4.1).toFixed(1),
      reviews: Math.floor(Math.random() * 2000) + 200,
      stock: Math.floor(Math.random() * 10) + 3,
      img: item.img,
      seller
    });
  });
});

// ================= DISPLAY PRODUCTS =================
function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const count = document.getElementById("productCount");
  count.textContent = `${list.length} items`;

  list.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.animationDelay = `${i * 0.04}s`;

    const inCart = cart[p.id] ? cart[p.id].qty : 0;
    const catLabels = { tech: "Technology", food: "Food & Drink", makeup: "Beauty", daily: "Daily Essentials" };
    const currencySymbol = p.category === "food" || p.price < 100 ? "₹" : "₹";

    div.innerHTML = `
      <div class="card-img-wrap">
        <span class="discount-badge">-${p.discount}%</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80'">
        <button class="wishlist-btn" onclick="toggleWishlist(this)" title="Wishlist">♡</button>
      </div>
      <div class="card-body">
        <div class="card-cat">${catLabels[p.category]}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-rating">
          <span class="rating-star">★</span>
          <span>${p.rating}</span>
          <span>(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="price-row">
          <span class="price-now">${currencySymbol}${p.price}</span>
          <span class="price-mrp">${currencySymbol}${p.mrp}</span>
          <span class="price-save">Save ${p.discount}%</span>
        </div>
        <div class="stock-label ${p.stock < 5 ? 'low' : 'ok'}">
          ${p.stock < 5 ? `⚠️ Only ${p.stock} left` : '✓ In Stock'}
        </div>
      </div>
      <div class="card-footer">
        <div class="add-row">
          <div class="qty-box ${inCart > 0 ? 'visible' : ''}" id="qty-${p.id}">
            <button class="qty-btn" onclick="decreaseQty('${p.id}')">−</button>
            <span class="qty-count" id="qcount-${p.id}">${inCart}</span>
            <button class="qty-btn" onclick="increaseQty('${p.id}')">+</button>
          </div>
          <button class="add-btn ${inCart > 0 ? 'active' : ''}" id="addbtn-${p.id}" onclick="addToCart('${p.id}')">
            ${inCart > 0 ? '✓ Added' : '+ Add'}
          </button>
        </div>
        <button class="contact-seller-btn" onclick="openSellerModal('${p.id}')">
          📞 Contact Seller
        </button>
      </div>
    `;

    container.appendChild(div);
  });
}

// ================= WISHLIST =================
function toggleWishlist(btn) {
  btn.classList.toggle("liked");
  btn.textContent = btn.classList.contains("liked") ? "♥" : "♡";
}

// ================= FILTER =================
let currentList = [...products];

function filterProducts(cat, btn) {
  // Update active button
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const titles = { all: "All Products", tech: "Technology", food: "Food & Drinks", makeup: "Beauty & Makeup", daily: "Daily Essentials" };
  document.getElementById("sectionTitle").textContent = titles[cat] || "All Products";

  currentList = cat === "all" ? [...products] : products.filter(p => p.category === cat);
  displayProducts(currentList);
}

// ================= SEARCH =================
function setupSearch() {
  document.getElementById("search").addEventListener("input", e => {
    const val = e.target.value.toLowerCase();
    const filtered = (val ? currentList.filter(p => p.name.toLowerCase().includes(val)) : currentList);
    displayProducts(filtered);
  });
}

// ================= CART LOGIC =================
function addToCart(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { product: item, qty: 1 };
  }

  updateCardQty(id);
  renderCart();

  const btn = document.getElementById(`addbtn-${id}`);
  if (btn) {
    btn.textContent = "✓ Added";
    btn.classList.add("added");
    setTimeout(() => {
      btn.textContent = "✓ Added";
    }, 800);
  }
}

function increaseQty(id) {
  if (!cart[id]) { addToCart(id); return; }
  cart[id].qty++;
  updateCardQty(id);
  renderCart();
}

function decreaseQty(id) {
  if (!cart[id]) return;
  if (cart[id].qty > 1) {
    cart[id].qty--;
  } else {
    delete cart[id];
  }
  updateCardQty(id);
  renderCart();
}

function removeItem(id) {
  delete cart[id];
  updateCardQty(id);
  renderCart();
}

function updateCardQty(id) {
  const qtyBox = document.getElementById(`qty-${id}`);
  const qcount = document.getElementById(`qcount-${id}`);
  const addBtn = document.getElementById(`addbtn-${id}`);

  if (!qtyBox) return;

  const qty = cart[id] ? cart[id].qty : 0;

  if (qty > 0) {
    qtyBox.classList.add("visible");
    if (qcount) qcount.textContent = qty;
    if (addBtn) { addBtn.textContent = "✓ Added"; addBtn.classList.add("active"); }
  } else {
    qtyBox.classList.remove("visible");
    if (addBtn) { addBtn.textContent = "+ Add"; addBtn.classList.remove("active", "added"); }
  }
}

// ================= RENDER CART =================
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  const savingsRow = document.getElementById("savingsRow");
  const items = Object.values(cart);

  cartItems.innerHTML = "";

  if (items.length === 0) {
    cartEmpty.style.display = "block";
    savingsRow.style.display = "none";
    setTotal(0, 0);
    updateCartCount(0);
    updateFloating();
    return;
  }

  cartEmpty.style.display = "none";

  let total = 0, totalSaved = 0;

  items.forEach(({ product: p, qty }) => {
    total += p.price * qty;
    totalSaved += (p.mrp - p.price) * qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img class="cart-item-img" src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=80&q=80'">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">₹${p.price} × ${qty} = ₹${p.price * qty}</div>
      </div>
      <div class="cart-item-controls">
        <button class="c-qty-btn" onclick="decreaseQty('${p.id}')">−</button>
        <span class="c-qty-val">${qty}</span>
        <button class="c-qty-btn" onclick="increaseQty('${p.id}')">+</button>
      </div>
    `;
    cartItems.appendChild(div);
  });

  setTotal(total, totalSaved);
  updateCartCount(items.reduce((s, i) => s + i.qty, 0));
  updateFloating(total, items.reduce((s, i) => s + i.qty, 0));

  if (totalSaved > 0) {
    savingsRow.style.display = "flex";
    document.getElementById("savingsAmt").textContent = `₹${totalSaved}`;
  }

  document.getElementById("payAmount").textContent = total;
}

function setTotal(total, saved) {
  const el = document.getElementById("total");
  el.textContent = total;
  el.style.transition = "transform 0.15s";
  el.style.transform = "scale(1.2)";
  setTimeout(() => el.style.transform = "scale(1)", 150);
}

function updateCartCount(count) {
  document.getElementById("cartCount").textContent = count;
}

function updateFloating(total = 0, count = 0) {
  const fb = document.getElementById("floatingCart");
  if (count > 0) {
    fb.style.display = "block";
    document.getElementById("floatingTotal").textContent = `₹${total}`;
    document.getElementById("floatingCount").textContent = `${count} item${count > 1 ? 's' : ''}`;
  } else {
    fb.style.display = "none";
  }
}

// ================= PAYMENT MODAL =================
function openModal() {
  const items = Object.values(cart);
  if (items.length === 0) {
    shakeCart();
    return;
  }

  // Populate order summary
  const summary = document.getElementById("orderSummary");
  let total = 0;
  summary.innerHTML = "";

  items.forEach(({ product: p, qty }) => {
    const lineTotal = p.price * qty;
    total += lineTotal;
    summary.innerHTML += `
      <div class="order-summary-item">
        <span>${p.name} × ${qty}</span>
        <span>₹${lineTotal}</span>
      </div>
    `;
  });

  summary.innerHTML += `
    <div class="order-summary-total">
      <span>Total</span>
      <span>₹${total}</span>
    </div>
  `;

  document.getElementById("payAmount").textContent = total;
  document.getElementById("paymentModal").classList.add("open");
}

function closeModal() {
  document.getElementById("paymentModal").classList.remove("open");
}

function shakeCart() {
  const btn = document.getElementById("checkoutBtn");
  btn.style.animation = "shake 0.4s ease";
  setTimeout(() => btn.style.animation = "", 400);
}

// ================= PAYMENT METHODS =================
let selectedMethod = "card";

function switchMethod(method, btn) {
  selectedMethod = method;
  document.querySelectorAll(".pay-method").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("methodCard").style.display = method === "card" ? "block" : "none";
  document.getElementById("methodUpi").style.display = method === "upi" ? "block" : "none";
  document.getElementById("methodCod").style.display = method === "cod" ? "block" : "none";
}

function selectUpi(btn) {
  document.querySelectorAll(".upi-app").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// ================= CARD INPUT FORMATTING =================
function formatCard(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 16);
  input.value = val.replace(/(.{4})/g, "$1 ").trim();

  const network = document.getElementById("cardNetwork");
  if (val.startsWith("4")) network.textContent = "💳 Visa";
  else if (val.startsWith("5")) network.textContent = "💳 MC";
  else if (val.startsWith("37")) network.textContent = "💳 Amex";
  else network.textContent = "💳";
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 4);
  if (val.length > 2) val = val.substring(0, 2) + "/" + val.substring(2);
  input.value = val;
}

// ================= PROCESS PAYMENT =================
function processPayment() {
  if (selectedMethod === "card") {
    const name = document.getElementById("cardName").value.trim();
    const card = document.getElementById("cardNumber").value.replace(/\s/g, "");
    const cvv = document.getElementById("cvv").value.trim();
    const expiry = document.getElementById("expiry").value.trim();

    if (!name || !card || !cvv || !expiry) {
      highlightEmpty();
      return;
    }
    if (card.length < 16) { alert("Please enter a valid 16-digit card number."); return; }
    if (cvv.length < 3) { alert("Please enter a valid CVV."); return; }
  } else if (selectedMethod === "upi") {
    const upiId = document.getElementById("upiId").value.trim();
    const selectedApp = document.querySelector(".upi-app.active");
    if (!upiId && !selectedApp) { alert("Please select a UPI app or enter your UPI ID."); return; }
  }

  const payBtn = document.getElementById("payBtn");
  payBtn.classList.add("loading");
  payBtn.textContent = "Processing…";

  // Simulate payment
  setTimeout(() => {
    payBtn.classList.remove("loading");
    closeModal();
    showSuccess();
    clearCart();
  }, 2000);
}

function highlightEmpty() {
  ["cardName", "cardNumber", "cvv", "expiry"].forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderColor = "red";
      setTimeout(() => el.style.borderColor = "", 2000);
    }
  });
}

function clearCart() {
  Object.keys(cart).forEach(id => {
    delete cart[id];
    updateCardQty(id);
  });
  renderCart();

  // Reset pay button
  const payBtn = document.getElementById("payBtn");
  payBtn.innerHTML = `<span id="payBtnText">Pay ₹<span id="payAmount">0</span></span>`;
}

// ================= SUCCESS =================
let currentOrderId = "";
let currentOrderItems = [];

function showSuccess() {
  currentOrderId = Math.floor(Math.random() * 900000 + 100000);
  document.getElementById("orderId").textContent = currentOrderId;
  document.getElementById("successOverlay").classList.add("open");

  // Save a snapshot of ordered items
  currentOrderItems = Object.values(cart).map(({ product: p, qty }) => ({ product: p, qty }));
}

function closeSuccess() {
  document.getElementById("successOverlay").classList.remove("open");
}

// ================= ORDER TRACKING =================
const DELIVERY_HOURS = 48; // 2 days

const STEPS = [
  { icon: "🛒", title: "Order Placed",         sub: "We received your order",                  hoursFromNow: 0   },
  { icon: "✅", title: "Order Confirmed",       sub: "Payment verified successfully",           hoursFromNow: 0.2 },
  { icon: "📦", title: "Packed & Ready",        sub: "Your items are packed at warehouse",      hoursFromNow: 4   },
  { icon: "🚚", title: "Out for Shipment",      sub: "Your order has left the warehouse",       hoursFromNow: 12  },
  { icon: "🛣️",  title: "In Transit",           sub: "On the way to your city",                 hoursFromNow: 24  },
  { icon: "📬", title: "Out for Delivery",      sub: "Delivery partner is heading to you",      hoursFromNow: 46  },
  { icon: "🎉", title: "Delivered",             sub: "Enjoy your order!",                       hoursFromNow: DELIVERY_HOURS }
];

const AGENTS = [
  { name: "Rahul K.", seed: "Rahul" },
  { name: "Priya S.", seed: "Priya" },
  { name: "Amit D.", seed: "Amit" },
  { name: "Neha R.", seed: "Neha" }
];

function openTracking() {
  const page = document.getElementById("trackingPage");
  page.style.display = "block";

  document.getElementById("trackOrderId").textContent = currentOrderId;

  // ETA
  const orderTime = new Date();
  const deliveryTime = new Date(orderTime.getTime() + DELIVERY_HOURS * 60 * 60 * 1000);
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  document.getElementById("etaDate").textContent = deliveryTime.toLocaleDateString('en-IN', options);

  // Time left string
  document.getElementById("etaTimeLeft").textContent = `⏱ Arriving in ~${DELIVERY_HOURS} hours (2 days)`;

  // Progress — simulate ~8% done (just ordered)
  updateProgress(8);

  // Build timeline
  buildTimeline(orderTime);

  // Fill truck position
  document.getElementById("mapTruck").style.left = "8%";

  // Random agent
  const agent = AGENTS[Math.floor(Math.random() * AGENTS.length)];
  document.getElementById("agentName").textContent = agent.name;
  document.querySelector(".agent-avatar").src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${agent.seed}`;

  // Items
  buildTrackItems();

  // Animate progress slowly
  animateProgress();
}

function closeTracking() {
  document.getElementById("trackingPage").style.display = "none";
}

function updateProgress(pct) {
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("mapTruck").style.left = Math.max(2, pct - 6) + "%";

  // Update eta icon based on progress
  const icons = ["📋","✅","📦","🚚","🛣️","📬","🎉"];
  const idx = Math.min(Math.floor(pct / 17), icons.length - 1);
  document.getElementById("etaIcon").textContent = icons[idx];
}

function buildTimeline(orderTime) {
  const container = document.getElementById("timeline");
  container.innerHTML = "";

  // First 2 steps are "done" (just placed), step 2 is "active", rest pending
  STEPS.forEach((step, i) => {
    const stepTime = new Date(orderTime.getTime() + step.hoursFromNow * 60 * 60 * 1000);
    const timeStr = step.hoursFromNow === 0
      ? "Just now"
      : step.hoursFromNow < 1
        ? "In a few minutes"
        : formatStepTime(stepTime);

    let state = "pending";
    if (i < 2) state = "done";
    if (i === 2) state = "active";

    const div = document.createElement("div");
    div.className = `tl-step ${state}`;
    div.id = `step-${i}`;
    div.innerHTML = `
      <div class="tl-icon-wrap">${step.icon}</div>
      <div class="tl-body">
        <div class="tl-title">${step.title}</div>
        <div class="tl-sub">${step.sub}</div>
        <div class="tl-time">${timeStr}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function formatStepTime(date) {
  const opts = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: true };
  return date.toLocaleString('en-IN', opts);
}

function buildTrackItems() {
  const list = document.getElementById("trackItemsList");
  list.innerHTML = "";

  if (!currentOrderItems.length) {
    list.innerHTML = "<p style='color:var(--muted);font-size:13px'>No items</p>";
    return;
  }

  currentOrderItems.forEach(({ product: p, qty }) => {
    list.innerHTML += `
      <div class="track-item">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=80&q=80'">
        <div class="track-item-name">${p.name}</div>
        <div class="track-item-qty">×${qty}</div>
        <div class="track-item-price">₹${p.price * qty}</div>
      </div>
    `;
  });
}

// Simulate progressive updates every few seconds (demo)
let progressInterval = null;
function animateProgress() {
  clearInterval(progressInterval);
  let pct = 8;
  const stepTargets = [8, 14, 30, 50, 70, 90, 100];
  let stepIdx = 2; // Start from step 2 active

  progressInterval = setInterval(() => {
    if (pct >= 100) { clearInterval(progressInterval); return; }

    pct = Math.min(pct + 1, 100);
    updateProgress(pct);

    // Advance timeline step
    const nextTarget = stepTargets[stepIdx];
    if (nextTarget && pct >= nextTarget) {
      const prevActive = document.querySelector(".tl-step.active");
      if (prevActive) {
        prevActive.classList.remove("active");
        prevActive.classList.add("done");
      }
      stepIdx++;
      const nextStep = document.getElementById(`step-${stepIdx}`);
      if (nextStep && stepIdx < STEPS.length - 1) {
        nextStep.classList.remove("pending");
        nextStep.classList.add("active");
      } else if (nextStep) {
        nextStep.classList.remove("pending");
        nextStep.classList.add("done");
      }

      // Update time-left label
      const remaining = Math.round(DELIVERY_HOURS * (1 - pct / 100));
      if (remaining > 0) {
        document.getElementById("etaTimeLeft").textContent = `⏱ Arriving in ~${remaining} hours`;
      } else {
        document.getElementById("etaTimeLeft").textContent = "✅ Delivered!";
      }
    }
  }, 300); // ~30 seconds to full demo — fast so you can see it
}

function callAgent() { alert("📞 Calling your delivery partner Rahul K…\n(This is a demo — no real call is placed!)"); }
function chatAgent() { alert("💬 Opening chat with Rahul K…\n(This is a demo!)"); }

// ================= PROFILE =================
let userProfile = {};

function openProfile() {
  document.getElementById("profileDrawer").classList.add("open");
  document.getElementById("profileOverlay").classList.add("open");
  // Pre-fill saved data
  if (userProfile.name)    document.getElementById("pName").value    = userProfile.name;
  if (userProfile.phone)   document.getElementById("pPhone").value   = userProfile.phone;
  if (userProfile.email)   document.getElementById("pEmail").value   = userProfile.email;
  if (userProfile.address) document.getElementById("pAddress").value = userProfile.address;
  if (userProfile.city)    document.getElementById("pCity").value    = userProfile.city;
  if (userProfile.pin)     document.getElementById("pPin").value     = userProfile.pin;
}

function closeProfile() {
  document.getElementById("profileDrawer").classList.remove("open");
  document.getElementById("profileOverlay").classList.remove("open");
}

function updateProfilePreview() {
  const name = document.getElementById("pName").value.trim();
  if (name) {
    document.getElementById("profileBtnName").textContent = name.split(" ")[0];
    document.getElementById("profileDrawerName").textContent = name;
    document.getElementById("profileBigAvatar").textContent = name[0].toUpperCase();
    document.getElementById("profileAvatar").textContent = name[0].toUpperCase();
  } else {
    document.getElementById("profileBtnName").textContent = "Sign In";
    document.getElementById("profileBigAvatar").textContent = "👤";
    document.getElementById("profileAvatar").textContent = "👤";
  }
}

function saveProfile() {
  userProfile = {
    name:    document.getElementById("pName").value.trim(),
    phone:   document.getElementById("pPhone").value.trim(),
    email:   document.getElementById("pEmail").value.trim(),
    address: document.getElementById("pAddress").value.trim(),
    city:    document.getElementById("pCity").value.trim(),
    pin:     document.getElementById("pPin").value.trim(),
  };

  updateProfilePreview();

  // Also auto-fill checkout card name if empty
  const cardNameEl = document.getElementById("cardName");
  if (cardNameEl && !cardNameEl.value && userProfile.name) cardNameEl.value = userProfile.name;

  const msg = document.getElementById("profileSavedMsg");
  msg.textContent = "✅ Profile saved!";
  msg.style.color = "var(--green)";
  setTimeout(() => msg.textContent = "", 2500);
}

// ================= SELLER MODAL =================
let currentSellerProduct = null;

function openSellerModal(productId) {
  const p = products.find(pr => pr.id === productId);
  if (!p) return;
  currentSellerProduct = p;
  const s = p.seller;

  document.getElementById("sellerModalTitle").textContent = s.shop;
  document.getElementById("sellerModalProduct").textContent = `Re: ${p.name}`;

  // Seller profile row
  document.getElementById("sellerProfileRow").innerHTML = `
    <div class="seller-avatar-circle">${s.avatar}</div>
    <div class="seller-info-block">
      <div class="seller-info-name">${s.name}</div>
      <div class="seller-info-shop">${s.shop} · ${s.city}</div>
      <div class="seller-info-stats">⭐ ${s.rating} &nbsp;·&nbsp; 🛍️ ${s.sales} sales</div>
    </div>
    <div class="seller-verified">✅ Verified</div>
  `;

  const phone = s.phone;
  const displayPhone = `+91 ${phone.slice(0,5)} ${phone.slice(5)}`;
  const waMsg = encodeURIComponent(`Hi ${s.name}! I'm interested in "${p.name}" (₹${p.price}) on QuickKart. Can you help?`);
  const smsMsg = encodeURIComponent(`Hi, I'm interested in ${p.name} at ₹${p.price} on QuickKart.`);

  document.getElementById("sellerCallNum").textContent = displayPhone;
  document.getElementById("sellerCallBtn").href = `tel:+91${phone}`;
  document.getElementById("sellerWABtn").href  = `https://wa.me/91${phone}?text=${waMsg}`;
  document.getElementById("sellerSMSBtn").href  = `sms:+91${phone}?body=${smsMsg}`;

  // Pre-fill custom message with user's name if profile saved
  const userName = userProfile.name ? `Hi ${s.name}, I'm ${userProfile.name}.` : `Hi ${s.name},`;
  document.getElementById("customMsg").value = `${userName} I'm interested in "${p.name}" listed at ₹${p.price}. Could you share more details?`;

  document.getElementById("sellerModal").classList.add("open");
}

function closeSellerModal() {
  document.getElementById("sellerModal").classList.remove("open");
}

function sendCustomMsg() {
  const msg = document.getElementById("customMsg").value.trim();
  if (!msg) { alert("Please type a message first."); return; }
  const s = currentSellerProduct?.seller;
  if (!s) return;

  const encoded = encodeURIComponent(msg);
  // Open WhatsApp with the custom message
  window.open(`https://wa.me/91${s.phone}?text=${encoded}`, "_blank");
}

// ================= INIT =================
window.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  setupSearch();

  document.getElementById("checkoutBtn").addEventListener("click", openModal);

  document.getElementById("cartToggle").addEventListener("click", () => {
    document.getElementById("cartSidebar").classList.toggle("open");
  });

  document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartSidebar").classList.remove("open");
  });

  document.getElementById("profileToggle").addEventListener("click", openProfile);

  document.getElementById("paymentModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("paymentModal")) closeModal();
  });

  document.getElementById("sellerModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("sellerModal")) closeSellerModal();
  });

  const style = document.createElement("style");
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
});