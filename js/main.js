const name = prompt("What is your name?");
const jsOutputDiv = document.querySelector("#js-output");
jsOutputDiv.innerHTML += `<h2>Welcome, ${name}!</h2>`;
