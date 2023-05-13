// Set up requirements
const express = require("express");
// Set up Express
const app = express();
const PORT = process.env.PORT || 3001;

// set up the routes to be imported
const api = require("./routes/apiRoutes")
const html = require("./routes/htmlRoutes")

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", api)
app.use("/", html)

// Initiate Listener to start server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});