class Stone{
	constructor( x , y , width , height){
		var option = {
			restitution : 0.9 ,
			friction : 0.8 ,
			density : 12


		}
	
		
        this.body=Bodies.rectanglr(x , y , width , height , option)
        this.width = width;
        this.height = height;
		World.add(world, this.body);

	}
	display()
	{
            var p =this.body.position;		
            var angle = this.position;
			push()
			translate(p.x, p.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
            fill("red");
            rect(0,0,this.width , this.height);
			pop()
	}

}