if (localStorage.getItem("auth") !== "ok") {
  window.location.href = "login.html";
}

function abrir() {
  localStorage.setItem("edital", "ABERTO");
  log("Edital aberto");
}

function fechar() {
  localStorage.setItem("edital", "FECHADO");
  log("Edital fechado");
}

function aprovar() {
  resultado("APROVADO", 3066993);
}

function reprovar() {
  resultado("REPROVADO", 15158332);
}

function resultado(status, color) {
  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;

  fetch(WEBHOOK_LOGS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "📋 Resultado GCM",
        color,
        fields: [
          { name: "Nome", value: nome },
          { name: "Discord", value: discord },
          { name: "Status", value: status }
        ]
      }]
    })
  });

  alert("Resultado enviado.");
}

function log(msg) {
  fetch(WEBHOOK_LOGS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: "🛡️ " + msg })
  });
}
