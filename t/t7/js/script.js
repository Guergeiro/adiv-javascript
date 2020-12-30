// Ir buscar o elemento pai
const btn1 = document.querySelector("button[type=submit]");
console.log(btn1);
console.log(btn1.parentNode);

const row = document.querySelector("body > main > section:nth-child(2) > div");
console.log(row);
// Ir buscar os vários filhos
console.log(row.children);
console.log(row.querySelectorAll("div.col-md-4"));
// Ir buscar o 1º filho
console.log(row.firstElementChild);
// Ir buscar o último filho
const rowLastChild = row.lastElementChild;
rowLastChild.innerHTML = "<p>Ola</p>";
console.log(rowLastChild);

const rowFirstChild = row.firstElementChild;
// Navegar para os seguintes irmãos
console.log(
  rowFirstChild.nextElementSibling.nextElementSibling.nextElementSibling
);

// Navergar para o irmão anterior
console.log(
  rowFirstChild.nextElementSibling.nextElementSibling.nextElementSibling
    .previousElementSibling
);

// Criar um elemento dinâmico
const novoBotao = document.createElement("button"); // <button></button> -- <div></div> -- <form></form>
novoBotao.classList.add("btn", "btn-danger");
novoBotao.setAttribute("type", "button");
novoBotao.innerText = "Click Me!";
novoBotao.addEventListener("click", () => {
  console.log("Clicked!");
});
rowLastChild.appendChild(novoBotao);

// Eliminar o último card
//row.lastElementChild.remove();

const lastChild = row.lastElementChild;
row.removeChild(lastChild);

// Eliminar a 4ª coluna do form
const elm = document.querySelector("#subject").parentElement;
elm.remove();

// Criar outra vez o elemento col do form que foi eliminado, recorrendo ao `document.createElement`
setTimeout(function () {
  // Criar o elemento pai
  const div = document.createElement("div");
  div.setAttribute("class", "col-md-12");

  // Label
  const label = document.createElement("label");
  label.setAttribute("for", "subject");
  label.innerText = "Subject";

  // Input
  const input = document.createElement("input");
  input.setAttribute("id", "subject");
  input.setAttribute("name", "subject");
  input.setAttribute("type", "text");
  input.classList.add("form-control");

  // Colocar label+input na div
  div.appendChild(label);
  div.appendChild(input);

  // Colocar div no form
  document.querySelector("form").appendChild(div);
}, 1000);

const card4 = document.querySelector(
  "body > main > section:nth-child(2) > div > div:nth-child(4)"
);
document
  .querySelector("body > main > section:nth-child(2) > div")
  .replaceChild(novoBotao, card4);

document.querySelector("body > div > button").addEventListener("click", (e) => {
  e.preventDefault();
  e.target.parentElement.remove();
});
