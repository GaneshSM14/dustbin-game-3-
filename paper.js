class paper{
    constructor(x,y,radius){
        var optionspaper={
            restitution:0.8,
            friction:0.3,
            density:0.4
        }
        this.body=Bodies.circle(x,y,radius,optionspaper);
        this.image=loadImage("spirites/paper.jpg");        
        this.radius = radius
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(RADIUS);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
}