const fun2 = (event) => {
  console.log("Clicked!");
};
const btn1 = document.querySelector(
  "body > main > section:nth-child(2) > div > div:nth-child(1) > div > div > button"
);
btn1.addEventListener("click", function (event) {
  console.log(this);
  console.log(event);
});
btn1.addEventListener("click", fun2);

document
  .querySelector(
    "body > main > section:nth-child(2) > div > div:nth-child(2) > div > div > button"
  )
  .addEventListener("mouseover", (e) => {
    console.log("Mouseover");
  });

document.querySelector("#name").addEventListener("input", (e) => {
  console.log("INPUT!");
});

btn1.removeEventListener("click", fun2);

const card5 = document.querySelector(
  "body > main > section:nth-child(2) > div > div:nth-child(5) > div"
);
card5.addEventListener("click", fun2);

// Arrow function vs Function "normal"
const btn5 = document.querySelector(
  "body > main > section:nth-child(2) > div > div:nth-child(5) > div > div > button"
);
btn5.addEventListener("click", () => {
  console.log("Arrow");
  console.log(this); // Window
  document
    .querySelector(
      "body > main > section:nth-child(2) > div > div:nth-child(5) > div > div > button"
    )
    .classList.replace("btn-info", "btn-danger");
});
btn5.addEventListener("click", function () {
  console.log("Normal");
  console.log(this); // Elemento em que foi clicado
  this.classList.replace("btn-info", "btn-danger");
});
// Ao clicar no botão "Read More" do 6º card, alterar o background-color do mesmo para red.
const btn6 = document.querySelector(
  "body > main > section:nth-child(2) > div > div:nth-child(6) > div > div > button"
);
let count = 0;
btn6.addEventListener("click", function () {
  const card6 = document.querySelector(
    "body > main > section:nth-child(2) > div > div:nth-child(6) > div"
  );
  card6.classList.replace("bg-light", "bg-danger");
  console.log(++count);
});

// Validar se o `input` email, contém um email válido. Caso não tenha, tornar a `color` do elemento vermelho, tornar verde caso contrário.
// Email válido: (>=3)@(>=3).(>=2) -> text-success
// Email inválido: -> text-danger
// Nome evento é: "input"
function testarEmailInput(emailInput) {
  const primeiroSplit = emailInput.value.split("@");
  if (primeiroSplit.length !== 2) {
    return false;
  }
  if (primeiroSplit[0].length < 3) {
    return false;
  }
  const segundoSplit = primeiroSplit[1].split(".");
  if (segundoSplit.length !== 2) {
    return false;
  }
  if (segundoSplit[0].length < 3) {
    return false;
  }
  if (segundoSplit[1].length < 2) {
    return false;
  }
  return true;
}
const emailInput = document.querySelector("#email");
emailInput.addEventListener("input", function () {
  if (testarEmailInput(emailInput) == false) {
    emailInput.classList.remove("text-success");
    emailInput.classList.add("text-danger");
  } else {
    emailInput.classList.add("text-success");
    emailInput.classList.remove("text-danger");
  }
});

function testarNameInput(nameInput) {
  if (nameInput.value.length < 3) {
    return false;
  }
  return true;
}
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", function () {
  if (testarNameInput(nameInput) == false) {
    nameInput.classList.remove("text-success");
    nameInput.classList.add("text-danger");
  } else {
    nameInput.classList.add("text-success");
    nameInput.classList.remove("text-danger");
  }
});

function testarForm() {
  const emailInput = document.querySelector("#email");
  if (testarEmailInput(emailInput) === false) {
    return false;
  }
  const nameInput = document.querySelector("#name");
  if (testarNameInput(nameInput) === false) {
    return false;
  }
  return true;
}
