let pacient = [];

let escolha = "";
do {
  let novoPaciente = "";
  // esse pacient[i] tem q ter para separar a array sozinha se nao tivesse todas os nomes
  // q fosse colocado ficaria juntos e nao separados
  for (let i = 0; i < pacient.length; i++) {
    novoPaciente += i + 1 + "!-" + pacient[i] + "\n";
  }
  escolha = prompt(
    "seja bem vindo\n " +
      novoPaciente +
      "\n1) adicionar paciente" +
      "\n2) consultar paciente " +
      "\n3) sair"
  );
  switch (escolha) {
    case "1":
      let novoPaciente = prompt("digite o nome do paciente: ");
      pacient.push(novoPaciente);
      alert("vc foi adicionado ao " + pacient.length + " lugar na fila");

      break;
    case "2":
      const pacienteConsultado = pacient.shift();

      if (pacienteConsultado) {
        alert(pacienteConsultado + " paciente escolhido para consulta");
      } else {
        alert("nao há pacientes na fila");
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
