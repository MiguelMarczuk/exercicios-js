const Caracter = require("./caracter");


module.exports = class Thief extends Caracter  {
   
   atacando(alvo){
          alvo.pontodeVida -= (this.ataque - alvo.defesa) *2 
   }
    

}