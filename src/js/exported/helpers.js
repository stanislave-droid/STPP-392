export function createStars() {
  const containers = document.querySelectorAll('[data-raty]');
  containers.forEach(container => {
    const rate = container.dataset.raty;
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(
        '<svg width="16" height="16"><use href="/img/sprite.svg#icon-full-star"></use></svg>'
      );
    }
    if (rate < 5) {
      for (let i = 0; i < 5 - rate; i++) {
        stars.push(
          '<svg width="16" height="16"><use href="/img/sprite.svg#icon-empty-star"></use></svg>'
        );
      }
    }
    container.innerHTML = stars.join('');
  });
}
