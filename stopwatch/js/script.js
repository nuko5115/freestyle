(function(){
  let timer = document.querySelector('.timer');
  let start = document.querySelector('.start');
  let stop = document.querySelector('.stop');

  let startTimer;
  let elapseTime = 0;
  let timerId = 0;
  let timerStop = 0;

  let translateTimer = () => {
    let m = Math.floor(elapseTime / 60000);
    let s = Math.floor(elapseTime % 60000 / 1000);
    let ms = elapseTime % 1000;

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-2);
    
    timer.textContent = m + ':' + s  + ':' + ms;
  }

  let countUp = () => {
    timerId = setTimeout (function(){
      elapseTime = Date.now() - startTimer + timerStop;
      translateTimer();
      countUp();
    },10);
  }

  start.addEventListener('click',function(){
    startTimer = Date.now();
    countUp();
  });

  stop.addEventListener('click',function(){
    clearTimeout(timerId);
    timerStop += Date.now() - startTimer;
  });

})();