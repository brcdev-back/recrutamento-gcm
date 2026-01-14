const auth = localStorage.getItem("auth");

if (!ADMINS.includes(auth)) {
  window.location.href = "login.html";
}

function abrir() {
  localStorage.setItem("edital", "aberto");
  alert("Edital aberto");
}

function fechar() {
  localStorage.setItem("edital", "fechado");
  alert("Edital fechado");
}
