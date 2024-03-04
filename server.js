//import modules
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

//setting port default value
const PORT = process.env.PORT || 3001;
//creating exppress app
const app = express();

//middleware to parse imcoming request bodies as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up routes
app.use("/", routes);

//once databse is open start the server and listen for incoming requests
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
