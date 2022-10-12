const main = document.querySelector('main');
const expander = document.querySelector('.expander');

expander.addEventListener('click', () => {
  main.classList.toggle('open');
});