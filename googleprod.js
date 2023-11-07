const products = [
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/H84b649720a684601b599d2c4133ebec5O.jpeg_960x960.jpeg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/H28797485ad0f496baee40cbe0535b7b2k.jpeg_960x960.jpeg',
        title: 'White Ceramic Vase Silhouette Style Contemporary Nordic Decoration',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod1',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A9dc0ff36201a4c46b5311813e73b22b3g.jpg_960x960.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A1145b89afe1e4747a69fbde32cb65fbaw.jpg_960x960.jpg',
        title: 'Carrara Charcoal Planter With Coaster Ceramic Planter Decorative Planter Flowerpot',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod2'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/S2260e334482847ebb1058db7e93a0ad8K.jpg_960x960.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A8c1a22548b474b8eadf9bc85e92b1c47R.jpg_960x960.jpg',
        title: 'Ternion Wavy Textured Planter Set Of 3 With Plate White in Ceramic Home Decor Ceramic Planters with plate',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod3'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Aaa2cadf332094862b889b6272625560fM.jpg_960x960.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Aeba61760a1ea416e87917af411e03bbaX.jpg_960x960.jpg',
        title: 'Geometric Iron Candlestick Wall Candle Holder Candle Holders Ornaments Sconce Matching Tealight Steel Minimalist Wedding Decor',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod4'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A854de4c02c48403c9ce3bf1178f012bfQ.jpg_960x960.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A58f921a14e3b4e03ad2ae83b4c9c8155R.jpg_960x960.jpg',
        title: 'Hanging Iron Planter Metal Hanging Pots Modern Minimalist Plant Hanger Nordic Succulent Cachepot Swing Flower Basket Round',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod5'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Seb36634c0a9c4417ab72bacbd7749732I.jpg_960x960.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Acb917102598b435b93878b541840f644r.jpg_960x960.jpg',
        title: 'Black Hanging Iron Planter Metal Hanging Plant Pot Iron Plant Hanger Swing Flower Pot Nordic Hanging Planter Modern Hanger',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod6'
    },
    // Add more product data here...
];
const productCardContainer = document.querySelector('.product-card');

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
    productPrice.innerHTML = `${product.price} <s style="color: rgb(170, 170, 170)">${product.originalPrice}</s>`;

    productLink.appendChild(productImage);
    productLink.appendChild(productTitle);
    productLink.appendChild(productPrice);

    productDiv.appendChild(productLink);
    productCardContainer.appendChild(productDiv);
});
