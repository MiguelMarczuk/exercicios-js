const main = document.querySelector("main");
const root = document.querySelector(":root"); // pegamos root do css
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

//Aq é para os butoes funcionar clicando neles, o uso do forEatch para executar cada um deles
// usamos o .charkey pq essa é o nome da classe dele no html
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value; // usamos o dataset.value por conta do nome data-value do html
    input.value += value; // com isso o input vai receber o value que sera os butoes clicados
  });
});

// aqui colocar função no butao C para limpar o input , o uso do focus seria para quando eu usar o C
// ele voltar com foco no input e poder continuar escrevendo
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

//aq é para so aparecer as teclas determinadas pelo teclado usando o keydown
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  } //aq é para conseguir umar a o backspace, o slice é para cortar no caso deletar
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});
// colocando função no butao de = para calcular
document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR"; //aq adicionamos o erro para caso coloque uma conta que nao funcione  mas o eval serve para perceber a propria matematica que o js tem e faz automatico,poderia fazer conta por conta para nao fazer isso
  resultInput.classList.add("error");
  const result = eval(input.value); // o uso do eval é perigoso(continua linha 69 e 70)
  resultInput.value = result;
  resultInput.classList.remove("error"); //e a para caso seja uma conta certa ela vai funcionar // isso é um comportamento bem simples
}

// aqui é para copiar os dados para o computador
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget; //isso serve para quem acionou o evento que é o proprio butao
    if (button.innerText === "Copy") {
      //o if é para ver se o texto é igual a copy para acontecer as outras funçoes
      button.innerText = "Copied!"; // aqui quando acionarmos o copy ele vai mudar para copied
      button.classList.add("success"); // adicionamos a classe do css no butao quando for acionado
      navigator.clipboard.writeText(resultInput.value); //essa função cclipboard.writeText é o que faz ser copiado
    } else {
      button.innerText = "Copy"; // o else foi criado para quando nao for copy ele volta para forma padrao
      button.classList.remove("success");
    }
  });

// isso aq serve para trocar o tema do site
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    // usando o if, pegamos o main com o dataset pois no html ta assim, se for igual a dark acontece isso
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light"; //aqui colocamos para mudar o valor do tema no html para light para saber e conseguir trocar dps
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark"; // é o mesmo se nao indeficar o claro vai para o escuro por conta do addventlisterner
  }
});
