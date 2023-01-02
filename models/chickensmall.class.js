class Chickensmall  extends MovableObject{
    y = 380;
    width = 50;
    height = 50;
    speedY = 0;
    IMG_JUMP =[
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD =[
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    world;

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');   
        this.loadImages(this.IMG_JUMP);
        this.x = 1600 + Math.random()*500; // Math.random gibt zufällig eine Zahl zwischen 0 und 1
        this.animate();
        this.applyGravity();
    }
    
    animate(){
        let id = setInterval(() =>{
            if (!this.isDead()) {
                this.moveChicken();
            }
        }, 1000/60); 
       /*  this.intervalIds_chicken_small.push(id);   
        let id1 = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);                 
            }else{
                this.playAnimation(this.IMG_JUMP);
            }             
        }, 200);
        this.intervalIds_chicken_small.push(id1);   */
    } 

    moveChicken(){
        if(this.canJump()){
            this.jump();
        }
    }

    canJump(){
        return !this.isAboveGround()
    }

    isAboveGround(){      
        return this.y < 380;      
    }

    jump(){
        this.speedY = 30 + Math.random()*10;  
    }
}