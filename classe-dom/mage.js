const Caracter = require("./caracter");

 
module.exports = class Mage extends Caracter{

    constructor(name, pontodeVida, ataque, defesa, magia){
        super(name, pontodeVida, ataque, defesa)
        this.magia = magia
    }

    atacando(alvo){
        alvo.pontodeVida -= (this.ataque + this.magia) - alvo.defesa
    }

    heal(alvo){
        alvo.pontodeVida +=  this.magia * 2
    }
 }