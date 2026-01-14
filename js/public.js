const WEBHOOK_URL = "https://discord.com/api/webhooks/1460801324567232700/lwkz3_C0fr6LJ2JigLapb9GfBuxe7YrLfRXk0ql0nCro64da8rtzTkbY4sez0V2pu-99";

const statusEdital = localStorage.getItem("edital") || "FECHADO";
document.getElementById("status-edital").innerText =
  "Status do Edital: " + statusEdital;

function enviarInscricao() {
  if (statusEdital !== "ABERTO") {
    alert("Edital fechado no momento.");
    return;
  }

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "📥 **Nova solicitação de inscrição recebida**"
    })
  });

  alert("Solicitação enviada. Aguarde contato no Discord.");
}
