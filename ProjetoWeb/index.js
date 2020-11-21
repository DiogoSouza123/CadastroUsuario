//bilbioteca criar para servidor
const express = require('express')
const app = express()

//biblioteca para criar layouts e acessa-las no codigo
var handlebars = require('express-handlebars')


//null 
const bodyParser = require('body-parser')

//biblioteca para realizar conexão com o bd
const Sequelize = require("sequelize")



//Config
    //Templete engine (handlebars)
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //BodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //conexão com o bd
    const sequelize = new Sequelize('test', 'root', 'admin', {
        host:"localhost",
        dialect: 'mysql'
    })


//Rotas
    app.get('/login', function(req, res){
        res.render('login')
    })

    app.post('/efetuarlogin', function(req, res){
        let login = req.body.login
        res.send('Login efetuado com sucesso '+login)


    })

//deve sempre ser a ultima linha do codigo, inicia servidor
app.listen(8081, function(){
    console.log("Servidor rodando na url localhost:8081")
})