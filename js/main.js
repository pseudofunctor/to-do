
const form = document.querySelector("form");
const userEntry = document.getElementById("toDoItem");
const ul = document.querySelector("ul");

const items = [
	{ name: "Eat an orange", complete: false },
	{ name: "Go to the gym", complete: true }
];

items.forEach(item => {
	let listItem = document.createElement("li");
	listItem.innerHTML = item.name;
	ul.appendChild(listItem);
});

form.addEventListener("submit", event => {
	event.preventDefault();
	let newEntry = document.createElement("li");
	newEntry.innerHTML = userEntry.value;
	ul.appendChild(newEntry);
});