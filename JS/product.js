const button = document.querySelectorAll(".head a");
document.querySelectorAll(".head a")[0].classList.add("active");

button.forEach(btn => {
  btn.addEventListener("click", () => {
    button.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// ========================================
const a = document.querySelectorAll(".head a"); 
const products = document.querySelectorAll("[category]");

a.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("filter");
    console.log(filter);
    
    products.forEach(box => {
      box.classList.add("hidden");
      if (filter === "all")
        box.classList.remove("hidden");
      else if (box.getAttribute("category") === filter)
        box.classList.remove("hidden");

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

    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        name: name,
        img: imgSrc,
        price: price,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart ✅");
  });
});


// =============================================================
const Sinput = document.getElementById("input");
const Sbutton = document.getElementById("btn");

const filter = () => {
  const searchvalue = Sinput.value.toLowerCase();
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    const name = box.querySelector("h3").innerText.toLowerCase();
    const parent = box.parentElement;

    parent.classList.add("hidden");

    if (name.includes(searchvalue))
      parent.classList.remove("hidden");

  });
};

Sbutton.addEventListener("click", filter);

Sinput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    filter();
  }
});