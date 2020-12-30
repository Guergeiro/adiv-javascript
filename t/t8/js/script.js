// Callbacks
function somafn1(param1, param2) {
  return param1 + param2;
}

function alterarPar(soma) {
  document.querySelector("#soma").innerHTML = soma;
}

const soma1 = somafn1(3, 7);
alterarPar(soma1);

function somafn2(param1, param2, callback) {
  const soma2 = param1 + param2;
  callback(soma2);
}

somafn2(7, 7, alterarPar);

somafn2(6, 6, (soma) => {
  document.querySelector("#soma").innerHTML = `Valor soma: ${soma}`;
});

// Async
document.querySelector("button#btn1").addEventListener("click", () => {
  console.log("I was clicked!");
});

setTimeout(() => {
  console.log("Timeout");
}, 1000);

document.querySelector("button#btn2").addEventListener("click", () => {
  setTimeout(() => {
    console.log("BTN2 was clicked!");
  }, 1000);
});

// Promises
const prm1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("index.html");
  }, 3000);
});

prm1.then((html) => {
  console.log(`Recebi o ${html}`);
});

function buscar(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param === "google.com") {
        resolve("index.html");
      } else {
        reject("Só aceitamos google.com");
      }
    }, 3000);
  });
}

buscar("google.com").then((html) => {
  console.log("Recebi google.com");
});

buscar("google.pt").catch((err) => {
  console.log(`Houve um erro. Erro: ${err}`);
});

document.querySelector("button#sub").addEventListener("click", () => {
  const inp = document.querySelector("input");
  const resultado = document.querySelector("p#resultado");
  resultado.innerHTML = "";
  buscar(inp.value)
    .then((data) => {
      resultado.classList.remove("text-danger");
      resultado.classList.add("text-success");
      resultado.innerHTML = data;
    })
    .catch((err) => {
      resultado.classList.add("text-danger");
      resultado.classList.remove("text-success");
      resultado.innerHTML = err;
    });
});

// JSON - JavaScript Object Notation
const usr1 = {
  nome: "Inês",
  sexo: "F",
};
const usr2 = {
  nome: "PEdro",
  sexo: "M",
};
const usr1json = JSON.stringify(usr1);
console.log(usr1);
console.log(usr1json);

const arrUsrs = [usr1, usr2];
const arrUsrsjson = JSON.stringify(arrUsrs);
console.log(arrUsrsjson);
console.log(JSON.parse(arrUsrsjson));

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (const user of data) {
      const p = document.createElement("p");
      p.innerText = user.name;
      document.querySelector("body").appendChild(p);
    }
  })
  .catch((err) => {
    console.error(err);
  });

fetch(
  "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow"
)
  .then((res) => res.json())
  .then((data) => console.log(data));

/*
document.querySelector("#criar").addEventListener("click", (e) => {
  console.log(e);
  const inp = document.querySelector("input#nome");
  const novoUser = {
    name: inp.value,
  };
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(novoUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const p = document.createElement("p");
      p.innerText = data.name;
      document.querySelector("body").appendChild(p);
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});
*/

// Async/Await
document.querySelector("#criar").addEventListener("click", async (e) => {
  console.log(e);
  const inp = document.querySelector("input#nome");
  const novoUser = {
    name: inp.value,
  };
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(novoUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    const p = document.createElement("p");
    p.innerText = data.name;
    document.querySelector("body").appendChild(p);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});
