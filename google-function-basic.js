// Create dynamic product cards
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Create an anchor element with the product link
    const productLink = document.createElement('a');
    productLink.href = product.link;

    // Open the link in a new tab
    const productImage = document.createElement('div');
    productImage.className = 'product-image';
    productImage.style.backgroundImage = `url(${product.imageSrc})`;

    // Add hover effect using JavaScript
    productImage.addEventListener('mouseenter', () => {
        productImage.style.backgroundImage = `url(${product.hoverImageSrc})`;
    });

    productImage.addEventListener('mouseleave', () => {
        productImage.style.backgroundImage = `url(${product.imageSrc})`;
    });

    const productTitle = document.createElement('p');
    productTitle.className = 'product-title';
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.style.textAlign = 'center';
    productPrice.style.color = 'black';

    productLink.appendChild(productImage);
    productLink.appendChild(productTitle);
    productLink.appendChild(productPrice);

    productDiv.appendChild(productLink);
    productCardContainer.appendChild(productDiv);
});
