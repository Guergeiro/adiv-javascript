const fun2 = (event) => {
  console.log("Clicked!");
};
const btn1 = document.querySelector(
  "body > main > section:nth-child(2) > div > div:nth-child(1) > div > div > button"
);
btn1.addEventListener("click", (event) => {
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


// Ao clicar no botão "Read More" do 6º card, alterar o background-color do mesmo para red.

