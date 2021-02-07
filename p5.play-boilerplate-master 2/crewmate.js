class Crewmate {
    constructor(x,y){
        var crewmate_options ={
            isStatic: false,
            density: 1,
            friction: 1,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x,y,55,55,crewmate_options);
        this.width = 55;
        this.height = 55;
        this.trajectory = [];
        this.visiblity = 255;
        this.smokeImage = loadImage("images/smoke.png");
            var rand = Math.round(random(1,4));
            switch(rand){
              case 1: this.image = loadImage("images/crew1.png");
              break;
              case 2: this.image = loadImage("images/crew2.webp");
              break;
              case 3: this.image = loadImage("images/crew3.png");
              break;
              case 4: this.image = loadImage("images/crew4.png");
              break;
              default:
              break;
            }
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        if(this.body.velocity.x > 10&& this.body.position.x >200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }
        for(var i = 0; i<this.trajectory.length; i++){
            push();
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
            pop();
        }
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, 60,80);
       pop();
    }
}
