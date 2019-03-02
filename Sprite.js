
class Sprite {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.w = 32;
        this.h = 32;
        this.image = new Image();
        this.image.src = image;
    }

    display = function(){
        this.newMethod();
    }

    newMethod() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
}
