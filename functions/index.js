const functions = require("firebase-functions");


const admin = require("firebase-admin");
const serviceAccount = require("./telos-task-2ee4b-firebase-adminsdk-9uq9m-c094aa3295.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "telos-task-2ee4b.appspot.com"
});


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
