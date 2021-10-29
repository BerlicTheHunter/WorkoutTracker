//* ----- Required Modules and Files ----- *\\

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require('path');
const routes = require('./routes')

//* ----- Set port and app variables ------ *\\

const PORT = process.env.PORT || 3001;
const app = express();

//* ----- Initialize Middleware ----- *\\

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(routes)

//* ----- Initialize Database Connection ----- *\\

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


//* ----- Initialize App ----- *\\

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});