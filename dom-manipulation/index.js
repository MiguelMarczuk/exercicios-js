function escalarJogador() {
  const posicao = document.getElementById("posicao").value;
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value;
  const confirmar = confirm(
    "deseja escaçar o jogador " +
      nome +
      "( " +
      numero +
      " )" +
      " na posição " +
      posicao +
      "?"
  );
  if (confirmar) {
    const lista = document.getElementById("lista");
    const li = document.createElement("li");
    li.id = numero;
    li.innerText = posicao + "(" + numero + ") " + nome;
    lista.appendChild(li);
  }
  document.getElementById("posicao").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("numero").value = "";
}

function excluirJogador() {
  const numero = document.getElementById("excluir").value;
  const removerJogador = document.getElementById(numero);
  const confirmar = confirm(
    "deseja excluir o jogador" + removerJogador.innerText + "?"
  );
  if (confirmar) {
    document.getElementById("lista").removeChild(removerJogador);
    document.getElementById("excluir").value = "";
  }
}
