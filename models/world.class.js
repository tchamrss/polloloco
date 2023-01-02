class World{

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    coinsNumber = 0;
    bottleNumber = 5;
    statusBarHealth = new StatusBarHealth();
    statusBarCoin = new StatusCoin();
    statusBarBottle = new StatusBottle();
    endBossKill = 0;
    coins = [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()];
    throwableObjects = [];
    constructor(canvas,keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld(){
        this.character.world = this;
    }

    run(){

        //checkCollisions
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);       
    }

    checkCollisions(){
        this.checkCharacterEnemiesCollision();
        this.checkCharacterCoinCollision();
        this.checkBottleEnemiesCollision();
    }

    checkThrowObjects(){
        this.statusBarBottle.setPercentage(this.bottleNumber);
        if (this.keyboard.D && this.bottleNumber > 0 && !this.character.isDead()) {
            let bottle = new ThrowableObject(this.character.x +100 , this.character.y +100)
            this.throwableObjects.push(bottle)
            this.bottleNumber--;
            this.statusBarBottle.setPercentage(this.bottleNumber);
        }
    }
          
    draw(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x,0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x,0);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x,0);
        this.addToMap(this.character)      
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.coins);
        this.addObjectToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x,0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectToMap(objects){
        objects.forEach(ob => {
            this.addToMap(ob)
            });
    }

    addToMap(mo){
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width,0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    checkCharacterEnemiesCollision(){
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead()) { 
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);                                               
            }
        });
    }

    checkCharacterCoinCollision(){
        this.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin) && this.coinsNumber < 6) {
                this.coinsNumber++;                
                if (this.coinsNumber > 5) {
                    this.coinsNumber = 5; 
                }
                this.statusBarCoin.setPercentage(this.coinsNumber);  
                this.coins.splice(index,1) ;                                             
            }
        });
    }

    checkBottleEnemiesCollision(){
        this.level.enemies.forEach((enemy,index) => {
                this.throwableObjects.forEach( (to, toIndex) =>{
                    if (!enemy.isDead() && to.isColliding(enemy)) {
                        if(index != 5){
                            enemy.kill();
                        }else{
                            this.endBossKill++;
                            enemy.hit();
                            if(index == 5 && this.endBossKill >= 6 ){                               
                                enemy.kill();
                                this.endBossKill = 0;
                            }
                        }        
                        /* this.level.enemies.splice(index,1); */
                    }
                });
                                     
        }); 
    }
}