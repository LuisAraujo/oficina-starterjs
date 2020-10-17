function Player(sprite, x, y,classename,  h, w) {

    GameObject.call(this, sprite, x,y,"player", h,w);

}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);

Player.prototype.update = function () {

};
