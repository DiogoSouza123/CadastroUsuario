//bilbioteca criar para servidor
const express = require('express')
const app = express()

//biblioteca para criar layouts e acessa-las no codigo
var handlebars = require('express-handlebars')


//null 
const bodyParser = require('body-parser')

//biblioteca para realizar conexão com o bd
const Sequelize = require("sequelize")

//classe para conectar no banco de dados e fazer o crud com o bd
const Post = require('./models/Post')




//Config
    //Templete engine (handlebars)
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //BodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //conexão com o bd
    /*const sequelize = new Sequelize('sistemadiogo', 'root', 'admin', {
        host:"localhost",
        dialect: 'mysql'
    })*/


//Rotas
    app.get('/listarusuarios', function(req,res){
        //funcao que retorna todos dados do bd
        Post.findAll().then(function(data){
            res.render('listarusuarios', {data: data})
        })
        
    })

    app.get('/editar/:id', function(req, res){
        Post.findByPk(req.params.id).then(function(usuario){
            console.log(usuario)
            res.render('editarusuario', {usuario: usuario})
        })
    })

    app.get('/', function(req, res){
        res.render('login')
    })

    app.get('/criarusuario', function(req, res){
        res.render('criarusuario')
    })

    app.post('/efetuarlogin', function(req, res){

        //TODO
        //criar metodo para validar login

    })

    app.post('/criarusuario', function(req, res){

        //TODO 
        //criar metodo para não duplicar usuario
        Post.create({
            usuario: req.body.login,
            senha: req.body.senha
        }).then(function(){
            res.render('sucesso')
        }).catch(function(erro){
            res.render('erro')
        })


    })

    app.post('/editarusuario', function(req, res){
        Post.update(
            {usuario: req.body.login}, {
            where: {
                id: req.body.id
            }
        }).then(function(){
            res.render('sucesso')
        })
    })


    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {id: req.params.id}}).then(function(){
            res.send('Sucesso')
        }).catch(function(erro){
            res.send('Não encontrada')
        })
    })

//deve sempre ser a ultima linha do codigo, inicia servidor
app.listen(8081, function(){
    console.log("Servidor rodando na url localhost:8081")
})