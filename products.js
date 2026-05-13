const productsGrid = document.getElementById("productsGrid");

/* FETCH PRODUCTS */

fetch("database/products.json")
  .then((response) => response.json())

  .then((products) => {

    products.forEach((product) => {

      let platformClass = product.platform.toLowerCase();

      productsGrid.innerHTML += `

        <div
          class="product-card"

          data-name="${product.title}"

          data-title="${product.title}"

          data-price="${product.price}"

          data-platform="${product.platform}"

          data-description="${product.description}"

          data-image="${product.image}"

          data-link="${product.affiliate}"
        >

          <div class="product-image">

            <img
              src="${product.image}"
              alt="${product.title}"
            />

            <div class="platform-tag ${platformClass}">
              ${product.platform}
            </div>

          </div>

          <div class="product-info">

            <h3>
              ${product.title}
            </h3>

            <p>
              ${product.description}
            </p>

            <div class="product-bottom">

              <h4>
                ${product.price}
              </h4>

              <a
                href="${product.affiliate}"
                target="_blank"
              >
                Buy Now
              </a>

            </div>

          </div>

        </div>

      `;

    });

  });
  const productsGrid = document.getElementById("productsGrid");

const searchInput = document.getElementById("searchInput");

/* STORE PRODUCTS */

let allProducts = [];

/* FETCH PRODUCTS */

fetch("database/products.json")

  .then((response) => response.json())

  .then((products) => {

    allProducts = products;

    showProducts(products);

  });

/* SHOW PRODUCTS */

function showProducts(products){

  productsGrid.innerHTML = "";

  products.forEach((product) => {

    let platformClass = product.platform.toLowerCase();

    productsGrid.innerHTML += `

      <div class="product-card">

        <div class="product-image">

          <img
            src="${product.image}"
            alt="${product.title}"
          />

          <div class="platform-tag ${platformClass}">
            ${product.platform}
          </div>

        </div>

        <div class="product-info">

          <h3>
            ${product.title}
          </h3>

          <p>
            ${product.description}
          </p>

          <div class="product-bottom">

            <h4>
              ${product.price}
            </h4>

            <a
              href="${product.affiliate}"
              target="_blank"
            >
              Buy Now
            </a>

          </div>

        </div>

      </div>

    `;

  });

}

/* SEARCH */

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  const filteredProducts = allProducts.filter((product) => {

    return (
      product.title.toLowerCase().includes(value) ||

      product.category.toLowerCase().includes(value) ||

      product.platform.toLowerCase().includes(value)
    );

  });

  showProducts(filteredProducts);

});