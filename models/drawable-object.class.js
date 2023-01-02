class DrawableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = [];
    currentImage =0;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
        
    }

    draw(ctx){
        try{
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(e){           
            console.warn('Error loading Image',e);
            /* console.log('could not load image', this.img.src); */
        }
        
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame (ctx){
        if(this instanceof Character || this instanceof Chicken || this instanceof Coin){
        ctx.beginPath();
        ctx.lineWidth = '5' ;
        ctx.strokeStyle = 'transparent';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke(); }
    }
}