let cartas = [];

let escolha = "";
do {
  escolha = prompt(
    "cartas no baralho:\n " +
      cartas.length +
      "\n1) adicionar uma carta" +
      "\n2) puxar uma carta " +
      "\n3) sair."
  );
  switch (escolha) {
    case "1":
      let novaCarta = prompt("adicionando carta \n insira o nome da carta ");

      cartas.push(novaCarta);
      alert(cartas.length + " foi adicionado no baralho");
      /// pop é usado pra tirar o ultimo iten do array
      break;
    case "2":
      const cartaPuxada = cartas.pop();

      if (cartaPuxada) {
        alert("a carta puxada foi " + cartaPuxada);
      } else {
        alert("nao há carta para puxar");
      }
      break;

    case "3":
      alert("vc escolheu a encerrar");
      alert("encerrando");
      break;
    default:
      alert("opcao errada");
  }
} while (escolha !== "3");
