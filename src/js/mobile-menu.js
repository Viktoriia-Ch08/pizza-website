const refs = {
  mobileContainer: document.querySelector('.mobile-menu-container'),
  closeBtn: document.querySelector('.close-mob-menu-btn'),
  openBtn: document.querySelector('.mobile-modal-btn'),
};

const { mobileContainer, openBtn, closeBtn } = refs;

openBtn.addEventListener('click', openMobModal);
closeBtn.addEventListener('click', closeMobMenu);
mobileContainer.addEventListener('click', closeMobMenuByLink);

function openMobModal() {
  mobileContainer.classList.toggle('is-hidden');
}

function closeMobMenu() {
  mobileContainer.classList.toggle('is-hidden');
}

function closeMobMenuByLink(event) {
  if (event.target.nodeName === 'A') {
    closeMobMenu();
  }
}
