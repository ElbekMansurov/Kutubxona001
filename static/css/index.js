function addBook() {
const name = document.getElementById("bookName").value;
const author = document.getElementById("author").value;
if (name === "" || author === "") {
alert("Iltimos, maydonlarni to‘ldiring");
return;
}


const li = document.createElement("li");
li.textContent = name + " — " + author;
document.getElementById("bookList").appendChild(li);


document.getElementById("bookName").value = "";
document.getElementById("author").value = "";
}