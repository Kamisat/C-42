class Drops {
  constructor(x, y) {
    var options = {
     'friction': 0.1,
     'restitution': 0.1,
     'density': 0.01
    };

    this.body = Bodies.circle(x, y, 5, options);
    World.add(world, this.body);
  }

  display() {
    //push();

    var angle = this.body.angle;
    //rotate(angle);
    ellipseMode(RADIUS);
    var pos = this.body.position;
   // translate(pos.x, pos.y);
    fill("blue")
    ellipse(pos.x, pos.y, 5, 5);

    //pop();
  }


update(){
  if (this.body.position.y > height) {
    Matter.Body.setPosition(this.body, {
      x: random(0, 400),
      y: random(0, 400),
    });
    console.log("huummmm")
  }
}

}