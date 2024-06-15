const form = document.querySelector(".form");
const add = document.querySelector(".add");
const srt = document.querySelector(".srt");
const rst = document.querySelector(".rst");
const username = document.querySelector(".name");
const listBox = document.querySelector(".name-box");
let participantes = [];

add.addEventListener("click", (event) => {
  event.preventDefault;

  addName();

});

function addName() {
  let usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preencha com um nome!");
    return;

  } else if (listBox.textContent.length === 0) {
    listBox.innerText = username.value.toUpperCase();

                  //quando você não coloca comparativo, ela entende como se estivesse verificando como "true", se eu quisesse como "false" eu colocaria no inicio um "!"
  } else if ( participantes.includes(username.value.toUpperCase()))  {
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

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector(".not");

  textMessage.innerText = message;
  formItem.className = "name error";
}
