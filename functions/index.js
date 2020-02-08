const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const uploadController = require("./controllers/uploadController");

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/uploadFile", uploadController.upload);

exports.widgets = functions.https.onRequest(app);
