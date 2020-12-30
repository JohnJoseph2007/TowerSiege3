class Striker { 
    constructor() {
        var options = {
            restitution : 0.4,
            isStatic : false
        }
        this.body = Bodies.rectangle(120, 590, 40, 40, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        push();
        fill("yellow");
        rect(pos.x, pos.y, 40, 40);
        pop();
    }
}