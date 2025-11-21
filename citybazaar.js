// Product data
const products = [
  // Electronics (30+ products)
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 57900,
    description:
      "Latest flagship smartphone with titanium design and advanced camera system. Features A17 Bionic chip, ProMotion display, and a versatile triple-camera setup.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "MacBook Air M2",
    price: 107900,
    description:
      "Ultra-thin laptop with M2 chip for professional work and creativity. Boasts a Liquid Retina display, up to 18 hours battery life, and a fanless design for silent operation.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    price: 24990,
    description:
      "Industry-leading noise canceling wireless headphones. Exceptional sound quality, comfortable design, and smart features for an immersive listening experience.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Apple Watch Series 9",
    price: 41900,
    description:
      "Advanced health monitoring with GPS and cellular connectivity. Features a brighter display, new gestures, and enhanced fitness tracking capabilities.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Samsung Galaxy S24 Ultra",
    price: 129999,
    description:
      "Premium Android smartphone with S Pen and professional camera. Features a stunning Dynamic AMOLED 2X display, powerful Snapdragon processor, and advanced AI camera features.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Dell XPS 13",
    price: 89900,
    description:
      "Ultra-portable laptop with InfinityEdge display and premium build. Compact design, powerful performance, and long battery life for productivity on the go.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "iPad Pro 12.9",
    price: 112900,
    description:
      "Professional tablet with M2 chip and Liquid Retina XDR display. Unmatched performance for creative tasks, gaming, and productivity. Supports Apple Pencil and Magic Keyboard.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Bluetooth Speaker JBL",
    price: 12999,
    description:
      "Portable waterproof speaker with powerful bass and long battery life. Ideal for outdoor adventures, parties, and everyday listening. Connects wirelessly via Bluetooth.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Gaming Headset HyperX",
    price: 7999,
    description:
      "Immersive gaming headset with 7.1 surround sound and noise-cancelling microphone. Comfortable earcups and durable design for long gaming sessions.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=400&q=80",
  },

  // Clothing (30+ products)
  {
    id: 36,
    title: "Premium Cotton T-Shirt",
    price: 1299,
    description:
      "100% organic cotton t-shirt with comfortable fit and modern design. Breathable fabric, perfect for everyday wear. Available in multiple colors and sizes.",
    category: "clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
  },
  {
    id: 37,
    title: "Levi's 501 Jeans",
    price: 3999,
    description:
      "Classic straight-fit jeans with authentic vintage styling. Durable denim, timeless design, and comfortable for all-day wear. A wardrobe essential.",
    category: "clothing",
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&h=300&fit=crop",
  },
  {
    id: 38,
    title: "Nike Sportswear Jacket",
    price: 6499,
    description:
      "Water-resistant windbreaker perfect for outdoor activities. Lightweight and breathable, with a stylish design for both performance and casual wear.",
    category: "clothing",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
  },
  {
    id: 39,
    title: "Casual Summer Dress",
    price: 2799,
    description:
      "Flowy summer dress perfect for casual outings and vacations. Lightweight fabric, comfortable fit, and vibrant patterns for a stylish look.",
    category: "clothing",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
  },
  {
    id: 40,
    title: "Adidas Ultraboost 22",
    price: 16999,
    description:
      "Premium running shoes with responsive cushioning and modern design. Engineered for comfort and performance, providing excellent energy return.",
    category: "clothing",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
  },
  {
    id: 41,
    title: "Formal Business Shirt",
    price: 1899,
    description:
      "Premium cotton formal shirt perfect for office and business meetings. Tailored fit, wrinkle-resistant fabric, and classic design for a sharp professional look.",
    category: "clothing",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop",
  },
  {
    id: 43,
    title: "Designer Handbag",
    price: 7999,
    description:
      "Elegant designer handbag made from premium faux leather. Spacious interior with multiple compartments, perfect for daily use or special occasions.",
    category: "clothing",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=300&fit=crop",
  },
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Initialize the store
function initStore() {
  loadProducts();
  updateCartCount();
  setupSearch();
}

