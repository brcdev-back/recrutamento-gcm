if (localStorage.getItem("auth") !== "ok") {
  window.location.href = "login.html";
}

function abrir() {
  localStorage.setItem("edital", "ABERTO");
  log("📢 Edital ABERTO");
}

function fechar() {
  localStorage.setItem("edital", "FECHADO");
  log("⛔ Edital FECHADO");
}

function avancar() {
  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;
  const fase = document.getElementById("fase").value;

  if (!nome || !discord) {
    alert("Dados incompletos.");
    return;
  }

  enviarLog({
    title: "➡️ Avanço de Fase - GCM",
    color: 3447003,
    fields: [
      { name: "Nome", value: nome },
      { name: "Discord", value: discord },
      { name: "Nova Fase", value: fase }
    ]
  });

  alert("Fase atualizada.");
}

function aprovar() {
  resultadoFinal("APROVADO", 3066993);
}

function reprovar() {
  resultadoFinal("REPROVADO", 15158332);
}

function resultadoFinal(status, color) {
  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;

  enviarLog({
    title: "🏁 Resultado Final - GCM",
    color,
    fields: [
      { name: "Nome", value: nome },
      { name: "Discord", value: discord },
      { name: "Situação", value: status }
    ]
  });

  alert("Resultado enviado.");
}

function enviarLog(embed) {
  fetch(WEBHOOK_LOGS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] })
  });
}

function log(msg) {
  fetch(WEBHOOK_LOGS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: msg })
  });
}
