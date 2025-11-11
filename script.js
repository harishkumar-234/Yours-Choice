// Product Data
const products = {
    men: [
        {
            id: 1,
            name: "Men's Denim Shirt",
            category: "shirts",
            subcategory: "denim",
            price: 45.99,
            originalPrice: 59.99,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "New"
        },
        {
            id: 2,
            name: "Cotton Formal Shirt",
            category: "shirts",
            subcategory: "cotton",
            price: 39.99,
            originalPrice: 49.99,
            image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Sale"
        },
        {
            id: 3,
            name: "Checked Casual Shirt",
            category: "shirts",
            subcategory: "checked",
            price: 42.99,
            originalPrice: 52.99,
            image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        },
        {
            id: 4,
            name: "Men's Cargo Pants",
            category: "pants",
            subcategory: "cargo",
            price: 55.99,
            originalPrice: 69.99,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Popular"
        },
        {
            id: 5,
            name: "Classic Jeans",
            category: "pants",
            subcategory: "jeans",
            price: 49.99,
            originalPrice: 59.99,
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        },
        {
            id: 6,
            name: "Cotton Trousers",
            category: "trousers",
            subcategory: "cotton",
            price: 44.99,
            originalPrice: 54.99,
            image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "New"
        },
        {
            id: 7,
            name: "Printed T-Shirt",
            category: "t-shirts",
            subcategory: "printed",
            price: 24.99,
            originalPrice: 29.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Sale"
        },
        {
            id: 8,
            name: "Hoodie T-Shirt",
            category: "t-shirts",
            subcategory: "hoodie",
            price: 34.99,
            originalPrice: 44.99,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        },
        {
            id: 9,
            name: "Traditional Kurta",
            category: "kurtas",
            subcategory: "traditional",
            price: 65.99,
            originalPrice: 79.99,
            image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "New"
        },
        {
            id: 10,
            name: "Men's Innerwear",
            category: "inners",
            subcategory: "basic",
            price: 19.99,
            originalPrice: 24.99,
            image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        }
    ],
    women: [
        {
            id: 11,
            name: "Women's Denim Shirt",
            category: "shirts",
            subcategory: "denim",
            price: 49.99,
            originalPrice: 64.99,
            image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "New"
        },
        {
            id: 12,
            name: "Cotton Blouse",
            category: "shirts",
            subcategory: "cotton",
            price: 42.99,
            originalPrice: 52.99,
            image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Sale"
        },
        {
            id: 13,
            name: "Women's Cargo Pants",
            category: "pants",
            subcategory: "cargo",
            price: 59.99,
            originalPrice: 74.99,
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        },
        {
            id: 14,
            name: "Leggings",
            category: "pants",
            subcategory: "leggings",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1506629905607-e48b0e67d879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Popular"
        },
        {
            id: 15,
            name: "Printed T-Shirt",
            category: "t-shirts",
            subcategory: "printed",
            price: 27.99,
            originalPrice: 34.99,
            image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        },
        {
            id: 16,
            name: "Designer Saree",
            category: "saree",
            subcategory: "designer",
            price: 89.99,
            originalPrice: 119.99,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Sale"
        },
        {
            id: 17,
            name: "Off Shoulder Saree",
            category: "off-saree",
            subcategory: "off-shoulder",
            price: 79.99,
            originalPrice: 99.99,
            image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "New"
        },
        {
            id: 18,
            name: "Lehenga Choli",
            category: "lehenga",
            subcategory: "traditional",
            price: 149.99,
            originalPrice: 189.99,
            image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Popular"
        },
        {
            id: 19,
            name: "Chudithar Set",
            category: "chudithar",
            subcategory: "set",
            price: 69.99,
            originalPrice: 89.99,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        },
        {
            id: 20,
            name: "Evening Gown",
            category: "gown",
            subcategory: "evening",
            price: 99.99,
            originalPrice: 129.99,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "New"
        },
        {
            id: 21,
            name: "Casual Tops",
            category: "tops",
            subcategory: "casual",
            price: 34.99,
            originalPrice: 44.99,
            image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: null
        },
        {
            id: 22,
            name: "Low Tops",
            category: "low-tops",
            subcategory: "casual",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            badge: "Sale"
        }
    ]
};

// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update cart count
            let currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
            
            // Show feedback
            this.textContent = 'Added!';
            this.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = 'var(--primary)';
            }, 2000);
        });
    });
    
    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = 'var(--primary)';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                // In a real implementation, you would redirect to search results page
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                alert(`Searching for: ${this.value}`);
                // In a real implementation, you would redirect to search results page
            }
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() !== '') {
                alert(`Thank you for subscribing with: ${emailInput.value}`);
                emailInput.value = '';
            }
        });
    }
    
    // Load featured products on homepage
    if (document.querySelector('.product-grid') && window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        loadFeaturedProducts();
    }
    
    // Load category products on category pages
    if (document.getElementById('men-products')) {
        loadCategoryProducts('men');
    }
    
    if (document.getElementById('women-products')) {
        loadCategoryProducts('women');
    }
});

// Load featured products for homepage
function loadFeaturedProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    if (!productGrid) return;
    
    // Get 4 random products from men and women
    const featuredProducts = [
        ...products.men.slice(0, 2),
        ...products.women.slice(0, 2)
    ];
    
    productGrid.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Load products for category pages
function loadCategoryProducts(gender) {
    const productGrid = document.getElementById(`${gender}-products`);
    const categoryTitle = document.getElementById('category-title');
    
    if (!productGrid) return;
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Filter products based on category
    let filteredProducts = products[gender];
    
    if (category) {
        filteredProducts = products[gender].filter(product => product.category === category);
        categoryTitle.textContent = `${gender === 'men' ? "Men's" : "Women's"} ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        
        // Update active category in sidebar
        const categoryLinks = document.querySelectorAll('.category-list a');
        categoryLinks.forEach(link => {
            if (link.getAttribute('data-category') === category) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Show relevant filters
        showRelevantFilters(category);
    }
    
    // Render products
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    // Add sorting functionality
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(productGrid, filteredProducts, this.value);
        });
    }
    
    // Add filter functionality
    setupFilters(gender, category);
}

// Create product card HTML
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    
    productCard.innerHTML = `
        <div class="product-img" style="background-image: url('${product.image}')">
            ${badgeHTML}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <div class="product-actions">
                <a href="#" class="add-to-cart">Add to Cart</a>
                <a href="#" class="wishlist"><i class="far fa-heart"></i></a>
            </div>
        </div>
    `;
    
    return productCard;
}

// Show relevant filters based on category
function showRelevantFilters(category) {
    // Hide all filter groups first
    const filterGroups = document.querySelectorAll('.filter-group');
    filterGroups.forEach(group => {
        group.style.display = 'none';
    });
    
    // Show relevant filter group
    let filterGroupId = '';
    if (category === 'shirts') {
        filterGroupId = 'shirt-filters';
    } else if (category === 'pants') {
        filterGroupId = 'pants-filters';
    } else if (category === 't-shirts') {
        filterGroupId = 't-shirt-filters';
    }
    
    if (filterGroupId) {
        const relevantFilterGroup = document.getElementById(filterGroupId);
        if (relevantFilterGroup) {
            relevantFilterGroup.style.display = 'block';
        }
    }
}

// Setup filter functionality
function setupFilters(gender, category) {
    const filterGroups = document.querySelectorAll('.filter-group');
    
    filterGroups.forEach(group => {
        const checkboxes = group.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                applyFilters(gender, category);
            });
        });
    });
}

// Apply filters to products
function applyFilters(gender, category) {
    const productGrid = document.getElementById(`${gender}-products`);
    let filteredProducts = products[gender];
    
    // Filter by category if specified
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Get active filters
    const activeFilters = [];
    const filterGroups = document.querySelectorAll('.filter-group');
    
    filterGroups.forEach(group => {
        const checkboxes = group.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            activeFilters.push(checkbox.value);
        });
    });
    
    // Apply filters
    if (activeFilters.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            activeFilters.includes(product.subcategory)
        );
    }
    
    // Render filtered products
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No products match your filters.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    // Reattach event listeners to new product cards
    reattachEventListeners();
}

// Sort products
function sortProducts(productGrid, products, sortBy) {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
            // Assuming newer products have higher IDs
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Default sorting (by ID)
            sortedProducts.sort((a, b) => a.id - b.id);
    }
    
    // Render sorted products
    productGrid.innerHTML = '';
    sortedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    // Reattach event listeners to new product cards
    reattachEventListeners();
}

// Reattach event listeners to dynamically created elements
function reattachEventListeners() {
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update cart count
            let currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
            
            // Show feedback
            this.textContent = 'Added!';
            this.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = 'var(--primary)';
            }, 2000);
        });
    });
    
    // Wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = 'var(--primary)';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
            }
        });
    });
}