const statusEl = document.getElementById("statusEdital");

let edital = localStorage.getItem("edital") || "fechado";
statusEl.innerText = "Status do Edital: " + edital.toUpperCase();

function enviar() {
  if (edital !== "aberto") {
    alert("Edital fechado.");
    return;
  }

  const nome = document.getElementById("nome").value.trim();
  const discord = document.getElementById("discord").value.trim();
  const idade = document.getElementById("idade").value.trim();

  if (!nome || !discord || !idade) {
    alert("Preencha todos os campos.");
    return;
  }

  const candidato = {
    id: Date.now(),
    nome,
    discord,
    idade,
    status: "PENDENTE"
  };

  let lista = JSON.parse(localStorage.getItem("candidatos")) || [];
  lista.push(candidato);
  localStorage.setItem("candidatos", JSON.stringify(lista));

  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "📥 Nova Inscrição - GCM RP",
        color: 3447003,
        fields: [
          { name: "Nome", value: nome, inline: true },
          { name: "Discord", value: discord, inline: true },
          { name: "Idade", value: idade, inline: true }
        ],
        footer: { text: "Sistema de Recrutamento GCM RP" }
      }]
    })
  }).catch(() => alert("Erro ao enviar log para o Discord."));

  alert("Inscrição enviada com sucesso.");
  document.querySelectorAll("input").forEach(i => i.value = "");
}
