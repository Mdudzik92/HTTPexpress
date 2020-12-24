// Bringing in Express
const express = require("express");
const path = require("path");

// Initializing Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.delete("post/:id", (req, res) => {
	// DATABASE STUFF

	res.json({ msg: `Post ${req.params.id} deleted` });
});

// Setting Express to listen on port 5000
app.listen(5000, () => console.log(`Server started on 5000`));
