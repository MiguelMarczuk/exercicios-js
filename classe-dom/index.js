const Mage = require("./mage");
const Thief = require("./thief");
const Warrior = require("./warrior");

const arthur = new Mage('Arthur', 90, 4, 2, 14)

const beatrice = new Thief('Beatrice', 140,22,8)

const cain = new Warrior('Cain', 200,14,12,4)


cain.mudarPosicao()

arthur.atacando(beatrice)

arthur.atacando(cain)




console.table({arthur,beatrice,cain})


cain.mudarPosicao()
cain.atacando(arthur)
arthur.heal(arthur)
arthur.heal(arthur)
arthur.heal(arthur)
arthur.heal(arthur)
cain.atacando(arthur)
beatrice.atacando(arthur)
console.table({arthur,beatrice,cain})




