# Exercícios fundamentos II - Resolução

```javascript
// Ex1
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
const str = prompt("Insira uma string.");
console.log(str.reverse());
```

```javascript
// Ex2
String.prototype.changeCharCode = function (amount) {
  if (amount === undefined) {
    throw new Error("Please pass a value.");
  }
  if (typeof amount != "number") {
    throw new Error("Invalid type. Please pass a number.");
  }
  let out = "";
  for (let i = 0; i < this.length; i++) {
    const tmp = this.charCodeAt(i);
    out += String.fromCharCode(tmp + 1);
  }
  return out;
};
const str = prompt("Insira uma string.");
console.log(str.changeCharCode(1));
```

```javascript
// Ex3
String.prototype.capitalize = function () {
  return this.replace(/\b\w/g, (c) => c.toUpperCase());
};
const str = prompt("Insira uma frase.");
console.log(str.capitalize());
```

```javascript
// Ex4
function transformMinutes(minutes) {
  if (minutes < 0) {
    throw new Error("Must be a positive number.");
  }
  const hours = minutes / 60;
  const transformedMinutes = minutes % 60;
  return `${Math.floor(hours)}h${transformedMinutes}min`;
}
const n = parseInt(prompt("Insira um número para converter."));
console.log(transformMinutes(n));
```

```javascript
// Ex5
String.prototype.sort = function () {
  return this.split("").sort().join("");
};
const str = prompt("Insira uma string.");
console.log(str.sort());
```

```javascript
// Ex6
String.prompt.vowels = function () {
  return this.replace(/[^aeiou]/g, "").length;
};
const str = prompt("Insira uma string.");
console.log(str.vowels());
```

```javascript
// Ex7
function count(str) {
  const str1 = str.replace(/[^P]/g, "").length;
  const str2 = str.replace(/[^T]/g, "").length;
  return str1 == str2;
}
const str = prompt("Insira uma string.");
console.log(count(str));
```

```javascript
// Ex8
String.prototype.half = function () {
  const half = Math.floor(this.length / 2);
  return this.substring(0, half) + this.substring(half, this.length);
};
const str = prompt("Insira uma string.");
console.log(str.half());
```

```javascript
// Ex9
String.prototype.removeFirstAndLast = function () {
  return this.substring(1, str.length - 1);
};
const str = prompt("Insira uma string.");
console.log(str.removeFirstAndLast());
```

```javascript
// Ex10
String.prototype.customConcat = function (str) {
  if (str === undefined) {
    throw new Error("Please pass a value.");
  }
  if (typeof str != "string") {
    throw new Error("Invalid type. Please pass a string.");
  }
  return this.substring(1, this.length) + str.substring(1, str.length);
};
const str1 = prompt("Insira uma string.");
const str2 = prompt("Insira outra string.");
console.log(str1.customConcat(str2));
```

```javascript
// Ex11
function customPrint(str) {
  if (str.length > 3) {
    return str.slice(-3) + str.slice(0, -3);
  }
  return str;
}
const str = prompt("Insira uma string.");
console.log(customPrint(str));
```

```javascript
// Ex12
String.prototype.join = function (str) {
  if (str === undefined) {
    throw new Error("Please pass a value.");
  }
  if (typeof str != "string") {
    throw new Error("Invalid type. Please pass a string.");
  }
  const min = Math.min(this.length, str.length);
  return this.substring(0, min) + str.substring(0, min);
};
const str1 = prompt("Insira uma string.");
const str2 = prompt("Insira outr string.");
console.log(str1.join(str2));
```

```javascript
// Ex13
function customEnd(str) {
  if (str.substring(str.length - 6, str.length) == "Script") {
    return true;
  } else {
    return false;
  }
}
const str = prompt("Insira uma string.");
console.log(customEnd(str));
```

```javascript
// Ex14
function nop(str) {
  if (str.length < 2) {
    return str;
  }
  if (str.charAt(0) != "P") {
    return str;
  }
  if (str.charAt(str.length - 1) != "P") {
    return str;
  }
  return str.substring(1, str.length - 1);
}
const str = prompt("Insira uma string.");
console.log(nop(str));
```

```javascript
// Ex15
function sum_three(nums) {
  return nums[0] + nums[1] + nums[2];
}
console.log(sum_three([10, 32, 20]));
console.log(sum_three([5, 7, 9]));
console.log(sum_three([0, 8, -11]));
```

```javascript
// Ex16
function rotateArray(arr) {
  // [10, 32, 20]
  const num = arr.shift(); // [32, 20]
  arr.push(num); // [32, 20, 10]
  return arr;
}
const arr = [10, 32, 20];
for (let i = 0; i < 10; i++) {
  console.log(rotateArray(arr));
}
```

