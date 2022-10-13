const main = document.querySelector('main');
const expander = document.querySelector('.expander');
const search = document.querySelector('.search label');
const current = document.querySelector('.current');
const menuItems = document.querySelectorAll('.primary .menu-item');
const mainCards = document.querySelectorAll('.dashboard .card');
const weatherContent = document.querySelector('.side .weather .content');

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

// Populate News from newsdata.io API
const dummyData = async () => {
  const url =
    'https://newsdata.io/api/1/news?apikey=pub_12243ef8ffe3a30fc0aee15ea063f3a766e0b&language=en&category=technology';
  // const res = await fetch(url);
  // const data = await res.json();
  const data = {};

  mainCards.forEach((card, i) => {
    if (data.status === 'success') {
      card.querySelector('.title').innerText =
        data.results[i].title ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      if (data.results[i].description) {
        card.querySelector('.content').innerText =
          data.results[i].description.slice(0, -11) + '...';
      } else {
        card.querySelector('.content').innerText =
          'Aliquam vitae laoreet purus. Vivamus tincidunt nibh rhoncus, varius libero dignissim, molestie odio. Aenean sit amet felis et lectus viverra elementum. In quis tortor dignissim, ultrices odio et, dignissim quam. Donec scelerisque lacinia dolor, a pulvinar enim auctor quis. Sed mollis faucibus lacus id sagittis. Nunc et fringilla ipsum, et dignissim erat. Vivamus leo lorem, iaculis tempor quam nec, malesuada ullamcorper ipsum...';
      }
      if (data.results[i].image_url) {
        card.querySelector(
          '.thumb'
        ).innerHTML = `<img src="${data.results[i].image_url}" />`;
      }
    } else {
      card.querySelector('.title').innerText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      card.querySelector('.content').innerText =
        'Aliquam vitae laoreet purus. Vivamus tincidunt nibh rhoncus, varius libero dignissim, molestie odio. Aenean sit amet felis et lectus viverra elementum. In quis tortor dignissim, ultrices odio et, dignissim quam. Donec scelerisque lacinia dolor, a pulvinar enim auctor quis. Sed mollis faucibus lacus id sagittis. Nunc et fringilla ipsum, et dignissim erat. Vivamus leo lorem, iaculis tempor quam nec, malesuada ullamcorper ipsum...'.slice(
          0,
          Math.round(Math.random() * -200)
        );
    }
  });
};

// Weather Data for Athens from open-meteo.com
const weatherData = async () => {
  const weather =
    'https://api.open-meteo.com/v1/forecast?latitude=37.9792&longitude=23.7166&hourly=temperature_2m&current_weather=true';
  const res = await fetch(weather);
  const data = await res.json();

  if (data) {
    weatherContent.innerHTML = `
    ${data.current_weather.temperature}<span class='celsius'>°C</span>
    `;
  }
};

dummyData();
weatherData();
