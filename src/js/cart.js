const refs = {
  containerEl: document.querySelector('.prom-mod-container'),
  openBtn: document.querySelector('.prom-btn'),
};

window.addEventListener('click', openModal);

function openModal(event) {
  console.log(event.target.dataset.action);
  if (event.target.dataset.action === 'modal-open') {
    refs.containerEl.classList.toggle('is-hidden');
  }
}
