const Author = require("./author");

 const john = new Author('Miguel')

 const post = john.escreverPost("titulodo post:", "lorem ipsum dolor sic...")

 post.adicionarComentario('miguel marc', "top!!")
 post.adicionarComentario("pedro", "legall")

 console.log(john);
 console.log(post);
