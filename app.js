const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
/* ================= PRODUCT MODAL ================= */

const productCards = document.querySelectorAll(".product-card");

const productModal = document.getElementById("productModal");

const closeModal = document.getElementById("closeModal");

const modalImg = document.getElementById("modalImg");

const modalTitle = document.getElementById("modalTitle");

const modalDesc = document.getElementById("modalDesc");

const modalPrice = document.getElementById("modalPrice");

const modalPlatform = document.getElementById("modalPlatform");

const modalBtn = document.getElementById("modalBtn");

productCards.forEach((card) => {

    card.addEventListener("click", () => {

        modalImg.src = card.dataset.image;

        modalTitle.innerText = card.dataset.title;

        modalDesc.innerText = card.dataset.description;

        modalPrice.innerText = card.dataset.price;

        modalPlatform.innerText = card.dataset.platform;

        modalBtn.href = card.dataset.link;

        productModal.classList.add("active");

    });

});

/* CLOSE */

closeModal.addEventListener("click", () => {

    productModal.classList.remove("active");

});

/* OUTSIDE CLICK */

productModal.addEventListener("click", (e) => {

    if(e.target === productModal){

        productModal.classList.remove("active");

    }

});
/* ================= FEATURED PRODUCTS ================= */

const featuredProducts = document.getElementById("featuredProducts");

/* CHECK */

if(featuredProducts){

    fetch("database/products.json")

    .then((response) => response.json())

    .then((products) => {

        /* SHOW ONLY 4 */

        const featured = products.slice(0, 4);

        featured.forEach((product) => {

            let platformClass = product.platform.toLowerCase();

            featuredProducts.innerHTML += `

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

    });

}