class Cloud extends MovableObject{
    y = 50;
    width = 500;
    height = 250;
    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 200 + Math.random()*500;
        this.animate();
        /* this.y = 50;
        this.width = 500;
        this.height = 250; */
    }
    animate(){
        this.moveLeft();
    }


}