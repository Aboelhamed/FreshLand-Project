const authLink = document.getElementById("authLink");
const usernameBtn = document.getElementById("usernameBtn");
const userMenu = document.getElementById("userMenu");
const logoutBtn = document.getElementById("logoutBtn");
const deleteBtn = document.getElementById("deleteBtn");

/* =========================Check Login Status========================= */

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    // Hide login icon link
    authLink.style.display = "none";

    // Show username
    usernameBtn.style.display = "inline-block";
    usernameBtn.textContent = currentUser.username;
} else {
    usernameBtn.style.display = "none";
}

/* =========================Toggle Dropdown========================= */

usernameBtn.addEventListener("click", () => {
    userMenu.classList.toggle("show");
});

/* Close dropdown if clicked outside */
document.addEventListener("click", (e) => {
    if (!document.getElementById("userBox").contains(e.target)) {
        userMenu.classList.remove("show");
    }
});

/* =========================Logout========================= */

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
});

/* =========================Delete Account========================= */

deleteBtn.addEventListener("click", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const filteredUsers = users.filter(
        user => user.email !== currentUser.email
    );

    localStorage.setItem("users", JSON.stringify(filteredUsers));
    localStorage.removeItem("currentUser");

    alert("Account deleted successfully");
    window.location.reload();
});