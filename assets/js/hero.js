(function(){
  const root = document.querySelector('.hero-slides');
  if(!root) return;
  const slides = Array.from(root.querySelectorAll('.hero-slide'));
  const flash = root.querySelector('.hero-flash');
  const interval = parseInt(root.dataset.interval || '5000', 10);
  const flashEvery = parseInt(root.dataset.flashInterval || '3', 10);

  // Preload remaining images
  slides.slice(1).forEach(img => { const i = new Image(); i.src = img.src; });

  let i = 0, tick = 0;
  function next(){
    const current = slides[i];
    i = (i + 1) % slides.length;
    const next = slides[i];
    current.classList.remove('is-active');
    next.classList.add('is-active');

    tick++;
    if (tick % flashEvery === 0) {
      flash.style.opacity = '1';
      setTimeout(()=> flash.style.opacity = '0', 120);
    }
  }
  // Ensure first is visible
  slides[0]?.classList.add('is-active');
  setInterval(next, interval);
})();
