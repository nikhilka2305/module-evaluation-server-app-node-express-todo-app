const express = require("express");
const toDoRoutes = require("./routes/toDoRoutes");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
	res
		.status(200)
		.send("<h1>Welcome to To Do App built with NodeJS & ExpressJS</h1>");
});

app.use("/todos", toDoRoutes);

app.listen(port, () => {
	console.log(`Listening at ${port}`);
});
