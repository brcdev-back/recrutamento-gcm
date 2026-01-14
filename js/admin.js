function addLog(texto) {
  const logs = document.getElementById("logs");
  const data = new Date().toLocaleString();
  logs.innerHTML += `<p>[${data}] ${texto}</p>`;
  logs.scrollTop = logs.scrollHeight;
}
