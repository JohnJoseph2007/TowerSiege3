class Ground {
    constructor(x, y, wd) {
        var options = {
            restitution : 0,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, wd, 20, options);
        World.add(world, this.body);
        this.w = wd;
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.w, 20);
        pop();
    }
}