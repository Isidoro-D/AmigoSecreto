const form = document.querySelector(".form");
const add = document.querySelector(".add");
const srt = document.querySelector(".srt");
const rst = document.querySelector(".rst");
const username = document.querySelector(".name");
const listBox = document.querySelector(".name-box");
const list = document.querySelector(".list_sweepstakes");
let participantes = [];

// BOTÃO ADICIONAR

add.addEventListener("click", () => {

  addName();

});

rst.addEventListener("click", () => {

  restart();

});

srt.addEventListener("click", () => {

  prizes();

});

function addName() {
  let usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preencha com um nome!");
    return;

  } else if (listBox.textContent.length === 0) {
    listBox.innerText = username.value.toUpperCase();

    //quando você não coloca comparativo, ela entende como se estivesse verificando como "true", se eu quisesse como "false" eu colocaria no inicio um "!"
  } else if (participantes.includes(username.value.toUpperCase())) {
    errorInput(username, "Já colocaram esse nome!");
    return;

  } else {
    listBox.innerText += ', ' + username.value.toUpperCase();
    const formItem = username.parentElement
    formItem.classList = "name";
  }
  participantes.push(username.value.toUpperCase())
  username.value = '';
}

// BOTÃO REINICIAR

function restart() {
  form.reset();
  listBox.innerText = '';
  list.innerText = '';
  participantes = [];
}

// BOTÃO SORTEIO

function prizes() {
  if (participantes.length < 4) {
    errorInput(username,'Adicione ao menos 4 participantes!');
    return;
  }
  list.innerHTML= '';
  random(participantes);
  for (let i = 0; i < participantes.length; i++) {
    if (i == participantes.length - 1) {
      list.innerHTML = list.innerHTML + '<li>' + participantes[i] + ' --> ' + participantes[0] + '</li>';
    } else {
      list.innerHTML = list.innerHTML + '<li>' + participantes[i] + ' --> ' + participantes[i + 1] + '</li>';
    }
  }

}

function random(lista) {
  lista.sort(() => Math.random() - 0.5);
}



// FUNÇÃO DE ERRO

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector(".not");

  textMessage.innerText = message;
  formItem.className = "name error";
}
