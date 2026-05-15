const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  message.style.color = "#94a3b8";
  message.innerText = "Enviando...";

  const templateParams = {
    user_email: email,
  };

  try {

    await emailjs.send(
      "TU_SERVICE_ID",
      "TU_TEMPLATE_ID",
      templateParams
    );

    message.style.color = "#22c55e";
    message.innerText = "✅ Suscripción exitosa";

    form.reset();

  } catch (error) {

    console.log(error);

    message.style.color = "#ef4444";
    message.innerText = "❌ Error al enviar";

  }
});