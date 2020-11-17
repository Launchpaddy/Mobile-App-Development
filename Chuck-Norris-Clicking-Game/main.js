


// ##############################################################################
// CHUCH NORIS
// ##############################################################################
const baseUrl = `https://api.chucknorris.io/jokes/random`;


function getJson() {
    return fetch(baseUrl).then(res => {
        if(res.ok) {
            return res.json();
        } else {
            throw new Error("Error: no worky")
        }
    }).catch(err => {
        console.log("get json error", err);
    })
    // return fetch('https://swapi.co/api/' ${url})
}

const jokeHolder = document.getElementById('joke');
// const button = document.getElementById('newJoke');
// button.addEventListener('click', function() {
//     console.log("button pushed")
//     getJson().then(data => {
//         console.log(data.value);
//         jokeHolder.innerHTML = data.value
//     });
// })


// ##############################################################################
// Get Random color
// ##############################################################################
function getRandomColor() {

    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    } //ends for loop 
    return color; 

} // ends getRandomColor Function


var clickedTime = 0; 
var createdTime = 0; 
var reactionTime = 0; 
let myGamePiece = null;
var boxSize = 60;
let beatLevel = false;
var w = window.innerWidth;
var h = (window.innerHeight / 2);
var maxSpeed = 5;
let gameWon = 0;
let averageReactionTime =  0;

// ##############################################################################
// Start Game
// ##############################################################################
function startGame(boxSize) {
    if ( myGamePiece != null) {
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
    }

    beatLevel = false;
    myGamePiece = new component(boxSize , boxSize, getRandomColor());
 
    createdTime=Date.now();
    reactionTime = 0; 
   
}


// ##############################################################################
// Game Area
// ##############################################################################
var myGameArea = {

    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }

}


// ##############################################################################
// Player Interaction on canvas
// ##############################################################################
myGameArea.canvas.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.offsetX, "click y = ", e.offsetY)
    console.log(myGamePiece.x, "game y ", myGamePiece.y)
    var hity = false;
    var hitx = false;



    if( myGamePiece.x < e.offsetX && myGamePiece.x + boxSize > e.offsetX) {
        console.log('close on the x axis')
        hitx = true;

    }

    if( myGamePiece.y < e.offsetY && myGamePiece.y + boxSize > e.offsetY) {
        console.log('close on the y axis')
        hity = true;
    }

    clickedTime=Date.now();
    
    

    
    
    //document.getElementById("printReactionTime").innerHTML="Your Reaction Time is: " + reactionTime + "seconds";
    if(reactionTime < 10 && hity == true && hitx == true) {
        jokeHolder.innerHTML = 'You WON!'
        getJson().then(data => {
            console.log(data.value);
            jokeHolder.innerHTML = data.value
        });
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        myGamePiece.delete();
        beatLevel = true;
        gameWon++;
        averageReactionTime = (averageReactionTime + reactionTime) / gameWon;
    }
    else if (beatLevel){
        
        
        
    } else {
        jokeHolder.innerHTML = 'Try again'
    }
    
    //this.style.display="none";
   // this.style.display="none";


});





// ##############################################################################
// Build BOX/ Target
// ##############################################################################
function component(width, height, color) {
    this.width = width;
    this.height = height;
    this.bounce = 1;
    this.speedX = 0;
    this.speedY = 0;
 
    // this.style.display="initial";
   
    
    if (Math.ceil(Math.random() * 2) > 1) {
        
        this.speedX = Math.ceil(Math.random() * maxSpeed)
        console.log("going + ", this.speedX)
    }
    else {
        
        this.speedX = -(Math.ceil(Math.random() * maxSpeed))
        console.log("going - ", this.speedX)
    }
    if (Math.ceil(Math.random() * 2) > 1) {
        
        this.speedY = Math.ceil(Math.random() * maxSpeed)
        console.log("going + ", this.speedY)
    }
    else {
        
        this.speedY = -(Math.ceil(Math.random() * maxSpeed))
        console.log("going - ", this.speedY)
    }
    this.x = Math.ceil(Math.random() * myGameArea.canvas.width);
    this.y = Math.ceil(Math.random() * myGameArea.canvas.height);    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
 
        this.hitBottom();
        this.hitTop();
        this.hitLeft();
        this.hitRight();
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y >= rockbottom) { myGamePiece.speedY -= .5; }
    }
    this.hitLeft = function() {
        var left = 0
        if (this.x <= left) { myGamePiece.speedX += .5; }
    }
    this.hitRight = function() {
        var right = myGameArea.canvas.width - this.width;
        if (this.x >= right) {  myGamePiece.speedX -= .5; }
    }
    this.hitTop = function() {
        var top = 0;
        if (this.y <= top) { myGamePiece.speedY += .5; }
    }
    this.delete = function() {
        this.myGamePiece = null;
    }
    
}



// ##############################################################################
// Game Play updater
// ##############################################################################
function updateGameArea() {
    
    myGameArea.clear();
    

 
    if (reactionTime > 10 ) {
        jokeHolder.innerHTML = 'To Slow'
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        document.getElementById("printReactionTime").innerHTML = 10;

    } 
    else if (beatLevel == true){
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
    

  
    } else {
        reactionTime =(Date.now()- createdTime)/1000;
        document.getElementById("printReactionTime").innerHTML = "Reaction Time: " + ((Date.now()- createdTime)/1000).toFixed(2) + " Seconds";
        myGamePiece.newPos();
        myGamePiece.update();
        // console.log(myGamePiece.speedY)
    }

    document.getElementById("gamesWon").innerHTML = "Games Won: " + gameWon;
    document.getElementById("printAverage").innerHTML = "Average Reaction Time: " +  averageReactionTime.toFixed(2);
  }




// ##############################################################################
// Start game Button
// ##############################################################################
document.getElementById("startGame").onclick=function() {
    if ( myGamePiece != null) {
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
    }
    
    startGame(boxSize);
    
    myGameArea.start();
    
}


