function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var birdImg = [new Image(), new Image(), new Image(), new Image()]
var bgImg = new Image()
var baseImg = new Image()
var pipeImg = [new Image(), new Image()]

function getImages() {
    var colors = ["blue", "green", "red", "yellow", "purple"]
    var birdColor = colors[getRandomInt(0, 4)]
    birdImg[0].src = "Assets/Sprites/Birds/birdFlapUp_" + birdColor + ".png"
    birdImg[1].src = "Assets/Sprites/Birds/birdFlap_" + birdColor + ".png"
    birdImg[2].src = "Assets/Sprites/Birds/birdFlapDown_" + birdColor + ".png"
    birdImg[3].src = "Assets/Sprites/Birds/birdFlap_" + birdColor + ".png"
    colors = ["Day", "Forest", "Moon", "Night"]
    bgImg.src = "Assets/Sprites/Backgrounds/background_" + colors[getRandomInt(0, 3)] + ".png"
    colors = ["Day", "Night"]
    baseImg.src = "Assets/Sprites/Bases/" + colors[getRandomInt(0, 1)] + ".png"
    colors = ["blue", "red", "green"]
    var pipeColor = colors[getRandomInt(0, 2)]
    pipeImg[0].src = "Assets/Sprites/Pipes/pipeTop_" + pipeColor + ".png"
    pipeImg[1].src = "Assets/Sprites/Pipes/pipeBottom_" + pipeColor + ".png"


}
getImages()

var gap = 100    


var constant = pipeImg[0].height + gap
console.log()
console.log(baseImg)
function drawImg(image, x, y) {
    image.onload = function () {
        ctx.drawImage(image, x, y)
    }
}
var birdIterator = 1
var pipes = [{ 'x': 400, 'y': -100 }]
drawImg(bgImg, 0, 0)
drawImg(pipeImg[0], pipes[0].x, 0)
drawImg(pipeImg[1], pipes[0].x, constant)

drawImg(baseImg, 0, 450)
drawImg(birdImg[birdIterator], 50, 250)
var birdCounter = 0
function draw() {
    ctx.drawImage(bgImg, 0, 0)
    ctx.drawImage(baseImg, 0, 450)
    ctx.drawImage(pipeImg[0], pipes[0].x, pipes[0].y)
    ctx.drawImage(pipeImg[1], pipes[0].x, constant + pipes[0].y)
    
    ctx.drawImage(birdImg[birdIterator], 50, 250)
    birdCounter ++
    if (birdCounter == 10){
        birdIterator++
        if (birdIterator == 4) {
            birdIterator = 0
        }
        birdCounter =  0
    }
    pipes[0].x -= 1
    if(pipes[0].x <= 0){
        pipes[0].x = 400
    }
    
    requestAnimationFrame(draw)
}
draw()