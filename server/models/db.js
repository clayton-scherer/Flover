const mongoose = require("mongoose");

const { username, password } = require("../config/config");

const dbConnection = `mongodb+srv://${username}:${password}@flover-pk9e6.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbConnection, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});
