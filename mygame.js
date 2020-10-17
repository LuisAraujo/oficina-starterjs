const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/purple.png", "image");
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

}

/* //crie quantas funcoes precisar!!!

function setLevel1() {
    
}


function setMenu(){

}*/
