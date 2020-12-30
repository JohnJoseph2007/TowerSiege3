class Boxes {
    constructor(x, y) {
        var options = {restitution:0.5, isStatic:false};
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("img.png");
        World.add(world, this.body);
        this.tintspeed = 255;
    }

    score() {
        if(this.tintspeed < 0 && this.tintspeed > -505) {
            score++;
        }
    }


    display() {
        var pos =this.body.position;

        if (pos.y > 550) {
            World.remove(world, this.body);
            push();
            tint(255, this.tintspeed);
            this.tintspeed -=5;
            //rect(pos.x, pos.y, 50, 50);
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, 50, 50);
            pop();
        } else {
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, 50, 50);
        }
    }
}

        // if(this.body.speed < 2.5) {
        //     super.display();
        // } else {
        //     World.remove(wo, this.body);
        //     // for(var i=255; i<0; i-=0.005) {
        //     //     tint(i);
        //     //     image(this.image, pos.x, pos.y, 50, 50);
        //     // }
        //     push();
        //     tint(255, this.tintspeed);
        //     this.tintspeed -=5;
        //     image(this.image, pos.x, pos.y, 50, 50);
        //     pop();
        // }