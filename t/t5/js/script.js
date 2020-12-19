/*
console.log(document);
const inputName = document.getElementById("name"); // Apenas 1
console.log(inputName);
const inputs = document.getElementsByTagName("input"); // Coleção
console.log(inputs);
const navItems = document.getElementsByClassName("nav-item"); // Coleção
console.log(navItems);

const elements = document.querySelectorAll("main section div.row div .card");
console.log(elements);
const element = document.querySelector("main section div.row div .card");
console.log(element);
const cardinal = document.querySelector("#subject");
console.log(cardinal);

element.innerHTML = "Olá Mundo"; // Alterar o interior do html de um elemento

elements[1].innerHTML =
  "<button type='button' class='btn btn-danger'>Click me!</button>"; // Aplicar qualquer atributo que queiram

setTimeout(() => {
  document.querySelector("input#password").style.color = "red";
  document.querySelector("section").style.backgroundColor = "red";
}, 2000);

setTimeout(() => {
  const ele = document.querySelector("section:last-of-type")
  ele.classList.add("bg-primary");
  console.log(ele.classList)
}, 2000);
setTimeout(() => {
  const ele = document.querySelector("section:last-of-type")
  ele.classList.remove("bg-primary");
}, 4000);
*/

// Alterar o texto do botão do tipo "submit" para "submeter".
setTimeout(() => {
  const elemento = document.querySelector(
    "body > main > section:nth-child(1) > form > div:nth-child(7) > button"
  );
  elemento.innerHTML = "submeter";
  console.log(elemento);
}, 4000);

// Remover a classe "btn-info" e adicionar a classe "btn-outline-dark" ao botão
// do último card que diz "Read More"

setTimeout(function () {
  const btn = document.querySelector(
    "body > main > section:nth-child(2) > div > div:nth-child(6) > div > div > button"
  );
  btn.classList.remove("btn-info");
  btn.classList.add("btn-outline-dark");
}, 5000);
