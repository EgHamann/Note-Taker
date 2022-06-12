const express = require('express');
const path = require('path');
let routes = require('./routes.js');

const app = express();

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.listen(3000)
