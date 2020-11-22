const db = require('./db')

//criação de tabelas usando Sequelize
const Post = db.sequelize.define('usuario',{
    usuario:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    }
})



module.exports = Post

//comentado para nao executar arquivo por engano e recriar tabela
//Post.sync({force: true})