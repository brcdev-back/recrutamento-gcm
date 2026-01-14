const WEBHOOK_URL = "https://discord.com/api/webhooks/1460799410433687748/BtAcdAShKKMjftWmnso95sq5DV4Hl9hQnSyHP-QOrab5AxD61ct4xXFJJX8q4Onn04E_";

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
