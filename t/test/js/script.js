// Ex1
setTimeout(() => {
  const main = document.querySelector("main");
  // main.style.backgroundColor = "yellow";
  main.classList.add("bg-warning");
}, 1000);

// Ex2
setTimeout(() => {
  const input = document.querySelector("input#name");
  // input.style.color = "red";
  input.classList.add("text-danger");
}, 1000);

// Ex3
setTimeout(() => {
  const name = document.querySelector("body > footer > div > div > div > p");
  const novaString = name.innerHTML.replace("YourName", "Breno");
  name.innerHTML = novaString;
}, 1000);

// Ex4
setTimeout(() => {
  const a = document.querySelector("body > main > section:nth-child(2) > div > div:nth-child(1) > div > div > a");
  a.setAttribute("href", "http://google.com");
}, 1000);
