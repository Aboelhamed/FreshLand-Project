const button = document.querySelectorAll(".head a");

button.forEach(btn => {
  btn.addEventListener("click", () => {
    button.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// ========================================
const buttons = document.querySelectorAll(".head a"); // كل روابط التصنيف
const products = document.querySelectorAll("[data-category]"); // كل المنتجات

buttons.forEach(btn => {
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
