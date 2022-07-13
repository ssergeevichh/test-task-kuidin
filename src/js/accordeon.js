import Accordion from 'accordion-js';

export default function initAccordeon() {
  const accordion = new Accordion('.services-list', {
    beforeOpen: (currentElem) => {
      const stateBall = currentElem.querySelector('.state-ball');
      const icon = currentElem.querySelector('.service-header__icon');
      const title = currentElem.querySelector('.service-header__title');
      
      stateBall.classList.add('state-ball--active');
      icon.classList.add('service-header__icon--active');
      title.classList.add('service-header__title--active');
    },
    beforeClose: (currentElem) => {
      const stateBall = currentElem.querySelector('.state-ball');
      const icon = currentElem.querySelector('.service-header__icon');
      const title = currentElem.querySelector('.service-header__title');
      
      stateBall.classList.remove('state-ball--active');
      icon.classList.remove('service-header__icon--active');
      title.classList.remove('service-header__title--active');
    }
  });
}