//bilbioteca para servidor
const express = require('express')
const app = express()

//null
const handlebars = require('handlebars')

//biblioteca para realizar conexão com o bd
const Sequelize = require("sequelize")


//Config
    //Templete engine (handlebars)
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //conexão com o bd
    const sequelize = new Sequelize('test', 'root', 'admin', {
        host:"localhost",
        dialect: 'mysql'
    })


//Rotas
    app.get('/login', function(req, res){
        res.send("Loga ai bicho")
    })

//deve sempre ser a ultima linha do codigo, inicia servidor
app.listen(8081, function(){
    console.log("Servidor rodando na url localhost:8081")
})