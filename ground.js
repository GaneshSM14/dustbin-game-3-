class ground{
    constructor(x,y,width,height){
        var optionsground={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,optionsground);
        this.height=height;
        this.width=width;
    }
    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}