class Car extends Rectangle {

    //constructing the shape
    constructor(x, y, width, height, speed) {
        super(x, y, width, height);
        this.speed = speed;
    }
    //displaying the cars with white colouring
    show(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
    //updating the position on the screen
    update(){
       this.x += this.speed;

       if(this.speed > 0 && this.x > width+grid){
           this.x = - this.width - grid;
       } else if(this.speed < 0 && this.x < -this.width-grid){
            this.x = width + grid;
       }
    }

}

