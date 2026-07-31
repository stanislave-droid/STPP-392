import pigKingNormal from '../../img/pig-king/pig-king-normal.png';
import pigKingWink from '../../img/pig-king/pig-king-wink.png';

const template = document.getElementById('pig-king-template');

if (template) {
  const sections = document.querySelectorAll(
    'main > section, [data-observer="section"]'
  );

  const HOP_STAGGER_MS = 220;

  const instances = [];
  sections.forEach((section, index) => {
    const wrapper = template.content.firstElementChild.cloneNode(true);
    const img = wrapper.querySelector('.pig-king-img');
    img.src = pigKingNormal;
    wrapper.style.animationDelay = `${index * HOP_STAGGER_MS}ms`;
    section.appendChild(wrapper);
    instances.push({ wrapper, img });
  });

  if (instances.length) {
    const preloadNormal = new Image();
    preloadNormal.src = pigKingNormal;
    const preloadWink = new Image();
    preloadWink.src = pigKingWink;

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const SCALE_TRANSITION_MS = 200;

    let intervalId = null;
    let revertTimeoutId = null;
    let hopResumeTimeoutId = null;

    const setScaled = isScaled => {
      instances.forEach(({ img }) => {
        img.classList.toggle('pig-king-img--winking', isScaled);
      });
    };

    const setHopSuppressed = isSuppressed => {
      instances.forEach(({ wrapper }) => {
        wrapper.classList.toggle('pig-king--winking', isSuppressed);
      });
    };

    const clearTimers = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      if (revertTimeoutId) {
        clearTimeout(revertTimeoutId);
        revertTimeoutId = null;
      }
      if (hopResumeTimeoutId) {
        clearTimeout(hopResumeTimeoutId);
        hopResumeTimeoutId = null;
      }
      instances.forEach(({ img }) => {
        img.src = pigKingNormal;
      });
      setScaled(false);
      setHopSuppressed(false);
    };

    const startWinking = () => {
      clearTimers();
      intervalId = setInterval(() => {
        instances.forEach(({ img }) => {
          img.src = pigKingWink;
        });
        setScaled(true);
        setHopSuppressed(true);
        revertTimeoutId = setTimeout(() => {
          instances.forEach(({ img }) => {
            img.src = pigKingNormal;
          });
          setScaled(false);
          revertTimeoutId = null;
          hopResumeTimeoutId = setTimeout(() => {
            setHopSuppressed(false);
            hopResumeTimeoutId = null;
          }, SCALE_TRANSITION_MS);
        }, 550);
      }, 4000);
    };

    if (reducedMotionQuery.matches) {
      clearTimers();
    } else {
      startWinking();
    }

    reducedMotionQuery.addEventListener('change', event => {
      if (event.matches) {
        clearTimers();
      } else {
        startWinking();
      }
    });
  }
}
