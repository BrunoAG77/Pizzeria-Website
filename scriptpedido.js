let pizza = 6;
let len = 4;
let pay = 4;

function def(event) {
  event.preventDefault();
  
  var p1 = document.getElementById("pizza").value;
  if (p1 == "pizzatype0") {
    window.alert(`Selecione um dos ${pizza} tipos de pizza válidos.`);
    return;
  }
  console.log(p1);

  var l1 = document.getElementById("length").value;
  if (l1 == "len0") {
    window.alert(`Selecione um dos ${len} tamanhos válidos.`);
    return;
  }
  console.log(l1);

  var c1 = document.getElementById("payment").value;
  if (c1 == "payform0") {
    window.alert(`Selecione uma das ${pay} formas de pagamento válidas.`);
    return;
  }
  console.log(c1);

  window.location.href = "paga.html";
}

document.querySelector("form").addEventListener("submit", def);