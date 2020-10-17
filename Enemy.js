function Enemy(sprite, x, y, classename,  h, w) {
    GameObject.call(this, sprite,x,y, classename, h,w);
   
}

//fazendo herança
Enemy.prototype = Object.create(GameObject.prototype);


Enemy.prototype.update = function () {
   

};


Enemy.prototype.fired = function () {

}