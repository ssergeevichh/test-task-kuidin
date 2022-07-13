import Splide from '@splidejs/splide';

export function initStagesSlider() {
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

export function initShopSlider() {
  document.addEventListener('DOMContentLoaded', function () {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');
    const slider = document.querySelector('.example-shops');
    if (mediaQuery.matches) {
      slider.classList.add('splide');
      const splide = new Splide('.example-shops', {
        pagination: false,
        perPage: 1,
        classes: {
          arrows: 'arrows-nav splide__arrows',
          arrow: 'arrows-nav__arrow splide__arrow',
          prev: 'arrows-nav__arrows-prev splide__arrow--prev',
          next: 'arrows-nav__arrows-next splide__arrow--next',
        },
      });
      splide.mount();
    }
  })
}