const main = document.querySelector('main');
const expander = document.querySelector('.expander');
const search = document.querySelector('.search label');

expander.addEventListener('click', () => {
  main.classList.toggle('open');
});
search.addEventListener('click', () => {
  main.classList.toggle('search');
});