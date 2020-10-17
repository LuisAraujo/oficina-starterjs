function Player(sprite, x, y,classename,  h, w) {

    this.audioLaser = new Sound("laser");
	
    GameObject.call(this, sprite, x, y,"player", h,w);

}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);

Player.prototype.update = function () {
	
	if(se.teclado.CIMA ){
		  if(this.y > 0)
			this.y-=3;	
	}
	if(se.teclado.BAIXO){
		if(this.y < canvas.width - this.h)
			this.y+=3;
	}
	if(se.teclado.DIREITA){
		 if(this.x < canvas.width - this.w)
		this.x+=3;
	}
	if(se.teclado.ESQUERDA){
		if(this.x > 0)
			this.x-=3;
		
	}
	
	if(se.teclado.ESPACO){
		
		laser = new Bullet("lase1", 0,0, -4);
		laser.setPosition( this.x + this.w/2, this.y - laser.h);
		laser.setFire(["enemy", "kill"]);
		
		this.audioLaser.play();
		
		se.mlevel.getCurrentScene().addObjects(laser);
		
	}




};



Player.prototype.fired = function () {

}
