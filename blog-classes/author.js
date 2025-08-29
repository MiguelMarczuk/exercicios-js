const Post = require("./post")

class Author{
    constructor(nome){
        this.nome = nome
        this.posts = []
    }

    escreverPost(tittle,body){
        const post = new Post(tittle, body, this) // aq criamos um post recebendo o Post.js 
        this.posts.push(post) // so colocamos o this pois o vs code reconhece o restosdo parametros do Post.js
        return post 
    }
}

module.exports = Author