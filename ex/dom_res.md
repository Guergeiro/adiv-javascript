# Exercícios DOM - Resolução

```javascript
// Ex 1
document.querySelector("main").backgroundColor = "yellow";
```

```javascript
// Ex 2
document.querySelector("input#name").color = "red";
```

```javascript
// Ex 3
setTimeout(() => {
  document.querySelector("footer p").innerText = "&copy; 2020 Breno Salles";
}, 1000);
```

```javascript
// Ex 4
setTimeout(() => {
  document
    .querySelector(
      "body > main > section:nth-child(2) > div > div:nth-child(1) > div > div > a"
    )
    .setAttribute("a", "https://google.com");
}, 1000);
```

```javascript
// Ex 5
setTimeout(() => {
  document
    .querySelector(
      "body > main > section:nth-child(2) > div > div:nth-child(3) > div > div > a"
    )
    .setAttribute("a", "https://facebook.com");
}, 1000);
```

```javascript
// Ex 6
setTimeout(() => {
  document
    .querySelector(
      "body > main > section:nth-child(2) > div > div:nth-child(6) > div > div > a"
    )
    .setAttribute("a", "https://brenosalles.com");
}, 1000);
```

```javascript
// Ex 7
setTimeout(() => {
  document.querySelector("input#subject").setAttribute("type", "number");
}, 1000);
```

```javascript
// Ex 8
setTimeout(() => {
  const cards = document.querySelectorAll(".card");
  cards[cards.length - 2].parentElement.remove();
}, 1000);
```

```javascript
// Ex 9
setTimeout(() => {
  const cards = document.querySelectorAll(".card");
  cards[cards.length - 2].parentElement.remove();
}, 1000);
```

```javascript
// Ex 10
setTimeout(() => {
  const btn = document.querySelector(
    "body > main > section:nth-child(1) > form button[type=button]"
  );
  btn.classList.remove("btn-outline-danger");
  btn.classList.add("btn-danger");
}, 1000);
```
