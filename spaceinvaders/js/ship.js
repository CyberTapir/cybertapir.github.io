function Ship(img) {
    this.img = img;
    this.x = width/2;
    this.y = height-20;
    this.xdir = 0;
    this.toDelete = false;

    // displays ship bottom center canvas
    this.show = function() {
        // fill(255);
        // rectMode(CENTER);
        // rect(this.x, this.y, 20, 35);
        image(this.img, this.x+2, this.y-10, 35, 40);
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    // moves ship left or right
    this.move = function(dir) {
        this.x += this.xdir*5;
    }

    this.die = function() {
        this.toDelete = true;
    }
}
