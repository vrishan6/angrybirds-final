class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
    super.display();
    if(gameState === "launched"){
      var pos = [this.body.position.x ,this.body.position.y]
      this.path.push(pos)
    }    
   
    for(var i= 0 ;i< this.path.length ; i = i +1) {
      image( this.image1,this.path[i][0],this.path[i][1])
    }

  }
}


/*this.path = [
  [10,20],
  [34,67]
]

this.path[1]  = [34,67]
this.path[1][0] = 34

*/
