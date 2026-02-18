document.addEventListener("DOMContentLoaded", function () {

  let tbody = document.querySelector("tbody");
  let totalElement = document.querySelector(".total_salary");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderTable() {
    tbody.innerHTML = "";

    cart.forEach((item, index) => {
      let tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${item.name}</td>
        <td><img src="${item.img}" width="50"></td>
        <td>${item.price}</td>
        <td>
          <button class="btn minus" onclick="decreaseQty(${index})">-</button>
          ${item.quantity}
          <button class="btn plus" onclick="increaseQty(${index})">+</button>
        </td>
        <td>${(item.price * item.quantity).toFixed(2)}</td>
        <td><button class="btn delete" onclick="deleteItem(${index})">Delete</button></td>
      `;

      tbody.appendChild(tr);
    });

    // بعد ما نرسم الجدول نضيف الاستايلات
    styleButtons();
    updateGrandTotal();
  }

  function styleButtons() {
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.padding = "5px 10px";
      btn.style.margin = "0 3px";
      btn.style.border = "none";
      btn.style.borderRadius = "4px";
      btn.style.cursor = "pointer";
      btn.style.color = "#fff";
    });

    document.querySelectorAll(".plus").forEach(btn => {
      btn.style.backgroundColor = "green";
    });

    document.querySelectorAll(".minus").forEach(btn => {
      btn.style.backgroundColor = "orange";
    });

    document.querySelectorAll(".delete").forEach(btn => {
      btn.style.backgroundColor = "red";
    });
  }

  window.increaseQty = function(index) {
    cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderTable();
  }

  window.decreaseQty = function(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderTable();
  }

  window.deleteItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderTable();
  }

  function updateGrandTotal() {
    let sum = 0;
    cart.forEach(item => {
      sum += item.price * item.quantity;
    });
    totalElement.innerText = sum.toFixed(2);
  }

  renderTable();

});