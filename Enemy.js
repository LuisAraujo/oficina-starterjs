function Enemy(sprite, x, y, classename,  h, w) {
    
	this.direcao = "Direita";
	this.timefire = 100;
	this.audioLaser = new Sound("laser");
	
	GameObject.call(this, sprite,x,y, classename, h,w);
   
}

//fazendo herança
Enemy.prototype = Object.create(GameObject.prototype);


Enemy.prototype.update = function () {
   this.timefire--;
   if(this.timefire == 0){
	   this.timefire = Math.random() * 100;
	   
		laser = new Bullet("lase2", 0,0, +4);
		laser.setPosition( this.x + this.w/2, this.y + this.h + laser.y);
		laser.setFire(["player", "kill"]);
		
		this.audioLaser.play();
		
		se.mlevel.getCurrentScene().addObjects(laser);

   }
   if(this.direcao == "Direita"){
	   this.x++;
	   
	   if(this.x + this.w > canvas.width){
		   this.y+=10;
		   this.direcao = "Esquerda";
	   }
   }
   if(this.direcao == "Esquerda"){
	   this.x--;
	   
	    if(this.x < 0){
		   this.y+=10;
		   this.direcao = "Direita";
	    }
   }
   
   
   
};

Enemy.prototype.fired = function () {
   se.mlevel.killEnemy(this);
}