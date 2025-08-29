function triângulo() {
  const base = prompt("informe a base do triangulo:");
  const altura = prompt("informe a altura do triangulo: ");
  return (base * altura) / 2;
}

function retângulo() {
  const base = prompt("informe a base do triangulo:");
  const altura = prompt("informe a altura do triangulo: ");
  return base * altura; // a parte do retur é a saida que é essencial para que funcione a funciont
}

function quadrado() {
  const lado = prompt("me informe o valor do lado do quadrado");
  return lado * lado;
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt("informe a base maior do trapezio"));
  const baseMenor = parseFloat(prompt("informe a base menor do trapezio"));
  const altura = prompt("informe a altura do trapezio");
  return ((baseMaior + baseMenor) * altura) / 2;
}
function areaCirculo() {
  const raio = prompt("informe o raio do circulo: ");
  return 3.14 * raio * raio;
}

function exibirmenu() {
  return prompt(
    "seja bem vindo \n" +
      "oque vc deseja calcular?   \n" +
      "\n1) área do triângulo base * altura / 2  " +
      "\n2) área do retângulo base * altura " +
      "\n3) área do quadrado lado² " +
      "\n4) área do trapézio (base maior + base menor) * altura / 2 " +
      "\n5) área do círculo pi * raio² (considere pi = 3.14) " +
      "\n6) sair "
  );
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirmenu(); // opcao = exibir ... pq ela sempre sera exutada uma vez por isso vai ser chamada
    // o jeito de usar a tag opçao é a mesma mas quando ela é anexada com a função tem que ser
    // ela  = a funsao () e esse parentese é importante para q funcione caso tenha parametro coloque caso n deixe em branco
    let resultado;
    switch (opcao) {
      case "1":
        resultado = triângulo();
        break;
      case "2":
        resultado = retângulo();
        break;
      case "3":
        resultado = quadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo;
        break;
      case "6":
        alert("saindo");
        break;
      default:
        alert("opcao invalida: ");
    }
    if (resultado) {
      alert("resultado é : " + resultado);
    }
  } while (opcao !== "6");
}

executar();
