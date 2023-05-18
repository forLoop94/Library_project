import { displaySection } from "./display.js";
import { formSection } from "./render.js";
import { quote } from "./home.js";

const contactDetails = document.querySelector('.contact-details');

const contact = () => {
  console.log('clicked')
  contactDetails.classList.toggle('inactive', false);
  displaySection.classList.toggle('inactive', true);
  formSection.classList.toggle('inactive', true);
  quote.classList.toggle('inactive', true);
}

export { contact, contactDetails }