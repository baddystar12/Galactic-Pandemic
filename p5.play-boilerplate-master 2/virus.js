class Virus {
    constructor(x,y){
        var virus_options ={
            isStatic: false,
            density: 1,
            friction: 1,
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,30,30,virus_options);
        this.width = 30;
        this.height = 30;
        this.visibility = 255;
            var rand = Math.round(random(1,2));
            switch(rand){
              case 1: this.image = loadImage("images/virus.png");
              break;
              case 2: this.image = loadImage("images/virus2.png");
              break;
              default:
              break;
            }
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed<2){
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 60,60);
        pop();
        }
        else{
        World.remove(world, this.body);
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        image(this.image, 0, 0, 60,60);
        pop();
        }
    }
    scoref(){
        if((this.visibility<0&&this.visibility>=-50)&&score>0){
            score--;
        }
    }
}