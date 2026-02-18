let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Ensure legacy cart items have qty
cart.forEach(item => {
    if (!item.qty) item.qty = 1;
});

function save() {
    localStorage.setItem("cart", JSON.stringify(cart));
    render();
}

function render() {
    let mini = '', total = 0, count = 0;
    cart.forEach((p, i) => {
        // Ensure price is a number
        let price = parseFloat(p.price) || 0;
        let pTotal = price * p.qty;
        total += pTotal;
        count += p.qty;

        mini += `<div class="mini-cart-item">
            <img src="${p.img}">
            <div class="mini-cart-item-info">
                <div class="mini-cart-item-name">${p.name}</div>
                <div class="mini-cart-item-price">$${price.toFixed(2)}</div>
            </div>
            <div class="mini-cart-qty">
                <button onclick="chg(${i},-1)">-</button>
                <span>${p.qty}</span>
                <button onclick="chg(${i},1)">+</button>
            </div>
        </div>`;
    });

    const miniItems = document.getElementById('miniItems');
    if (miniItems) {
        miniItems.innerHTML = mini || '<div class="empty">Cart is Empty</div>';
    }

    const miniTotal = document.getElementById('miniTotal');
    if (miniTotal) {
        miniTotal.innerText = '$' + total.toFixed(2);
    }

    const badge = document.getElementById('badge');
    if (badge) {
        badge.innerText = count;
    }
}

function chg(i, d) {
    if (cart[i]) {
        cart[i].qty += d;
        if (cart[i].qty < 1) cart.splice(i, 1);
        save();
    }
}

function toggleCart() {
    const miniCart = document.getElementById('miniCart');
    if (miniCart) {
        miniCart.classList.toggle('show');
    }
}

function openPay() {
    const payModal = document.getElementById('payModal');
    if (payModal) {
        payModal.classList.add('show');
    }
    // Close mini cart
    const miniCart = document.getElementById('miniCart');
    if (miniCart) {
        miniCart.classList.remove('show');
    }
}

function closePay() {
    const payModal = document.getElementById('payModal');
    if (payModal) {
        payModal.classList.remove('show');
    }
}

function selectPay(el, t) {
    document.querySelectorAll('.payment-option').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    document.querySelectorAll('.payment-form').forEach(e => e.classList.remove('show'));
    const form = document.getElementById(t + 'Form');
    if (form) form.classList.add('show');
}

function pay() {
    alert('✅ Payment Successful!');
    cart = [];
    save();
    closePay();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    render();
});
