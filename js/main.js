const statusEl = document.getElementById("statusEdital");

let edital = localStorage.getItem("edital") || "fechado";
statusEl.innerText = "Status do Edital: " + edital.toUpperCase();

function enviar() {
  if (edital !== "aberto") {
    alert("Edital fechado.");
    return;
  }

  const nome = document.getElementById("nome").value.trim();
  const idjogo = document.getElementById("idjogo").value.trim();
  const discord = document.getElementById("discord").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const motivo = document.getElementById("motivo").value.trim();

  if (!nome || !idjogo || !discord || !idade || !motivo) {
    alert("Preencha todos os campos.");
    return;
  }

  const candidato = {
    id: Date.now(),
    nome,
    idjogo,
    discord,
    idade,
    motivo,
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
      title: "📥 NOVA INSCRIÇÃO – GCM RP",
      description: "📄 Dados enviados pelo candidato",
      color: 3447003,
      fields: [
        {
          name: "👤 Nome Completo",
          value: nome || "Não informado",
        },
        {
          name: "🎮 ID no Jogo",
          value: idjogo || "Não informado",
          inline: true
        },
        {
          name: "💬 Discord",
          value: discord || "Não informado",
          inline: true
        },
        {
          name: "🎂 Idade",
          value: idade || "Não informado",
          inline: true
        },
        {
          name: "📝 Por que deseja entrar na GCM?",
          value: motivo.length > 900 ? motivo.substring(0, 900) + "..." : motivo
        }
      ],
      footer: {
        text: "Sistema de Recrutamento • Guarda Civil Municipal RP"
      },
      timestamp: new Date()
    }]
  })
});

  alert("Inscrição enviada com sucesso.");

  document.querySelectorAll("input, textarea").forEach(e => e.value = "");
}
