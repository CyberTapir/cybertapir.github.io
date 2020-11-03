class Log extends Rectangle {
    //Creating the log
    constructor(x, y, width, height, speed) {
        super(x, y, width, height);
        this.speed = speed;
    }

    show(){
        //sets the colour and where it loads in
        fill(210,105,30);
        rect(this.x, this.y, this.width, this.height);
    }

    update(){
        // to display the log, and update its position
       this.x += this.speed;

       if(this.speed > 0 && this.x > width+grid){
           this.x = - this.width - grid;
       } else if(this.speed < 0 && this.x < -this.width-grid){
            this.x = width + grid;
       }
    }

}

