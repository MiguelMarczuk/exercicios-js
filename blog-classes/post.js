const Comment = require("./comment")

class Post{
    constructor(tittle, body, author){
        this.tittle = tittle
        this.body = body
        this.author = author
        this.comments = []  // criamos um array vazio para armazenas varios comentarios
        this.creatDat = new Date()
    }
     // aq criamos uma metodo para adicionar o comementario do comment.js no array do Post do paramentro comments
    adicionarComentario(username, content){
        this.comments.push(new Comment(username, content))
    }
}   // damos os paramentos na instancia para o new Comment receber(reconhecer) no contrutor 

module.exports = Post