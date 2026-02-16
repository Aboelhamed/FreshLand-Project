const button = document.querySelectorAll(".head a");

button.forEach(btn => {
  btn.addEventListener("click", () => {
    button.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// ========================================
const b = document.querySelectorAll(".head a"); 
const products = document.querySelectorAll("[data-category]");

b.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    products.forEach(box => {
      if (filter === "all" || box.getAttribute("data-category") === filter) {
        box.classList.remove("hidden");
      } else {
        box.classList.add("hidden");
      }
    });
  });
});


// =============================================================
let btn = document.querySelectorAll('.box button');

btn.forEach(btns => {
  btns.addEventListener("click", () => {

    const filter = btns.closest(".box");

    let name = filter.querySelector('h3').innerText;
    let imgSrc = filter.querySelector('img').src;
    let price = parseFloat(filter.querySelector('b').innerText);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
      name: name,
      img: imgSrc,
      price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart ✅");
  });
});
