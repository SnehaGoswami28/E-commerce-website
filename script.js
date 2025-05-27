 let cartCount = 0;

function addToCart(productName, price) {
  cartCount++;
  document.getElementById("cart-count").textContent = `Cart: ${cartCount} item${cartCount > 1 ? 's' : ''}`;
  alert(`${productName} added to cart!`);
}
