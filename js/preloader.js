// Показываем прелоадер при загрузке
document.body.classList.add('loading');

window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');

  // Небольшая задержка для плавности (опционально)
  setTimeout(function() {
    preloader.classList.add('preloader--hidden');
    document.body.classList.remove('loading');
  }, 400); // можно убрать или изменить
});