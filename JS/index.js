/////////////////////////////////////////////NavBar////////////////////////

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {//علشان لو فاتحة علي الموبيل  يعملها قائمة
        navLinks.classList.toggle("open");
    });
    

// ////////////////////////////////fetures//////////////////////////////////////////

const featureCards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  featureCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
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




