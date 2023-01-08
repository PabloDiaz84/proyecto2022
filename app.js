const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.listen(3040, () => console.log("Servidor 3040 corriendo"));