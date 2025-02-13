function sendMail() {
  let params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    phone : document.getElementById("phone").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }

emailjs.send("service_jx9sraz", "template_a0lds59", params)
  .then(() => alert("Email Sent!"))
  .catch((error) => alert("Failed to send email: " + error));
  console.log("sendMail successfully called")
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendMail();
  });
});