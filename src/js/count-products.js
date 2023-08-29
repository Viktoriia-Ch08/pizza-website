window.addEventListener('click', listenClick);

function listenClick(event) {
  const evt = event;

  if (
    event.target.dataset.action === 'plus' ||
    event.target.dataset.action === 'minus'
  ) {
    const counterWrapper = event.target.closest('.quantity-price-wrap');
    countLabelValue(evt, counterWrapper);
    countPrice(evt, counterWrapper);
  }
}

function countLabelValue(evt, counterWrapper) {
  let counter = counterWrapper.querySelector('[data-counter]');

  if (evt.target.dataset.action === 'minus') {
    counter.textContent = --counter.textContent;
    disableButtons(counterWrapper, counter);
  }
  if (evt.target.dataset.action === 'plus') {
    counter.textContent = ++counter.textContent;
    disableButtons(counterWrapper, counter);
  }
}

function disableButtons(counterWrapper, counter) {
  let plusBtn = counterWrapper.querySelector('.increment');
  let minusBtn = counterWrapper.querySelector('.decrement');

  let currentValue = Number(counter.textContent);

  plusBtn.disabled = currentValue === 10;
  minusBtn.disabled = currentValue === 0;
}

function countPrice(evt, counterWrapper) {
  const counter = counterWrapper.querySelector('[data-counter]');
  const price = counterWrapper.querySelector('[data-price]');

  const productPrice = Number(price.getAttribute('data-price'));

  if (
    evt.target.dataset.action === 'plus' ||
    evt.target.dataset.action === 'minus'
  ) {
    price.textContent = productPrice * Number(counter.textContent);
  }
}
