class Product {
    constructor(name , description , price ){
        this.name= name
        this.description = description
        this.price = price
        this.inStock =   0
      
    }
   adicionarStock(quantidade){
    this.inStock += quantidade
   
}

 calculateDescont(desconto){
    return this.price * ((100 - desconto) / 100)
 }

}



const caneta = new Product("CANETA AZUL", "SOLTA TINTA", 5)

const precoComDesconto = caneta.calculateDescont(15)

caneta.adicionarStock(29)



console.log(caneta);
console.log(precoComDesconto)