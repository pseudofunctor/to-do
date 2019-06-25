
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

	li.appendChild(createDeleteButton());
	ul.appendChild(li);
});

form.addEventListener("submit", event => {
	event.preventDefault();
	let newEntry = document.createElement("li");
	newEntry.innerHTML = userEntry.value + " ";
	
	let toDoItem = {
		name: userEntry.value,
		complete: false
	};
	items.push(toDoItem);

	let completeButton = createCompleteButton();
	newEntry.appendChild(completeButton);
	addCompleteButtonListener(completeButton, newEntry, toDoItem);

	newEntry.appendChild(createDeleteButton());
	ul.appendChild(newEntry);
});
