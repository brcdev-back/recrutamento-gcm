function login() {
  const id = document.getElementById("discordId").value;

  if (ADMINS.includes(id)) {
    localStorage.setItem("auth", id);
    window.location.href = "admin.html";
  } else {
    alert("Acesso negado.");
  }
}
