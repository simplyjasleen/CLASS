class Box{

constructor(x,y,width,height){



    var options ={
'restitution':1
    }
    this.box = Bodies.rectangle(x,y,width,height,options );
this.width = width;
this.height = height;
World.add(world,this.box);

}
display(){
 var pos = this.box.position;
 var angle = this.box.angle;
 push();
 translate(pos.x,pos.y);
 rotate(angle);

fill(255);
angleMode(RADIANS);
 rectMode(CENTER );
rect(0,0,this.width,this.height);
pop();


}





}