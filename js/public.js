const WEBHOOK_INSCRICAO = "https://discord.com/api/webhooks/1460801324567232700/lwkz3_C0fr6LJ2JigLapb9GfBuxe7YrLfRXk0ql0nCro64da8rtzTkbY4sez0V2pu-99";

const status = localStorage.getItem("edital") || "FECHADO";
document.getElementById("status-edital").innerText =
  "Status do Edital: " + status;

function enviarInscricao() {
  if (status !== "ABERTO") {
    alert("Edital fechado no momento.");
    return;
  }

  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;
  const idade = document.getElementById("idade").value;

  fetch(WEBHOOK_INSCRICAO, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content:
        "📥 **NOVA INSCRIÇÃO – GCM**\n" +
        "Nome: " + nome + "\n" +
        "Discord: " + discord + "\n" +
        "Idade: " + idade
    })
  });

  alert("Inscrição enviada com sucesso.");
}
