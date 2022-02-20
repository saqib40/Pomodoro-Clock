let minutes = document.querySelector('#min');
let seconds = document.querySelector('#sec');
let startNPause = document.querySelector('.startNPause');
let session = document.querySelector('.session');

session.addEventListener('click', e => {
  if (e.target.matches('#increase')) {
    minutes.textContent = Number(minutes.textContent) + 1;
  }
  if (e.target.matches('#decrease')) {
    minutes.textContent = Number(minutes.textContent) - 1;
  }
  if (e.target.matches('#reset')) {
    minutes.textContent = '25';
  }
});
