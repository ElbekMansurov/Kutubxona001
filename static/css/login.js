function login() {
const user = document.getElementById("loginUser").value;
const pass = document.getElementById("loginPass").value;


const savedUser = localStorage.getItem("username");
const savedPass = localStorage.getItem("password");


if (user === savedUser && pass === savedPass) {
alert("Muvaffaqiyatli kirdingiz!");
window.location.href = "index.html";
} else {
alert("Login yoki parol xato!");
}
}