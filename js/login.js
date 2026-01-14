const SENHA_ADMIN = "GCM2026";

function login() {
  const senha = document.getElementById("senha").value;

  if (senha === SENHA_ADMIN) {
    localStorage.setItem("admin", "logado");
    window.location.href = "admin.html";
  } else {
    alert("Acesso negado.");
  }
}
