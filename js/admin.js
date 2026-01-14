const auth = localStorage.getItem("auth");

if (!ADMINS.includes(auth)) {
  alert("Acesso restrito à administração.");
  window.location.href = "login.html";
}

function abrir() {
  localStorage.setItem("edital", "aberto");
  alert("Edital ABERTO com sucesso.");
}

function fechar() {
  localStorage.setItem("edital", "fechado");
  alert("Edital FECHADO com sucesso.");
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}
