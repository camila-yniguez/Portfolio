const express = require('express');
const app = express();
const path = require("path");


/*ENRUTADORES*/
const mainRouter = require("./routers/main")

app.use(express.static("public"));

/* MIDDLEWARE de RUTAS*/
app.use("/", mainRouter);


app.listen(3000, ()=> {
    console.log('Servidor funcionando');
});

