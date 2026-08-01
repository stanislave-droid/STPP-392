import Accordion from 'accordion-js';

const faqAccordionEl = document.getElementById('faq-accordion');

if (faqAccordionEl) {
  new Accordion(faqAccordionEl, {
    duration: 300,
    openOnInit: [0],
  });
}
