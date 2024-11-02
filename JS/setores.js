const button = document.getElementById("button");

function voltarPagina() {
  history.back();
}

button.addEventListener("click", voltarPagina);
