// Funcția pentru ștergerea produselor din coșul de cumpărături
function removeFromCart(productId) {
  
  // Identific produsul din coșul de cumpărături
  const productToRemove = document.getElementById('product-' + productId);
  
  // Verific dacă produsul există în coșul de cumpărături
  if (productToRemove) {
      // Șterg produsul din DOM
      productToRemove.remove();
      alert('Produsul ' + productId + ' a fost eliminat din coșul de cumpărături');
  } else {
      console.log('Produsul cu ID-ul ' + productId + ' nu există în coșul de cumpărături');
  }
}

// Funcția pentru adăugarea produselor în coșul de cumpărături
function addToCart(productId) {
  alert('Produsul ' + productId + ' a fost adăugat în coșul de cumpărături');
}


// Adăugarea unui event listener pe butoanele "Add to cart"
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
          // Obțin id-ul produsului folosind getAttribute pentru atributul data-product-id
          const productId = event.target.getAttribute('data-product-id');
          addToCart(productId);
      });
  });

  // Adaug event listener pentru butoanele de ștergere
  const removeFromCartButtons = document.querySelectorAll('.btn-remove-from-cart');
  removeFromCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
          // Obțin id-ul produsului folosind getAttribute pentru atributul data-product-id
          const productId = event.target.getAttribute('data-product-id');
          removeFromCart(productId);
      });
  });
});