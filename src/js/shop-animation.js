export default function initShopAnimation() {
  const shopsContainer = document.querySelector('.shops-wrapper');

  shopsContainer.addEventListener('mouseover', ({ target }) => {
    if (target.closest('.shop-item')) {
      const currentElement = target.closest('.shop-item');
      const shopTextContent = currentElement.querySelector('.shop-item-text');
      shopTextContent.classList.add('shop-item-text--active');
    }
  })
  
  shopsContainer.addEventListener('mouseout', ({ target }) => {
    if (target.closest('.shop-item')) {
      const currentElement = target.closest('.shop-item');
      const shopTextContent = currentElement.querySelector('.shop-item-text');
      shopTextContent.classList.remove('shop-item-text--active');
    }
  })
}