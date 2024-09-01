const todoValidator = (req, res, next) => {
	const { name, status, type } = req.body;

	if (!name || !status || !type) {
		return res.status(400).send("You need to include all fields to add a ToDo");
	}

	next();
};

module.exports = todoValidator;
