const refs = {
  mobileContainer: document.querySelector('.mobile-menu-container'),
  closeBtn: document.querySelector('.close-mob-menu-btn'),
  openBtn: document.querySelector('.mobile-modal-btn'),
};

const { mobileContainer, openBtn, closeBtn } = refs;

openBtn.addEventListener('click', openMobModal);
closeBtn.addEventListener('click', closeMobMenu);

function openMobModal(event) {
  mobileContainer.classList.toggle('is-hidden');
  console.log('Open mob');
}

function closeMobMenu(event) {
  console.log('Close mob');
  mobileContainer.classList.toggle('is-hidden');
}
