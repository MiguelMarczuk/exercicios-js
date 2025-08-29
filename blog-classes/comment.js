
//aqui criamos um comentario que fica interligado com o post.js
class Comment{
    constructor(username , content) {
        this.username = username
        this.content = content
        this.creatDate = new Date()
    }
}

module.exports = Comment