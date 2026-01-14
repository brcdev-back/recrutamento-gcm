const edital = JSON.parse(localStorage.getItem("editalData")) || {
  status: "FECHADO",
  datas: {}
};

document.getElementById("status").innerText =
  "Status do Edital: " + edital.status;

document.getElementById("datas").innerText =
  `Entrevista: ${edital.datas.entrevista || "A definir"} | 
   TAF: ${edital.datas.taf || "A definir"} | 
   Curso: ${edital.datas.curso || "A definir"}`;

function enviar() {
  if (edital.status !== "ABERTO") {
    alert("Edital fechado.");
    return;
  }

  const nome = document.getElementById("nome").value;
  const discord = document.getElementById("discord").value;
  const idade = document.getElementById("idade").value;

  if (!nome || !discord || !idade) {
    alert("Preencha todos os campos.");
    return;
  }

  fetch(WEBHOOK_INSCRICAO, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "📥 Nova Inscrição - GCM",
        color: 3447003,
        fields: [
          { name: "Nome", value: nome },
          { name: "Discord", value: discord },
          { name: "Idade", value: idade }
        ]
      }]
    })
  });

  alert("Inscrição enviada com sucesso.");
}
