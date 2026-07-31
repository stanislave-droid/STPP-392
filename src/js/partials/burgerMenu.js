const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const mobileMenuLinkEls = document.querySelectorAll('[data-mobile-link]');

const openMenu = () => {
  burgerMenuEl.dataset.visible = 'open';
  openBtnEl.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  burgerMenuEl.dataset.visible = 'close';
  openBtnEl.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

if (openBtnEl && closeBtnEl && burgerMenuEl) {
  openBtnEl.addEventListener('click', openMenu);

  closeBtnEl.addEventListener('click', closeMenu);

  mobileMenuLinkEls.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && burgerMenuEl.dataset.visible === 'open') {
      closeMenu();
    }
  });
}