```javascript
// Ex17
function isOne(arr) {
  return arr[0] === 1;
}
console.log(isOne([10, 32, 20]));
console.log(isOne([5, 7, 9]));
console.log(isOne([1, 8, -11]));
```

```javascript
// Ex18
function isOne(arr) {
  return arr[0] === 1;
}
function lastFive(arr) {
  return arr[arr.length - 1] === 5;
}
const arr = [1, 8, 5];
console.log(isOne(arr) && lastFive(arr));
```

```javascript
// Ex19
const arr = [1, 8, 5, 4];
console.log(arr.includes(arr.length));
```

```javascript
// Ex20
const arr = [1, 8, 5, 4];
console.log(arr.reverse());
```

```javascript
// Ex21
Array.prototype.max = function () {
  if (this.length == 0) {
    return 0;
  }
  let max = arr[0];
  for (const elem of arr) {
    if (elem > max) {
      max = elem;
    }
  }
  return max;
};
const arr = [1, 8, 5, 4];
console.log(arr.max());
```

```javascript
// Ex22
Array.prototype.max = function () {
  if (this.length == 0) {
    return 0;
  }
  let max = arr[0];
  for (const elem of arr) {
    if (elem > max) {
      max = elem;
    }
  }
  return max;
};
const arr = [1, 8, 5, 4];
const maior = arr.max();
const novoArray = [];
for (let i = 0; i < arr.length; i++) {
  novoArray.push(maior);
}
console.log(novoArray);
```

```javascript
// Ex23
Array.prototype.changeFirstAndLast = function () {
  if (this.length < 2) {
    return this;
  }
  const firstElem = this[0];
  const lastElem = this[this.length - 1];
  this[0] = lastElem;
  this[this.length - 1] = firstElem;
  return this;
};
const arr = [1, 8, 5, 4];
console.log(arr.changeFirstAndLast());
```

```javascript
// Ex24
Array.prototype.max = function () {
  if (this.length == 0) {
    return undefined;
  }
  let max = arr[0];
  for (const elem of arr) {
    if (elem.length > max.length) {
      max = elem;
    }
  }
  return max;
};
const arr = ["1", "22", "333", "4444"];
console.log(arr.max());
```

```javascript
// Ex25
Array.prototype.count = function (elem) {
  if (elem === undefined) {
    throw new Error("Please pass a value.");
  }
  if (this.length == 0) {
    return 0;
  }
  let count = 0;
  for (const value of this) {
    if (value === elem) {
      count++;
    }
  }
  return count;
};

const arr = ["1", "22", "333", "4444", "1"];
console.log(arr.count("1"));
```

```javascript
// Ex26
function isCorrect(str) {
  if (str.charAt(str.length - 1) != ".") {
    return false;
  }
  if (str.charAt(0) != str.charAt(0).toUpperCase()) {
    return false;
  }
  return true;
}
const str = prompt("Insira uma string.");
console.log(isCorrect(str));
```

```javascript
// Ex27
Array.prototype.maxPair = function () {
  if (this.length == 0) {
    return 0;
  }
  let max = 0;
  for (const elem of arr) {
    if (elem % 2 !== 0) {
      continue;
    }
    if (elem > max) {
      max = elem;
    }
  }
  return max;
};
const arr = [1, 8, 5, 4];
console.log(arr.maxPair());
```

```javascript
// Ex28
String.prototype.removeExtras = function () {
  const exists = {};
  let out = "";
  for (const char of this) {
    if (exists.hasOwnProperty(char)) {
      continue;
    }
    exists[char] = 1;
    out += char;
  }
  return out;
};
const str = prompt("Insira uma string.");
console.log(str.removeExtras());
```

```javascript
// Ex29
Number.prototype.allEqual = function () {
  const str = this.toString();
  const n = str[0];
  for (const c of str) {
    if (c === ".") {
      continue;
    }
    if (n !== c) {
      return false;
    }
  }
  return true;
};
const number = parseFloat(prompt("Insira um número."));
console.log(number.allEqual());
```

```javascript
// Ex30
function tipoAng(graus) {
  if (graus == 0) {
    return "Nulo";
  }
  if (graus < 90) {
    return "Agudo";
  }
  if (graus == 90) {
    return "Reto";
  }
  if (graus < 180) {
    return "Obtuso";
  }
  if (graus == 180) {
    return "Raso";
  }
  if (graus < 360) {
    return "Concavo";
  }
  return "Giro";
}
const number = parseInt(prompt("Insira um número."))
console.log(tipoAng(number));
```
