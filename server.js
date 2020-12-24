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

// Setting Express to listen on port 5000
app.listen(5000, () => console.log(`Server started on 5000`));
