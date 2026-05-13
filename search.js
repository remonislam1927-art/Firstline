const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    products.forEach((product) => {

        const name = product.dataset.name.toLowerCase();

        if(name.includes(value)){
            product.style.display = "block";
        }

        else{
            product.style.display = "none";
        }

    });

});
/* ================= CATEGORY FILTER ================= */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    /* ACTIVE BUTTON */

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    /* CATEGORY */

    const category = button.dataset.category;

    if(category === "All"){

      showProducts(allProducts);

    }

    else{

      const filteredProducts = allProducts.filter((product) => {

        return product.category === category;

      });

      showProducts(filteredProducts);

    }

  });

});