const auth = localStorage.getItem("auth");
if (!ADMINS.includes(auth)) {
  window.location.href = "login.html";
}

const tabela = document.getElementById("lista");
let candidatos = JSON.parse(localStorage.getItem("candidatos")) || [];

function render() {
  tabela.innerHTML = "";

  candidatos.forEach(c => {
    tabela.innerHTML += `
      <tr>
        <td>${c.nome || "-"}</td>
        <td>${c.idjogo || "-"}</td>
        <td>${c.discord || "-"}</td>
        <td>${c.idade || "-"}</td>
        <td style="max-width:250px;white-space:pre-wrap;">
          ${c.motivo || "-"}
        </td>
        <td class="${
          c.status === "APROVADO"
            ? "aprovado"
            : c.status === "REPROVADO"
            ? "reprovado"
            : ""
        }">
          ${c.status || "PENDENTE"}
        </td>
        <td>
          <button onclick="aprovar(${c.id})">✅</button>
          <button onclick="reprovar(${c.id})">❌</button>
        </td>
      </tr>
    `;
  });
}


function salvar() {
  localStorage.setItem("candidatos", JSON.stringify(candidatos));
  render();
}

function aprovar(id) {
  const c = candidatos.find(x => x.id === id);
  c.status = "APROVADO";
  salvar();
  logDiscord(c, "APROVADO");
}

function reprovar(id) {
  const c = candidatos.find(x => x.id === id);
  c.status = "REPROVADO";
  salvar();
  logDiscord(c, "REPROVADO");
}

function logDiscord(c, status) {
  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: `📋 Resultado do Recrutamento`,
        color: status === "APROVADO" ? 3066993 : 15158332,
        fields: [
          { name: "Nome", value: c.nome },
          { name: "Discord", value: c.discord },
          { name: "Status", value: status }
        ],
        footer: { text: "GCM RP • Administração" }
      }]
    })
  });
}

function abrir() {
  localStorage.setItem("edital", "aberto");
  alert("Edital aberto.");
}

function fechar() {
  localStorage.setItem("edital", "fechado");
  alert("Edital fechado.");
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}

render();
