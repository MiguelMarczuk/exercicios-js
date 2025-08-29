 module.exports = class Caracter {
    constructor(nome, pontodeVida, ataque, defesa){
        this.nome = nome
        this.pontodeVida = pontodeVida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacando(alvo){
        alvo.pontodeVida -= this.ataque - alvo.defesa
    }
}