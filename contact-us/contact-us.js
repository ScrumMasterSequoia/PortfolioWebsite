
const menuButton = document.getElementById("menu-button");
const menuDropdown = document.getElementById("menu-dropdown");
let isMenuClosed = true;
setisMenuClosed(true);

menuButton.addEventListener("click", () => {
    setisMenuClosed(!isMenuClosed);
});

function setisMenuClosed() {
    if (isMenuClosed) {
        isMenuClosed = false;
        menuDropdown.classList.remove("open");
    } else {
        isMenuClosed = true;
        menuDropdown.classList.add("open");
    }
}

const handleClickOutside = (event) => {
    if (menuDropdown.classList.contains("open") && (!menuButton.contains(event.target))) {
        setisMenuClosed(false)
    }
}
document.addEventListener('click', handleClickOutside);


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