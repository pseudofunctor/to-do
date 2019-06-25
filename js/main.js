
const form = document.querySelector("form");
const userEntry = document.getElementById("toDoItem");
const ul = document.querySelector("ul");

let items = [
	{ name: "Eat an orange", complete: false },
	{ name: "Go to the gym", complete: true }
];

const addCompleteButtonListener = (completeButton, li, toDoItem) => {
	completeButton.addEventListener("click", () => {
		li.style.setProperty("text-decoration", "line-through");
		toDoItem.complete = true;
	});
};

const addDeleteButtonListener = (deleteButton, li, toDoItem) => {
	deleteButton.addEventListener("click", () => {
		items = items.filter(item => item.name !== toDoItem.name);
		li.parentNode.removeChild(li);
	});
};

const createDeleteButton = () => {
	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "x";
	return deleteButton;
};

const createCompleteButton = () => {
	let completeButton = document.createElement("button");
	completeButton.innerHTML = "v";
	return completeButton;
};

items.forEach(toDoItem => {
	let li = document.createElement("li");

	li.innerHTML = toDoItem.name + " ";
	if (toDoItem.complete) {
		li.style.setProperty("text-decoration", "line-through");
	} else {
		let completeButton = createCompleteButton();
		li.appendChild(completeButton);
		addCompleteButtonListener(completeButton, li, toDoItem);
	}

	let deleteButton = createDeleteButton();
	li.appendChild(deleteButton);
	addDeleteButtonListener(deleteButton, li, toDoItem);

	ul.appendChild(li);
});

form.addEventListener("submit", event => {
	event.preventDefault();
	let newEntry = document.createElement("li");
	newEntry.innerHTML = userEntry.value + " ";
	
	let toDoItem = { name: userEntry.value, complete: false };
	items.push(toDoItem);

	let completeButton = createCompleteButton();
	newEntry.appendChild(completeButton);
	addCompleteButtonListener(completeButton, newEntry, toDoItem);

	let deleteButton = createDeleteButton();
	newEntry.appendChild(deleteButton);
	addDeleteButtonListener(deleteButton, newEntry, toDoItem);

	ul.appendChild(newEntry);
});


