class User {
    constructor(name , email, password){
       this.name = name
       this.email = email
       this.password = password

    }
   verificLogin(email, password){
    if(this.email === email && this.password === password){
        console.log("login realizado com sucesso")
    }else{
        console("falha no login!, email ou senha incorrestos.")
    }
   }
}


const miguel = new User("Miguel", "miguelnicolau95@gmail.com", "1234")

console.log(miguel);
miguel.verificLogin("miguelnicolau95@gmail.com", "1234")



