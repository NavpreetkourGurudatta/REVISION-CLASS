class Box {
    constructor(x) {
      var options = {
        isStatic : false,
          'restitution':0.3,
          'friction':1,
          'density':0.04,
      }
      this.body = Bodies.rectangle(x, 100, 70, 70, options);
      this.width = 70;
      this.height = 70;
      
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
      rectMode(CENTER);
      fill('brown');
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  