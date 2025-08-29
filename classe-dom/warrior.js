const Caracter = require("./caracter");

module.exports = class Warrior extends Caracter{

    constructor(name, pontodeVida, ataque, defesa, escudo){
        super(name, pontodeVida, ataque, defesa)
       this.escudo = escudo
       this.posicao = 'ataque'
    }

    atacando(alvo){
      if(this.posicao == 'ataque'){
        alvo.pontodeVida -= this.ataque - alvo.defesa
      }
    }

    mudarPosicao(){
        if(this.posicao ==='ataque'){
            this.posicao = 'defender'
            this.defesa += this.escudo 
        }else{
            this.posicao = 'ataque'
            this.defesa -= this.escudo 
        }
    }
}