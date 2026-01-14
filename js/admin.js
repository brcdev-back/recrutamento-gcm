const WEBHOOK_LOGS = "COLE_AQUI_WEBHOOK_LOGS";

if (localStorage.getItem("admin") !== "logado") {
  window.location.href = "login.html";
}

function abrirEdital() {
  localStorage.setItem("edital", "ABERTO");
  log("🟢 Edital ABERTO pela coordenação.");
  alert("Edital aberto.");
}

function fecharEdital() {
  localStorage.setItem("edital", "FECHADO");
  log("🔴 Edital FECHADO pela coordenação.");
  alert("Edital fechado.");
}

function aprovar() {
  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;
  log("✅ APROVADO\nNome: " + nome + "\nDiscord: " + discord);
  alert("Candidato aprovado.");
}

function reprovar() {
  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;
  log("❌ REPROVADO\nNome: " + nome + "\nDiscord: " + discord);
  alert("Candidato reprovado.");
}

function logout() {
  localStorage.removeItem("admin");
  window.location.href = "login.html";
}

function log(msg) {
  fetch(WEBHOOK_LOGS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: msg })
  });
}
