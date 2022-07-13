import Splide from '@splidejs/splide';

export default function initStagesSlider() {
  document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.stages', {
      gap: 25,
      pagination: false,
      classes: {
        arrows: 'arrows-nav splide__arrows',
        arrow: 'arrows-nav__arrow splide__arrow',
        prev: 'arrows-nav__arrows-prev splide__arrow--prev',
        next: 'arrows-nav__arrows-next splide__arrow--next',
      }
    });
    splide.mount();
  })
}