const openBtnEl = document.querySelector('[data-menu-open]');
const closeBtnEl = document.querySelector('[data-menu-close]');
const burgerMenuEl = document.querySelector('[data-mobile-menu]');
const mobileMenuLinkEls = document.querySelectorAll('[data-menu-link]');

let lockedScrollY = 0;

const lockScroll = () => {
  lockedScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.overflow = '';
  window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'instant' });
};

const openMenu = () => {
  burgerMenuEl.dataset.state = 'open';
  openBtnEl.setAttribute('aria-expanded', 'true');
  lockScroll();
};

const closeMenu = () => {
  burgerMenuEl.dataset.state = 'closed';
  openBtnEl.setAttribute('aria-expanded', 'false');
  unlockScroll();
};

if (openBtnEl && closeBtnEl && burgerMenuEl) {
  openBtnEl.addEventListener('click', openMenu);

  closeBtnEl.addEventListener('click', closeMenu);

  mobileMenuLinkEls.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && burgerMenuEl.dataset.state === 'open') {
      closeMenu();
    }
  });
}
