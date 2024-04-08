let cart = [];
// Funcția pentru ștergerea produselor din coșul de cumpărături
function removeFromCart(productName) {
  const productToRemove = cart.find(product => product.name === productName);

  if (productToRemove) {
    const index = cart.indexOf(productToRemove);
    cart.splice(index, 1); // Elimină produsul din coș
    displayCart(); // Actualizează afișarea coșului de cumpărături
    alert('Produsul "' + productName + '" a fost eliminat din coșul de cumpărături');
  } else {
    console.log('Produsul "' + productName + '" nu există în coșul de cumpărături');
  }
}

// Funcția pentru adăugarea produselor în coșul de cumpărături
function addToCart(productName) {
  // Adaug produsul în coș
  cart.push({ name: productName });
  alert('Produsul "' + productName + '" a fost adăugat în coșul de cumpărături');
  displayCart(); // Actualizez afișarea coșului de cumpărături
}

// Funcția pentru afișarea coșului de cumpărături pe pagină
function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  if (!cartContainer) return;

  cartContainer.innerHTML = ''; // Șterg conținutul existent al coșului

  // Parcurg produsele din coș și le adaug în lista pe pagină
  cart.forEach(function(product) {
    const listItem = document.createElement('li');
    listItem.textContent = product.name;
    cartContainer.appendChild(listItem);
  });
}

// Adaug un event listener pe butoanele "Add to cart"
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      const productName = event.target.getAttribute('data-product-name');
      addToCart(productName);
    });
  });

  // Afișez coșul de cumpărături la încărcarea paginii
  displayCart();
 

  // Adaug un event listener pentru butoanele "Remove"
  const removeFromCartButtons = document.querySelectorAll('.btn-remove-from-cart');
  removeFromCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      const productName = event.target.getAttribute('data-product-name');
      removeFromCart(productName);
    });
  });

  // Verific dacă există un element cart-container și adaug unul dacă nu există
  const cartContainer = document.getElementById('cart-container');
  if (!cartContainer) {
    const newCartContainer = document.createElement('div');
    newCartContainer.id = 'cart-container';
    newCartContainer.innerHTML = '<h2>Shopping Cart</h2><ul id="cart-items"></ul>';
    const mainElement = document.querySelector('main');
    mainElement.appendChild(newCartContainer);
  }
});
