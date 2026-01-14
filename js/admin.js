const WEBHOOK_URL = "COLE_AQUI_SEU_WEBHOOK";

function abrirEdital() {
  localStorage.setItem("edital", "ABERTO");
  enviarLog("🟢 **EDITAL ABERTO** pela coordenação.");
  alert("Edital aberto.");
}

function fecharEdital() {
  localStorage.setItem("edital", "FECHADO");
  enviarLog("🔴 **EDITAL FECHADO** pela coordenação.");
  alert("Edital fechado.");
}

function aprovar() {
  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;

  enviarLog(`✅ **APROVADO**\nNome: ${nome}\nDiscord: ${discord}`);
  alert("Candidato aprovado.");
}

function reprovar() {
  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;

  enviarLog(`❌ **REPROVADO**\nNome: ${nome}\nDiscord: ${discord}`);
  alert("Candidato reprovado.");
}

function enviarLog(mensagem) {
  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: mensagem })
  });
}
