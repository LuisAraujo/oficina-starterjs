const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/purple.png", "image");
	
	this.loader.addResource("background2", "Backgrounds/blue.png", "image");
	
	
    this.loader.addResource("shipblue", "playerShip2_blue.png", "image");
    this.loader.addResource("enemyred", "enemyRed1.png", "image");
    this.loader.addResource("lase1", "laserBlue01.png", "image");
    this.loader.addResource("lase2", "laserRed01.png", "image");
    this.loader.addResource("logogame", "logogame.png", "image");
    this.loader.addResource("play", "labelPlay.png", "image");
    this.loader.addResource("labelrank", "labelRanking.png", "image");
    this.loader.addResource("guiscore", "playerLife2_blue.png", "image");
    this.loader.addResource("laser", "laser.mp3", "audio");
};


//Quando o loading acabar
se.gameReady = function() {
	//criando uma cena
	var menu = new Scene();
	//passei a funcao incial
	menu.setFunctionStart( setMenu );
	
	var jogo = new Scene();
	jogo.setFunctionStart( setJogo );
	
	
	//add cena no nivel
	this.mlevel.addScene(menu);
	this.mlevel.addScene(jogo);

}

function setMenu(){

	var bg = new Background("background",0 , 0, 
	canvas.height, canvas.width);
	
	var logo = new GameObject("logogame", 0, 0, "gui");
	logo.setPosition( canvas.width/2 - logo.w/2, 20);

	var play = new GameObject("play", 0, 0, "gui");
	play.setPosition( canvas.width/2 - play.w/2, 400);
	
	play.update = checkKeyboard;
}

//check teclado (se pressionar espaço)
function checkKeyboard(){
	
	if(se.teclado.ESPACO){
		
		//carregando a cena 1
		se.mlevel.loadScene(1);
	}
	
}

function setJogo(){
	var bg = new Background("background2",0 , 0, 
	canvas.height, canvas.width);
	
	enemy = new Enemy("enemyred", 250,0, "enemy");
	player = new Player("shipblue", 300,600,"player");
}

