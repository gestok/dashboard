const main = document.querySelector('main');
const expander = document.querySelector('.expander');
const search = document.querySelector('.search label');
const current = document.querySelector('.current');
const menuItems = document.querySelectorAll('.primary .menu-item');

expander.addEventListener('click', () => main.classList.toggle('open'));
search.addEventListener('click', () => main.classList.toggle('search'));
menuItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    current.innerText = item.querySelector('.desc').textContent;
    menuItems.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
    main.classList.remove('open');
  });
});
