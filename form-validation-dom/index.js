function creatLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function creatInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn"); // id do button
const form = document.getElementById("devForm"); // id do form
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function (ev) {
  const stackInputs = document.getElementById("stackInputs"); // id da ul

  const newRow = document.createElement("li");
  const rowIndex = inputRows; // aqui foi criado uma constante para atribuir um valor diferente nas id
  inputRows++; // sempre acrescentando +1 a cada li criada
  newRow.id = "inputRow-" + rowIndex; // se inspecionar vai ta inputRow- e numero da li
  newRow.className = "inputRow";

  const techNameLabel = creatLabel("nome: ", "techName- " + rowIndex); // aq atribuimos o valor das tags que colocamos la na funcion label
  const techNameInput = creatInput("techName-" + rowIndex, null, "techName"); // aq o mesmo pensamento da label

  const expLabel = creatLabel("experiencia: ");
  const ad1 = "expRadio- " + rowIndex + ".1";
  const expInput1 = creatInput(
    ad1,
    "0-2 anos",
    "techName-" + rowIndex,
    "radio"
  );
  const expLabel1 = creatLabel("0-2 anos", ad1);

  const ad2 = "expRadio- " + rowIndex + ".2";
  const expInput2 = creatInput(
    ad2,
    "3-4 anos",
    "techName-" + rowIndex,
    "radio"
  );
  const expLabel2 = creatLabel("3-4 anos", ad2);

  const ad3 = "expRadio- " + rowIndex + ".3";
  const expInput3 = creatInput(
    ad3,
    "0-2 anos",
    "techName-" + rowIndex,
    "radio"
  );
  const expLabel3 = creatLabel("5+ anos", ad3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expInput1,
    expLabel1,
    expInput2,
    expLabel2,
    expInput3,
    expLabel3,
    removeRowBtn
  ); // aq colocamos os valores dentro do newrow para ficar mais facil de chamar elas

  stackInputs.appendChild(newRow); // aqui colocamos a função do newroun dentro do stack para que funcione no html
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fulnameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    // forEach serve para iterrar dentro do codigo todo de uma vez, percorrer por tudo e fazer funcionar
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]' // aq foi criado para que cada linha seja salva separadamente e nao junta
    ).value; // por conta do row.id, se nao tivesse ele ficaria todos igual e puxaria junto e nao separaria dentro do array
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, ex: techExp }); // aqu puxamos o resultado para o array que fica com esses nomes e os resultados marcados por conta do .value
  });

  const newDev = { fullname: fulnameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("dev cadastrado com sucesso!");

  fulnameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });
  console.log(developers);
});
