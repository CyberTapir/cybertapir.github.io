class Frog extends Rectangle{
    // Creating the Frog
    constructor(x, y, width){
        super(x, y, width, width);
        this.attached = null;
    }
    //Attaching the frog to the logs
    attach(log){
        this.attached = log;
    }

    //updating the position of the frog
    update(){
        if(this.attached != null) {
            this.x += this.attached.speed;
        }

        this.x = constrain(this.x, 0, width-this.width);
    }
    //updating the position on the screen
    show(){
        fill(80, 250, 30);
        rect(this.x, this.y, this.width, this.width);

    }

    move(xdir, ydir){
        this.x += xdir * grid;
        this.y += ydir * grid;
    }
}

