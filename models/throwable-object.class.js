class ThrowableObject extends MovableObject {

    IMAGES_BOTTLESROT = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'   
    ];

    IMAGES_BOTTLESSPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'   
    ];
    constructor(x,y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLESROT);
        this.loadImages(this.IMAGES_BOTTLESSPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();           
    }

    throw(){
        this.speedY =30;
        this.applyGravity();
        let id = setInterval(() => {
            if (this.isAboveGround()) { 
                this.x += 25;
                this.playAnimation(this.IMAGES_BOTTLESROT);
            }else{                       
                this.playAnimation(this.IMAGES_BOTTLESSPLASH);                
            }        
        }, 100);
        this.intervalIds_throwable.push(id);
    }
}