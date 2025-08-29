const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

const turnPlayer = document.getElementById('turnPlayer')

const board = [
  [" "," "," "],
  [" "," "," "],
  [" "," "," "],
  
]

let vez = "player1"
const jogoVelha = document.getElementsByClassName('cursor-pointer')


  //colocar um funçao geral dps
  document.getElementById("start").addEventListener("click", function() {
   
   
    comecar()
  
  }
      
  )


  //colocar funcao ainda
  function comecar(){
  for(let i = 0; i<jogoVelha.length; i++){
    board.push(jogoVelha)
  jogoVelha[i].addEventListener("click", function() {
   // this.innerText = "X" // o this pegou a função do window da pagina e fez funcionar
    
  
    if(vez === "player1"){
      turnPlayer.innerText = player1.value 
      this.innerText = "X"
      turnPlayer.innerText = player1.value 
    
      vez = "player2"

     }else if(vez === "player2"){
      turnPlayer.innerText = player2.value 
      this.innerText = "O"
      
      turnPlayer.innerText = player2.value 
      vez = "player1"
     }
    
  })
}
  
}

//ta com problema de sincronização no começar acho q colocando tudo na função arruma
 
function verificarVitoria() {
  
}



  