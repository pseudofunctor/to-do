
const form = document.querySelector("form");
const userEntry = document.getElementById("toDoItem");
const ul = document.querySelector("ul");

const items = [
	{ name: "Eat an orange", complete: false },
	{ name: "Go to the gym", complete: true }
];

const addCompleteButtonListener = (completeButton, li, toDoItem) => {
	completeButton.addEventListener("click", () => {
		li.style.setProperty("text-decoration", "line-through");
		toDoItem.complete = true;
	});
};

items.forEach(toDoItem => {
	let li = document.createElement("li");

	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "x";

	li.innerHTML = toDoItem.name + " ";
	if (toDoItem.complete) {
		li.style.setProperty("text-decoration", "line-through");
	} else {
		let completeButton = document.createElement("button");
		completeButton.innerHTML = "v";
		li.appendChild(completeButton);
		addCompleteButtonListener(completeButton, li, toDoItem);
	}

	li.appendChild(deleteButton);
	ul.appendChild(li);
});

form.addEventListener("submit", event => {
	event.preventDefault();
	let newEntry = document.createElement("li");
	
	let completeButton = document.createElement("button");
	completeButton.innerHTML = "v";

	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "x";

	newEntry.innerHTML = userEntry.value + " ";
	newEntry.appendChild(completeButton);

	let toDoItem = {
		name: userEntry.value,
		complete: false
	};

	addCompleteButtonListener(completeButton, newEntry, toDoItem);


	newEntry.appendChild(deleteButton);
	ul.appendChild(newEntry);
});
