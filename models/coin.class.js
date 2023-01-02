class Coin extends MovableObject {
    IMAGES_COIN =[
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];
    constructor(){
        super().loadImage(this.IMAGES_COIN[0]);   
        this.loadImages(this.IMAGES_COIN);
        this.y = 100 + Math.random()*200;
        this.x = 200 + Math.random()*2000;
        this.animate();

    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 200);
    }
}