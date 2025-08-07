const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');

// Show navigation links and swap icons when menu icon is clicked, 
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('show');     
  menuIcon.style.display = 'none';     
  closeIcon.style.display = 'block';   
});

// Hide navigation links and swap icons when the close icon is clicked, 
closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('show'); 
  closeIcon.style.display = 'none';    
  menuIcon.style.display = 'block';    
});

// Product objects
const products = [
  {
    name: "Serene Table Lamp",
    price: "₦80,000.00 NGN",
    img: "./img/image-21.jpg"
  },
  {
    name: "Marble Side Table",
    price: "₦220,000.00 NGN",
    img: "./img/image-22.jpg"
  },
  {
    name: "Adrena Vase Lamp",
    price: "90,000.00 NGN",
    img: "./img/image-23.jpg"
  },
  {
    name: "Quin Round Side Chair",
    price: "₦150,000.00 NGN",
    img: "./img/image-7.jpg"
  },
  {
    name: "Cornets Flower Vase",
    price: "₦50,900.00 NGN",
    img: "./img/image-24.jpg"
  },
  {
    name: "Modern Shelf Decor",
    price: "₦80,000.00 NGN",
    img: "./img/image-25.jpg"
  }
];

// Pagination
const productsPerPage = 4; // Number of products per page
let currentPage = 1;       // Current page number
const totalPages = Math.ceil(products.length / productsPerPage); // Total number of pages

const grid = document.getElementById("productFlex");
const pageIndicator = document.getElementById("pageIndicator");

// Display products for the current page
function renderProducts() {
  grid.innerHTML = ""; // Clear current product grid

  // Calculate start and end index for slicing the products array
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const pageItems = products.slice(start, end); // Get current page's products

  // Generate HTML for each product
  let html = '';
  pageItems.forEach(product => {
    html += `
      <div class="card">
        <img src="${product.img}" alt="${product.name}">
        <p>${product.name}</p>
        <h4>${product.price}</h4>
        <button class="new-button">Add to cart</button>
      </div>
    `;
  });

  grid.innerHTML = html; // Update the grid with generated HTML

  // Update the page indicator text
  pageIndicator.textContent = `${currentPage} of ${totalPages}`;
}

// Go to the next page if not at the last one
function nextPage() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts();
  }
}

// Go to the previous page if not at the first one
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
}

renderProducts();

const cartBtn = document.getElementById("cartBtn");
const popupClose = document.getElementById("popupClose");
const cart = document.getElementById("cart");

popupClose.onclick = () => {
  cart.style.display = "none";
};

cartBtn.onclick = () => {
  cart.style.display = "block";
};

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");

searchBtn = addEventListener("click", () => {
  if (searchBar.classList.contains("active")) {
 searchBar.classList.remove("active");
  searchBar.style.display = "none";
} else {
  searchBar.style.display = "inline-block";
  setTimeout(() => 
  searchBar.classList.add("active"), 10);
  searchBar.focus();
}
});
