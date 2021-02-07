class Sanitizer {
    constructor(x,y){
        var sanitizer_options ={
            isStatic: false,
            density: 1,
            friction: 1,
            restitution: 0
        }
        this.body = Bodies.rectangle(x,y,40,40,sanitizer_options);
        this.image = loadImage("images/sanitiser.png");
        this.width = width;
        this.height = height;
        this.visibility = 255;
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
        image(this.image, 0, 0, 100,100);
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
        image(this.image, 0, 0, 100,100);
        pop();
        }
    }
    scoref(){
        if(this.visibility<0&&this.visibility>=-50){
            score++
        }
    }
}