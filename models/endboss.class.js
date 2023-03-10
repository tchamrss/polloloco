class Endboss extends MovableObject {
    /* world; */
    height = 400;
    width = 250;
    y = 60;
    IMAGES_WALKING =[
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT =[
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK =[
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_DEAD =[
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    IMAGES_HURT =[
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    hadFirstContact = false;
    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);   
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 2500;
        this.speed = 0.05 + Math.random()*0.1; 
        this.animate();
    }

    animate(){
        let i = 0;
        let id = setInterval(() =>{
            if (!this.isDead()) {
                this.moveLeft();
            } 
        }, 1000/60);
        this.intervalIds_Endboss.push(id);

        let id1 = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD); 
                /* waitingGame(2); */
                this.wonGame();                
            }else if(this.isHurt()){
                this.playAnimation(this.IMAGES_HURT);
            }
            else if (i < 10 ){
                    /* this.playAnimation(this.IMAGES_ALERT); */
                    this.playAnimation(this.IMAGES_ATTACK);
                }
               else{
                    this.playAnimation(this.IMAGES_WALKING);
                }               
            i++;  
              if( world.character.x  > 2000 &&  !this.hadFirstContact){
                i =0;
                this.hadFirstContact = true;
            }              
        }, 200);
        this.intervalIds_Endboss.push(id1);
    }
}