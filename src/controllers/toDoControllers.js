const { v4: uuid } = require("uuid");

const toDoList = [
	{
		id: uuid(),
		name: "Read a Book",
		status: "Incomplete",
		type: "Hobby",
	},
	{
		id: uuid(),
		name: "Create a ToDo App",
		status: "Incomplete",
		type: "Work",
	},
	{
		id: uuid(),
		name: "Clean my desk",
		status: "Incomplete",
		type: "Chores",
	},
];

exports.getAllTodo = (req, res) => {
	res.status(200).send(toDoList);
};

exports.addTodo = (req, res) => {
	const { name, status, type } = req.body;
	const todo = { id: uuid(), name, status, type };
	toDoList.push(todo);
	res.status(201).send(toDoList);
};

exports.getOneTodo = (req, res) => {
	const { toDoId } = req.params;
	const todoItem = toDoList.find((item) => {
		return item.id === toDoId;
	});

	if (!todoItem) {
		return res.status(404).send("No such item in To Do List");
	} else {
		res.status(200).send(todoItem);
	}
};

exports.updateOneTodo = (req, res) => {
	const { toDoId } = req.params;
	const { name, status, type } = req.body;
	const todoItem = toDoList.findIndex((item) => {
		return item.id === toDoId;
	});
	if (todoItem < 0) {
		return res.status(404).send("No such item in To Do List");
	} else {
		if (name === undefined || status === undefined || type === undefined) {
			return res.status(400).send("Need valid values to update the todo");
		} else {
			toDoList[todoItem].name = name;
			toDoList[todoItem].status = status;
			toDoList[todoItem].type = type;
		}
	}
	res.status(201).send(toDoList[todoItem]);
};

exports.deleteOneTodo = (req, res) => {
	const { toDoId } = req.params;
	const todoItem = toDoList.findIndex((item) => {
		return item.id === toDoId;
	});
	if (todoItem < 0) {
		return res.status(404).send("No such item in To Do List");
	} else {
		const deletedItem = toDoList.splice(todoItem, 1);
		res.status(204).send(deletedItem);
	}
};
