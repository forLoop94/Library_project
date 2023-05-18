import { displaySection } from "./display.js";
import { formSection } from "./render.js";
import { contactDetails } from "./contact.js";

const quote = document.querySelector('.quote');

const home = () => {
  quote.classList.toggle('inactive', false);
  displaySection.classList.toggle('inactive', true);
  formSection.classList.toggle('inactive', true);
  contactDetails.classList.toggle('inactive', true);
}

export { home, quote }