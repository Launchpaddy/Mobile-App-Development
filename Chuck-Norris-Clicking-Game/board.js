function startGame() {
    myGameArea.start();
    myGamePiece = new component(30 , 30, "blue", 1, 10);
   
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }

}

function component(width, height, color) {
    this.width = width;
    this.height = height;
    this.bounce = 1;
    
    if (Math.ceil(Math.random() * 2) > 1) {
        console.log("going + ")
        this.speedX = Math.ceil(Math.random() * 6)
    }
    else {
        console.log("going - ")
        this.speedX = -(Math.ceil(Math.random() * 6))
        console.log(this.speedX)
    }
    if (Math.ceil(Math.random() * 2) > 1) {
        console.log("going + ")
        this.speedY = Math.ceil(Math.random() * 6)
    }
    else {
        console.log("going - ")
        this.speedY = -(Math.ceil(Math.random() * 6))
        console.log(this.speedX)
    }
    this.x = Math.ceil(Math.random() * myGameArea.canvas.width);
    this.y = Math.ceil(Math.random() * myGameArea.canvas.height);    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.hitBottom();
        this.hitTop();
        this.hitLeft();
        this.hitRight();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            myGamePiece.speedY -= 1;
        }
    }
    this.hitLeft = function() {
        var left = 0
        if (this.x < left) {
            myGamePiece.speedX += 1;
        }
    }
    this.hitRight = function() {
        var right = myGameArea.canvas.width - this.width;
        if (this.x > right) {
            myGamePiece.speedX -= 1;
        }
    }
    this.hitTop = function() {
        var top = 0;
 
        if (this.y < top) {
            myGamePiece.speedY += 1;
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    // myGamePiece.x += 1;
    // myGamePiece.y += 1;

    myGamePiece.newPos();
    myGamePiece.update();
   

    
  }

  
function moveup() {
    myGamePiece.speedY -= 1;
 
  }
  
  function movedown() {
    myGamePiece.speedY += 1;
  }
  
  function moveleft() {
    myGamePiece.speedX -= 1;
  }
  
  function moveright() {
    myGamePiece.speedX += 1;
  }