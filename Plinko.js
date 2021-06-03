class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("white")
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}