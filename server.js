// Bringing in Express
const express = require("express");
const path = require("path");

// Initializing Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/contact", (req, res) => {
	if (!req.body.name) {
		return res.status(400).send("Name is required");
	}

	// DATABASE STUFF
	res.status(201).send(`Thank you ${req.body.name}`);
});

app.post("/login", (req, res) => {
	if (!req.header("x-auth-token")) {
		return res.status(400).send("No Token");
	}

	if (req.header("x-auth-token") !== "123456") {
		return res.status(401).send("Not authorized");
	}

	res.send("Logged in");
});

// Setting Express to listen on port 5000
app.listen(5000, () => console.log(`Server started on 5000`));
