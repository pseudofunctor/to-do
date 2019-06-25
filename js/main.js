
const form = document.querySelector("form");
const userEntry = document.getElementById("toDoItem");
const ul = document.querySelector("ul");

form.addEventListener("submit", event => {
	event.preventDefault();
	let newEntry = document.createElement("li");
	newEntry.innerHTML = userEntry.value;
	ul.appendChild(newEntry);
});