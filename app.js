const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const email = document.getElementById("email").value;

  message.style.color = "#111827";
  message.innerHTML = "Enviando correo...";

  const templateParams = {

    user_email: email,

  };

  emailjs.send(

    "service_wp0cpwn",
    "template_vonilmn",
    templateParams

  )

  .then(() => {

    message.style.color = "green";

    message.innerHTML =
      "✅ Suscripción exitosa";

    form.reset();

  })

  .catch((error) => {

    console.log(error);

    message.style.color = "red";

    message.innerHTML =
      "❌ Error al enviar correo";

  });

});