let cartCount = 0;
let wishlistCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('modal-title').innerText = "Added to Cart! 🛒";
    document.getElementById('modal-text').innerText = `${productName} ($${price}) has been successfully added to your shopping cart.`;
    document.getElementById('modal').style.display = 'flex';
}

function addToWishlist(productName) {
    wishlistCount++;
    document.getElementById('wishlist-count').innerText = wishlistCount;
    document.getElementById('modal-title').innerText = "Added to Wishlist! ❤️";
    document.getElementById('modal-text').innerText = `${productName} has been added to your favorite items.`;
    document.getElementById('modal').style.display = 'flex';
}

function openCart() {
    document.getElementById('modal-title').innerText = "Your Shopping Cart 🛒";
    document.getElementById('modal-text').innerText = `You currently have ${cartCount} items in your cart.`;
    document.getElementById('modal').style.display = 'flex';
}

function openWishlist() {
    document.getElementById('modal-title').innerText = "Your Wishlist ❤️";
    document.getElementById('modal-text').innerText = `You currently have ${wishlistCount} items saved in your wishlist.`;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function filterCategory(categoryName) {
    document.getElementById('modal-title').innerText = "Category Filter";
    document.getElementById('modal-text').innerText = `Filtering products for category: ${categoryName.toUpperCase()}`;
    document.getElementById('modal').style.display = 'flex';
}

function subscribeNewsletter() {
    document.getElementById('modal-title').innerText = "Successfully Subscribed! 🎉";
    document.getElementById('modal-text').innerText = "Thank you for joining our newsletter. Special gifts are on the way!";
    document.getElementById('modal').style.display = 'flex';
}