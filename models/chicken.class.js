class Chicken  extends MovableObject{
    y = 330;
    height = 100;
    IMAGES_WALKING =[
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD =[
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    world;
    level = level1;
    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');   
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 500 + Math.random()*1000; // Math.random gibt zufällig eine Zahl zwischen 0 und 1
        this.speed = 0.15 + Math.random()*0.3;   
        this.animate();
    }
    
    animate(){
        let id1 = setInterval(() => {          
            if (!this.isDead()) {
                this.moveLeft();
            } 
        },1000/60);
        this.intervalIds_chicken.push(id1);       
        let id2 = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);                 
            }else{
                this.playAnimation(this.IMAGES_WALKING);
            }             
        }, 200);
        this.intervalIds_chicken.push(id2);      
    }
    
}