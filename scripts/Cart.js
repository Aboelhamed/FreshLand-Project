document.addEventListener("DOMContentLoaded", function () {

  let tbody = document.querySelector("tbody");
  let totalElement = document.querySelector(".total_salary");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderTable() {
    tbody.innerHTML = "";

    cart.forEach(item => {

      let tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${item.name}</td>
        <td><img src="${item.img}" width="50"></td>
        <td>${item.price}</td>
      `;

      tbody.appendChild(tr);
    });

    updateGrandTotal();
  }

  function updateGrandTotal() {
    let sum = 0;

    cart.forEach(item => {
      let price = parseFloat(item.price);
      if (!isNaN(price)) {
        sum += price;
      }
    });

    totalElement.innerText = sum.toFixed(2);
  }

  renderTable();

});
