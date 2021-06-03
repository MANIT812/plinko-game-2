class Division{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,10,100,options);
        this.width=10;
        this.height=100;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}