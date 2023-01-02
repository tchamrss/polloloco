class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy =100;
    lastHit = 0;
    offsetY = 100;
    offsetX = 0;
    intervalIds = [];
    intervalIds_chicken = [];
    intervalIds_character = [];
    intervalIds_chicken_small =[];
    intervalIds_throwable = [];
    intervalIds_Endboss = [];
    level = level1;
    world;

    constructor(){
        super();
        this.stopGame();
    }

    applyGravity(){
        let id = setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        },1000/25);
        this.intervalIds.push(id);
    }

    isAboveGround(){
        if (this instanceof ThrowableObject){
            return this.y < 380;
        }else{
            return this.y < 220;
        }       
    }

    isColliding (obj) {
        return  (this.x + this.width + this.offsetX) >= obj.x && (this.x + this.offsetX) <= (obj.x + obj.width) && 
                (this.y + this.offsetY + this.height) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.height) /* && 
                obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
 */
    }

    hit(){
        this.energy -= 5;
        
        if(this.energy <= 0){
            this.energy =0
        }else{
            this.lastHit = new Date().getTime();
        }
    }

    kill(){
        this.energy = 0;
    }

    isDead(){
        return this.energy == 0;
    }

    isHurt(){
        let timepasssed = new Date().getTime() - this.lastHit;
        timepasssed = timepasssed/1000;
        return timepasssed < 1;
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
        let path= images[i];
        this.img = this.imageCache[path]
        this.currentImage++;
    }

    moveRight() {   
        this.x += this.speed;    
    }

    moveLeft(){
        this.x -= this.speed;
    }

    jump(){
        this.speedY = 30;
    }

    stopGame(){
        setInterval(() =>{
            if(world.character.isDead()){
                clearAllIntervals();
                this.gameOver();
            }
        }, 1000/60);  
        
    }

    wonGame(){
        setInterval(() =>{
            
            if(world.level.enemies[5].isDead()){
                clearAllIntervals();
                this.gameWon();
            }             
        }, 1000/60);  
        
    }

    gameOver(){
        document.getElementById('enterFullscreen').classList.add('d-none');
        document.getElementById('gameSetting').classList.add('d-none');
        document.getElementById('header').classList.add('d-none');
        document.getElementById('btnLeft').classList.add('d-none');
        document.getElementById('btnRight').classList.add('d-none');
        document.getElementById('btnUp').classList.add('d-none');
        document.getElementById('btnThrow').classList.add('d-none');
        document.getElementById('canvas').style.position = 'absolute';
        document.getElementById('fullscreen').style.display = 'contents';
        document.getElementById('canvas').style.zIndex = '0';
        /* document.getElementById('canvas').style.top = '0'; */
        document.getElementById('stop-img').classList.remove('d-none');
        /* document.getElementById('stop-img').style.position = 'absolute'; */
        document.getElementById('stop-img').style.zIndex = '1';
        document.getElementById('restart').classList.remove('d-none');
        document.getElementById('restart').style.zIndex = '3';
        document.getElementById('volspeaker').classList.add('d-none');
        document.getElementById('volMute').classList.add('d-none');
    }

    gameWon(){
        document.getElementById('enterFullscreen').classList.add('d-none');
        document.getElementById('gameSetting').classList.add('d-none');
        document.getElementById('header').classList.add('d-none');
        document.getElementById('btnLeft').classList.add('d-none');
        document.getElementById('btnRight').classList.add('d-none');
        document.getElementById('btnUp').classList.add('d-none');
        document.getElementById('btnThrow').classList.add('d-none');
        document.getElementById('canvas').style.position = 'absolute';
        document.getElementById('fullscreen').style.display = 'contents';
       /*  document.getElementById('canvas').style.zIndex = '0'; */
        document.getElementById('wonMessage').style.display = 'flex';
        document.getElementById('wonMessage').style.zIndex = '2';
        document.getElementById('volspeaker').classList.add('d-none');
        document.getElementById('volMute').classList.add('d-none');
        document.getElementById('restart').classList.remove('d-none');
        document.getElementById('restart').style.zIndex = '3';
    }

}