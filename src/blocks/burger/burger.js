const burger = function() {
  const btn = document.querySelector('.js-burger');
  const nav = document.querySelector('.js-main-nav');

  btn.addEventListener('click', () => {
    btn.classList.toggle('burger--open');
    nav.classList.toggle('main-nav--open');
  });
};


export default burger;