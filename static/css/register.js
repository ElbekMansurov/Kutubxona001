function register() {
const user = document.getElementById("regUser").value;
const pass = document.getElementById("regPass").value;


if (user === "" || pass === "") {
alert("Iltimos, barcha maydonlarni to‘ldiring.");
return;
}


localStorage.setItem("username", user);
localStorage.setItem("password", pass);


alert("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
window.location.href = "login.html";
}