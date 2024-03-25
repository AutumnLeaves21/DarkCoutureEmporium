document.addEventListener('DOMContentLoaded', function() {
  // Adaug eveniment de clic pentru butonul "Item Details" al fiecărui produs
  const itemDetailsButtons = document.querySelectorAll('.btn-primary');
  itemDetailsButtons.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Obțin detaliile produsului corespunzător butonului pe care s-a făcut clic
      const productName = button.parentNode.querySelector('.card-title').textContent;
      const productDescription = button.parentNode.querySelector('.card-text').textContent;
      const productPrice = button.parentNode.querySelector('.card-text.price').textContent;

      // Salvez detaliile produsului într-un obiect
      const productDetails = {
        name: productName,
        description: productDescription,
        price: productPrice
      };
      
      // Redirecționez către pagina_produs.html și trimit detaliile produsului prin query string
      const queryString = new URLSearchParams(productDetails).toString();
      window.location.href = `pagina_produs.html?${queryString}`;
    });
  });

  // În cazul în care sunteți pe pagina pagina_produs.html, afișez detaliile produsului
  if (window.location.pathname.includes('pagina_produs.html')) {
    // Obțin detaliile produsului din query string
    const queryParams = new URLSearchParams(window.location.search);
    const productName = queryParams.get('name');
    const productDescription = queryParams.get('description');
    const productPrice = queryParams.get('price');

    // Construiesc HTML-ul pentru afișarea detaliilor produsului
    const productDetailsHTML = `
      <h5 class="card-title">${productName}</h5>
      <p class="card-text">${productDescription}</p>
      <p class="card-text">Price: ${productPrice}</p>
    `;

    // Actualizez conținutul containerului cu detaliile produsului
    const productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.innerHTML = productDetailsHTML;
  }
});