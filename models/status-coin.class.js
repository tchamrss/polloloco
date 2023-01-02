class StatusCoin extends DrawableObject{
    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'   
    ];
    percentage = 5;
    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = 30;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){   
        if(this.percentage == 5){
            return 5;
        }else if(this.percentage == 4){
            return 4;
        }else if(this.percentage == 3){
            return 3;
        }else if(this.percentage == 2){
            return 2;
        }else if(this.percentage == 1){
            return 1;
        }else {
            return 0;
        }
    }
}