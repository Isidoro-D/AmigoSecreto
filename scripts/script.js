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

  } else if (listBox.textContent.length === 0) {
    listBox.innerText = usernameValue;

/*  } else if (usernameValue === listBox.textContent) {
    errorInput(username, "Já colocaram esse nome!"); */
  } else {
    listBox.innerText += ', ' + usernameValue;
    const formItem = username.parentElement
    formItem.classList = "name";
  } 
  participantes.push(username.value)
  username.value = '';
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector(".not");

  textMessage.innerText = message;
  formItem.className = "name error";
}