// Load and display products
function loadProducts(productsToShow = products) {
  const productsGrid = document.getElementById("productsGrid");
  productsGrid.innerHTML = "";

  productsToShow.forEach((product) => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create product card element
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  // Add an onclick event to show product specifications
  card.onclick = () => showProductSpec(product.id);
  card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${
    product.title
  }" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">₹${product.price.toLocaleString(
                      "en-IN"
                    )}</p>
                    <p class="product-description">${product.description.substring(
                      0,
                      70
                    )}...</p>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${
                      product.id
                    });">
                        Add to Cart
                    </button>
                </div>
            `;
  return card;
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  console.log("Adding to cart:", product); // 👀 debug

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartCount();
  showSuccessAnimation();
}

// Show success animation
function showSuccessAnimation() {
  const animation = document.createElement("div");
  animation.className = "success-animation";
  animation.innerHTML = `
                <div class="success-icon">✅</div>
                <p>Added to cart!</p>
            `;
  document.body.appendChild(animation);

  setTimeout(() => {
    document.body.removeChild(animation);
  }, 1500);
}

// Update cart count
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
}

// Toggle cart modal
function toggleCart() {
  const token = localStorage.getItem("token");
  const cartModal = document.getElementById("cartModal");

  // If not logged in
  if (!token) {
    alert("Please log in first to view your cart!");
    toggleLoginModal(); // optional
    return;
  }

  // Load latest cart data from localStorage
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Load items inside modal
  loadCartItems();

  // Toggle modal visibility
  cartModal.classList.toggle("show");
}
// Load cart items
function loadCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");

  // Get cart from localStorage (in case it's updated)
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart || cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
      </div>
    `;
    return;
  }

  const cartItemsHTML = cart
    .map((item) => {
      const title = item.title || "Unknown Product";
      const price = item.price || 0;
      const image = item.image || "placeholder.jpg"; // fallback if missing
      const description =
        item.description?.substring(0, 60) || "No description available";

      return `
        <div class="cart-item">
          <div class="cart-item-left">
            <img src="${image}" alt="${title}" class="cart-item-img">
          </div>
          <div class="cart-item-right">
            <div class="cart-item-title">${title}</div>
            <p class="cart-item-desc">${description}</p>
            <div class="cart-item-price">₹${price.toLocaleString("en-IN")}</div>
            <div class="quantity-controls">
              <button class="qty-btn" onclick="updateQuantity(${
                item.id
              }, -1)">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${
                item.id
              }, 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart(${
                item.id
              })">Remove</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  cartItemsContainer.innerHTML = `
    <div class="cart-items-list">
      ${cartItemsHTML}
    </div>
    <div class="cart-total">
      <div class="total-amount">Total: ₹${total.toLocaleString("en-IN")}</div>
      <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
    </div>
  `;
}

// Update item quantity
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    saveCart(); // ✅ Save to localStorage
    updateCartCount();
    loadCartItems();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart(); // ✅ Save updated cart to localStorage
  updateCartCount();
  loadCartItems();
}

// Save cart to localStorage (helper)
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Checkout function
function checkout() {
  if (cart.length === 0) return;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  alert(
    `Thank you for your purchase!\nTotal: ₹${total.toLocaleString(
      "en-IN"
    )}\n\nThis is a demo checkout. In a real store, you would be redirected to payment processing.`
  );

  // Clear cart
  cart = [];
  updateCartCount();
  loadCartItems();
  toggleCart();
}

// Filter products by category
// Filter products by category
function filterProducts(category, event) {
  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  if (event && event.target) {
    event.target.classList.add("active");
  }

  const productsGrid = document.getElementById("productsGrid");
  const outMsg = document.getElementById("outOfStockMessage");

  // 📌 Only Clothing & All categories show products
  if (
    category === "clothing" ||
    category === "all" ||
    category === "electronics"
  ) {
    productsGrid.style.display = "grid";
    outMsg.style.display = "none";

    const filteredProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);

    loadProducts(filteredProducts);
  }

  // 📌 Everything else = OUT OF STOCK
  else {
    productsGrid.innerHTML = ""; // hide products
    productsGrid.style.display = "none";
    outMsg.style.display = "block";
  }
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    loadProducts(filteredProducts);
  });
}

// Product Specification Modal Functions
function toggleProductSpecModal() {
  const modal = document.getElementById("productSpecModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function showProductSpec(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const productSpecDetails = document.getElementById("productSpecDetails");
  productSpecDetails.innerHTML = `
                <img src="${product.image}" alt="${
    product.title
  }" class="product-spec-image">
                <h3 class="product-spec-title">${product.title}</h3>
                <p class="product-spec-price">₹${product.price.toLocaleString(
                  "en-IN"
                )}</p>
                <p class="product-spec-description">${product.description}</p>
                <p class="product-spec-category">Category: ${product.category
                  .replace("_", " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}</p>
                <div class="product-spec-actions">
                    <button class="add-to-cart" onclick="addToCart(${
                      product.id
                    }); toggleProductSpecModal();">
                        Add to Cart
                    </button>
                </div>
            `;
  toggleProductSpecModal();
}

// Login/Signup Modal Functions
function toggleLoginModal() {
  const modal = document.getElementById("loginModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function toggleSignupModal() {
  const modal = document.getElementById("signupModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Basic validation (for demo purposes)
  if (email && password) {
    alert(
      `Login attempt with Email: ${email}, Password: ${password}\n(This is a demo. In a real app, credentials would be verified.)`
    );
    toggleLoginModal(); // Close modal on successful (demo) login
    // In a real application, you'd send this data to a server
  } else {
    alert("Please enter both email and password.");
  }
}

function handleSignup(event) {
  event.preventDefault(); // Prevent default form submission
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById(
    "signupConfirmPassword"
  ).value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Basic validation (for demo purposes)
  if (username && email && password) {
    alert(
      `Signup attempt with Username: ${username}, Email: ${email}\n(This is a demo. In a real app, user would be registered.)`
    );
    toggleSignupModal(); // Close modal on successful (demo) signup
    // In a real application, you'd send this data to a server
  } else {
    alert("Please fill in all fields.");
  }
}

// Toggle Services Modal
function toggleServicesModal() {
  const modal = document.getElementById("servicesModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Toggle About Modal
function toggleAboutModal() {
  const modal = document.getElementById("aboutModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Toggle Contact Modal
function toggleContactModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Handle Contact Form Submission (Demo)
function handleContactForm(event) {
  event.preventDefault();
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const subject = document.getElementById("contactSubject").value;
  const message = document.getElementById("contactMessage").value;

  alert(
    `Thank you, ${name}! Your message with subject "${subject}" has been received.\nWe will respond to ${email} shortly.\n\nMessage: "${message}"\n(This is a demo submission.)`
  );
  toggleContactModal();
  // In a real application, you'd send this data to a server
}

// Toggle Account Modal
function toggleAccountModal() {
  const modal = document.getElementById("accountModal");
  const isVisible = modal.style.display === "block";

  if (!isVisible) {
    // Simulate fetching user data
    const loggedInUser = {
      username: "DemoUser123",
      email: "demouser@citybazaar.com",
    };
    document.getElementById("accountUsername").textContent =
      loggedInUser.username;
    document.getElementById("accountEmail").textContent = loggedInUser.email;
  }
  modal.style.display = isVisible ? "none" : "block";
}

// Handle Logout (Demo)
// function handleLogout() {
//   alert("You have been logged out. (Demo)");
//   toggleAccountModal();
//   // In a real app, this would clear session/token
// }

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  const cartModal = document.getElementById("cartModal");
  const productSpecModal = document.getElementById("productSpecModal");
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");
  const servicesModal = document.getElementById("servicesModal");
  const aboutModal = document.getElementById("aboutModal");
  const contactModal = document.getElementById("contactModal");
  const accountModal = document.getElementById("accountModal");

  if (e.target === cartModal) {
    toggleCart();
  }
  if (e.target === productSpecModal) {
    toggleProductSpecModal();
  }
  if (e.target === loginModal) {
    toggleLoginModal();
  }
  if (e.target === signupModal) {
    toggleSignupModal();
  }
  if (e.target === servicesModal) {
    toggleServicesModal();
  }
  if (e.target === aboutModal) {
    toggleAboutModal();
  }
  if (e.target === contactModal) {
    toggleContactModal();
  }
  if (e.target === accountModal) {
    toggleAccountModal();
  }
});

// Initialize the store when page loads
window.addEventListener("DOMContentLoaded", initStore);

document.addEventListener("DOMContentLoaded", checkLoginStatus);

function checkLoginStatus() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const authButtons = document.getElementById("authButtons");
  const userInfo = document.getElementById("userInfo");
  const welcomeUser = document.getElementById("welcomeUser");

  if (token && username) {
    authButtons.style.display = "none";
    userInfo.classList.remove("hidden");
    welcomeUser.textContent = `Welcome, ${username}`;
  } else {
    authButtons.style.display = "block";
    userInfo.classList.add("hidden");
  }
}

// Handle Signup
async function handleSignup(event) {
  event.preventDefault();

  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById(
    "signupConfirmPassword"
  ).value;

  try {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      toggleSignupModal();
      checkLoginStatus();
    }
  } catch (err) {
    console.error(err);
    alert("Error signing up");
  }
}

// Handle Login
async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.username);
      toggleLoginModal();
      checkLoginStatus();
    }
  } catch (err) {
    console.error(err);
    alert("Error logging in");
  }
}

// Logout function
function logoutUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  location.reload();
}
