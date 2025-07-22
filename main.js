document.getElementById('nav-toggle').onclick = () => {
  const nav = document.getElementById('main-nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
};

// Пример API-запроса для статистики
const statsEl = document.getElementById('server-stats');
fetch('https://api.locomotive.ru/online') // ваша API-конечная точка
  .then(res => res.json())
  .then(data => statsEl.textContent = `Сейчас онлайн: ${data.online} из ${data.max}`);
