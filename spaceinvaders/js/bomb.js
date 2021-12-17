function Bomb(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    // displays ship bottom center canvas
    this.show = function() {
        // noStroke();
        // fill(155, 0, 250);
        // ellipse(this.x, this.y, this.r*2, this.r*2);
        image(this.img, this.x, this.y, this.r*0.5, this.r);
    }

    this.hits = function(ship) {
        // checks for hits from distances between radii
        var d = dist(this.x, this.y, ship.x, ship.y);
        if (d < this.r + ship.r) {
            return true;
        } else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y + 3;
    }

    this.die = function() {
        this.toDelete = true;
    }
}
