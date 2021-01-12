const obje = {
  key: "valor",
};

// Atribuir valor
sessionStorage.setItem("chave", "Valor");

// Ir buscar um valor
const valor1 = sessionStorage.getItem("chave");
console.log(valor1);

// Eliminar um valor
sessionStorage.removeItem("chave");
const valor2 = sessionStorage.getItem("chave");
console.log(valor2);

document.querySelector("button").addEventListener("click", () => {
  sessionStorage.setItem("btn", "ola");
});

setTimeout(() => {
  const val = sessionStorage.getItem("btn");
  document.querySelector("p#sess").innerHTML = `${val}`;
}, 5000);

// Slide
const checked = localStorage.getItem("input");
const inputElement = document.querySelector("input[type=checkbox]");

if (checked !== null) {
  if (checked == "true") {
    inputElement.setAttribute("checked", true);
  }
} else {
  const os = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (os === true) {
    inputElement.setAttribute("checked", true);
  }
}

document
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    console.log(e.target.checked);
    if (e.target.checked == true) {
      localStorage.setItem("input", true)
    } else {
      localStorage.setItem("input", false)
    }
  });

const test = {
  nome: "Breno",
  carros: [
    {
      marca: "Ferrari"
    },
    {
      marca: "Peugeot"
    }
  ],
}

localStorage.setItem("test", JSON.stringify(test))

const pessoa = JSON.parse(localStorage.getItem("test"))
console.log(pessoa)
