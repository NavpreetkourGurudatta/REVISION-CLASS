class Ball {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,r, options);
this.r = this.r
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      strokeWeight(16);
      stroke('yellow');
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill('brown');
    ellipse(0, 0, this.r);
      pop();
    }
  };
  