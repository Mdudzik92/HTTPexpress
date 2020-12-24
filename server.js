// Bringing in Express
const express = require("express");
const path = require("path");

// Initializing Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Setting Express to listen on port 5000
app.listen(5000, () => console.log(`Server started on 5000`));
