let cart = JSON.parse(localStorage.getItem("cart")) || [
  {name:"Organic Apples",img:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=100",price:5.99,qty:1},
  {name:"Fresh Bananas",img:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=100",price:3.49,qty:2}
];

function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
  render();
}

function render(){
  let html = '', mini = '', total = 0, count = 0;

  cart.forEach((p,i)=>{
    // تأكد إن السعر والكمية أرقام
    let price = Number(p.price) || 0;
    let qty   = Number(p.qty)   || 0;

    total += price * qty;
    count += qty;

    html += `
      <tr>
        <td>${p.name}</td>
        <td><img src="${p.img}" class="product-img"></td>
        <td>$${price.toFixed(2)}</td>
        <td>
          <button class="qty-btn" onclick="chg(${i},-1)">-</button> 
          ${qty} 
          <button class="qty-btn" onclick="chg(${i},1)">+</button>
        </td>
        <td>$${(price * qty).toFixed(2)}</td>
        <td><button class="remove-btn" onclick="del(${i})">✕</button></td>
      </tr>
    `;

    mini += `
      <div class="mini-cart-item">
        <img src="${p.img}">
        <div class="mini-cart-item-info">
          <div class="mini-cart-item-name">${p.name}</div>
          <div class="mini-cart-item-price">$${price.toFixed(2)}</div>
        </div>
        <div class="mini-cart-qty">
          <button onclick="chg(${i},-1)">-</button>
          <span>${qty}</span>
          <button onclick="chg(${i},1)">+</button>
        </div>
      </div>
    `;
  });

  document.getElementById('mainTable').innerHTML = html || '<tr><td colspan="6" class="empty">Cart is empty</td></tr>';
  document.getElementById('miniItems').innerHTML = mini || '<div class="empty">Empty</div>';
  document.getElementById('mainTotal').innerText = '$' + total.toFixed(2);
  document.getElementById('miniTotal').innerText = '$' + total.toFixed(2);
  document.getElementById('badge').innerText = count;
}

function chg(i,d){
  cart[i].qty = Number(cart[i].qty) + d;
  if(cart[i].qty < 1) cart.splice(i,1);
  save();
}

function del(i){ cart.splice(i,1); save(); }
function toggleCart(){ document.getElementById('miniCart').classList.toggle('show'); }
function openPay(){ document.getElementById('payModal').classList.add('show'); toggleCart(); }
function selectPay(el,t){
  document.querySelectorAll('.payment-option').forEach(e=>e.classList.remove('selected'));
  el.classList.add('selected');
  document.querySelectorAll('.payment-form').forEach(e=>e.classList.remove('show'));
  document.getElementById(t+'Form').classList.add('show');
}
function pay(){
  alert('✅ Payment Successful!');
  cart = [];
  save();
  document.getElementById('payModal').classList.remove('show');
}

render();
