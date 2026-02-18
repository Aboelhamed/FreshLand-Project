/////////////////////////////////////////////NavBar////////////////////////
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {//علشان لو فاتحة علي الموبيل  يعملها قائمة
        navLinks.classList.toggle("open");
    });
// ========================================
const button = document.querySelectorAll(".head a");
document.querySelectorAll(".head a")[0].classList.add("active");

button.forEach(btn => {
  btn.addEventListener("click", () => {
    button.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// ===================================================================================
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

///////////////////////////////////////////////footer////////////////////////////////////////////////////

    const footer = document.querySelector('.footer');

    function revealFooter() {
        const trigger = window.innerHeight * 0.9;
        const footerTop = footer.getBoundingClientRect().top;

        if (footerTop < trigger) {
        footer.classList.add('show');
        }
    }

    window.addEventListener('scroll', revealFooter);
    window.addEventListener('load', revealFooter);