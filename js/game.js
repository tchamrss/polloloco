let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let walking_sound = new Audio('audio/game_sound.mp3');

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas,keyboard);
}

document.getElementById('btnLeft').addEventListener('touchstart',(e) => {
    e.preventDefault();
    keyboard.LEFT = true;

});
document.getElementById('btnLeft').addEventListener('touchend',(e) => {
    e.preventDefault();
    keyboard.LEFT = false;

});

document.getElementById('btnRight').addEventListener('touchstart',(e) => {
    e.preventDefault();
    keyboard.RIGHT = true;

});
document.getElementById('btnRight').addEventListener('touchend',(e) => {
    e.preventDefault();
    keyboard.RIGHT = false;

});

document.getElementById('btnUp').addEventListener('touchstart',(e) => {
    e.preventDefault();
    keyboard.SPACE = true;

});
document.getElementById('btnUp').addEventListener('touchend',(e) => {
    e.preventDefault();
    keyboard.SPACE = false;

});

document.getElementById('btnThrow').addEventListener('touchstart',(e) => {
    e.preventDefault();
    keyboard.D = true;

});
document.getElementById('btnThrow').addEventListener('touchend',(e) => {
    e.preventDefault();
    keyboard.D = false;

});

window.addEventListener("keydown", (e)=> {
    if(e.code == 'ArrowRight'){
        keyboard.RIGHT = true;
    }
    if(e.code == 'ArrowLeft'){
        keyboard.LEFT = true;
    }
    if(e.code == 'ArrowUp'){
        keyboard.UP = true;
    }
    if(e.code == 'ArrowDown'){
        keyboard.DOWN = true;
    }
    if(e.code == 'Space'){
        keyboard.SPACE = true;
    }
    if(e.code == 'KeyD'){
        keyboard.D = true;

    }
});

window.addEventListener("keyup", (e)=> {
    if(e.code == 'ArrowRight'){
        keyboard.RIGHT = false;
    }
    if(e.code == 'ArrowLeft'){
        keyboard.LEFT = false;
    }
    if(e.code == 'ArrowUp'){
        keyboard.UP = false;
    }
    if(e.code == 'ArrowDown'){
        keyboard.DOWN = false;
    }
    if(e.code == 'Space'){
        keyboard.SPACE = false;
    }
    if(e.code == 'KeyD'){
        keyboard.D = false;
    }    
});

function enter_Fullscreen(){
    let element = document.getElementById('canvas');
    enterFullscreen(element);
}

function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
}

function startGame(){
    document.getElementById('start-img').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('enterFullscreen').classList.remove('d-none');
    document.getElementById('start-btn').classList.add('d-none');  
    initLevel();
    init();  
    playSound();
}

/*   function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } 
  }*/


  function clearAllIntervals(){
    for (let index = 1; index < 1000; index++) {
        clearInterval(index);
    }
  }

  function waitingGame(secValue){
    let secValue_s = +1000*secValue;
    setTimeout(clearAllIntervals(), secValue_s);
}

function playSound(){
    walking_sound.play();   
}

function muteVolume(){
    walking_sound.pause();
    document.getElementById('volMute').classList.add('d-none');
    document.getElementById('volspeaker').classList.remove('d-none');
}

function speakerVolume(){
    walking_sound.play();
    document.getElementById('volMute').classList.remove('d-none');
    document.getElementById('volspeaker').classList.add('d-none');
}

function restartGame(){
    window.open('index.html',"_self");
}