const refs = {
  containerEl: document.querySelector('.contacts-mob-container'),
  openBtn: document.querySelector('.contacts-btn'),
  closeBtn: document.querySelector('.close-contacts-btn'),
};

const { containerEl, openBtn, closeBtn } = refs;

openBtn.addEventListener('click', openContacts);
closeBtn.addEventListener('click', closeContacts);
containerEl.addEventListener('click', closeContactsByClick);

function openContacts() {
  containerEl.classList.toggle('is-hidden');
}

function closeContacts() {
  containerEl.classList.toggle('is-hidden');
}
