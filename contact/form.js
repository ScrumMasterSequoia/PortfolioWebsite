// import './style.css'
import './form.css'
import { setupForm } from './form-handler.js'

document.querySelector('#app').innerHTML = `
  <div class="contact-form">
    <h1>Contact Us</h1>
    <form id="contactForm">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" name="name" class="form-input">
        <div class="error-name"></div>
      </div>
      
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" name="email" class="form-input">
        <div class="error-email"></div>
      </div>
      
      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea id="message" name="message" class="form-textarea"></textarea>
        <div class="error-message"></div>
      </div>
      
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
`

setupForm(document.querySelector('#contactForm'))