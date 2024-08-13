import {} from './scriptpedido.js';

const numtotal = document.createElement("total");

numtotal.style.color = yellow;
numtotal.style.align = 'center';

function def (event) {
  if (event.target.value == len1) {
    numtotal.textContent = 'R$ 33.99';
  }
  else if (event.target.value == len2) {
    numtotal.textContent = 'R$ 40.99';
  }
  else if (event.target.value == len3) {
    numtotal.textContent = 'R$ 47.99';
  }
  else if (event.target.value == len4) {
    numtotal.textContent = 'R$ 54.99';
  }
  document.getElementById("total").append(numtotal);
}

document.querySelector("form").addEventListener("submit");