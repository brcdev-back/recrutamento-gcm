if (!localStorage.getItem("auth")) {
  window.location.href = "login.html";
}

let historico = JSON.parse(localStorage.getItem("historico")) || {};

function abrir() {
  salvarEdital("ABERTO");
  log("📢 Edital ABERTO");
}

function fechar() {
  salvarEdital("FECHADO");
  log("⛔ Edital FECHADO");
}

function salvarEdital(status) {
  const data = JSON.parse(localStorage.getItem("editalData")) || { datas: {} };
  data.status = status;
  localStorage.setItem("editalData", JSON.stringify(data));
}

function salvarDatas() {
  const data = {
    status: "ABERTO",
    datas: {
      entrevista: entrevista.value,
      taf: taf.value,
      curso: curso.value
    }
  };
  localStorage.setItem("editalData", JSON.stringify(data));
  log("📅 Datas atualizadas");
}

function avancar() {
  registrar(`Avançou para ${fase.value}`);
}

function aprovar() {
  registrar("APROVADO");
}

function reprovar() {
  registrar("REPROVADO");
}

function registrar(msg) {
  const nome = document.getElementById("nome").value;
  if (!historico[nome]) historico[nome] = [];
  historico[nome].push(msg);
  localStorage.setItem("historico", JSON.stringify(historico));
  log(`👮 ${nome}: ${msg}`);
}

function verHistorico() {
  const nome = histNome.value;
  historicoDiv.innerText = historico[nome]?.join("\n") || "Sem registros.";
}

function log(msg) {
  fetch(WEBHOOK_LOGS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: msg })
  });
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}
