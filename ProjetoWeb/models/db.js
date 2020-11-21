const Sequelize = require("sequelize")

//Fazer conexão com o bd
const sequelize = new Sequelize('sistemadiogo', 'root', 'admin', {
    host:"localhost",
    dialect: 'mysql'
})

//Método para verificar se a conexão foi estabelecida
sequelize.authenticate().then(function (){
    console.log("Conectado com sucesso")
}).catch(function (erro){
    console.log("Deu ruim "+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}