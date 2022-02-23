let minutes = document.querySelector('#min');
let seconds = document.querySelector('#sec');
let startButton = document.querySelector('.start');
let pauseButton = document.querySelector('.pause');
let session = document.querySelector('.session');
let reduction;

session.addEventListener('click', e => {
  if (e.target.matches('#increase')) {
    minutes.textContent = ('0' + (Number(minutes.textContent) + 1)).slice(-2);
  }
  if (e.target.matches('#decrease') && minutes.textContent !== '00') {
    minutes.textContent = ('0' + (Number(minutes.textContent) - 1)).slice(-2);
  }
  if (e.target.matches('#reset')) {
    minutes.textContent = '25';
    seconds.textContent = '00';
    clickPause();
  }
});

function clickStart() {
  reduction =  setInterval(() => {
    
      if (seconds.textContent == 0) {
        seconds.textContent = '59';
        minutes.textContent = ('0' + (minutes.textContent - 1)).slice(-2);
      }
      else{
        seconds.textContent = ('0' + (seconds.textContent - 1)).slice(-2);
      }

      stopTimer();    
    
    }, 1000);
  startButton.style.display = 'none';
  pauseButton.style.display = 'inline';
  stopTimer();
}

startButton.addEventListener('click', clickStart);

function clickPause() {
  clearInterval(reduction);
  startButton.style.display = 'inline';
  pauseButton.style.display = 'none';
}

function stopTimer(){
  if(seconds.textContent == '00' && minutes.textContent == '00'){
    clickPause();      
  }  
}

pauseButton.addEventListener('click', clickPause);
