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

const port = process.env.PORT || 3040;
app.listen(port, () =>console.log("Servidor corriendo en el puerto $(port)"));