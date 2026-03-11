function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }
function sendMessage() {
  // Get values from the form
  const name = encodeURIComponent(document.getElementById("name").value);
  const email = encodeURIComponent(document.getElementById("email").value);
  const message = encodeURIComponent(document.getElementById("message").value);

  // Your WhatsApp number
  const number = "919344248272";

  // WhatsApp URL with pre-filled message
  const url = `https://wa.me/${number}?text=Name%3A%20${name}%0AEmail%3A%20${email}%0AMessage%3A%20${message}`;

  // Open WhatsApp
  window.open(url, "_blank");
}
  alert("Thank you! We will contact you soon.");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
