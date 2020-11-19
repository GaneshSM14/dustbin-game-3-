class dustbin{
constructor(x,y,width,height){
    var optionsdustbin={
        restitution:0.8,
        friction:0.3,
        density:1.0,
    }
    this.body=Bodies.rectangle(x,y,width,height,optionsdustbin)
    this.image=loadImage("spirites/dustbin.jpg");
    this.height=height;
    this.width=width;
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}

}