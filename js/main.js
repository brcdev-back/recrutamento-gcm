let editalAberto = localStorage.getItem("edital") === "aberto";

document.getElementById("statusEdital").innerText =
  "Status do Edital: " + (editalAberto ? "ABERTO" : "FECHADO");

function enviar() {
  if (!editalAberto) {
    alert("Edital fechado.");
    return;
  }

  const nome = nome.value;
  const discord = document.getElementById("discord").value;
  const idade = document.getElementById("idade").value;

  const dados = {
    content: `🚨 **Nova Inscrição GCM RP**
👤 Nome: ${nome}
🎮 Discord: ${discord}
🎂 Idade: ${idade}`
  };

  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(dados)
  });

  alert("Inscrição enviada!");
}
