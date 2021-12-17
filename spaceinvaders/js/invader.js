function Invader(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.r = 15;
    this.toDelete = false;
    this.xdir = 1;
    this.points = 1;
    this.bomb = false;
    


    // displays ship bottom center canvas
    this.show = function() {
        image(this.img, this.x, this.y, this.r*2, this.r*2);
    }

    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }

    this.dropBomb = function(image) {
        //this.bomb = true;
       var bomb = new Bomb(image,this.x, this.y);
       return bomb;
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.die = function() {
        this.toDelete = true;
    }
}
