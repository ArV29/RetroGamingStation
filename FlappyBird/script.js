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
    baseImg.src = "Assets/Sprites/Bases/background_" + colors[getRandomInt(0, 1)] + ".png"
    colors = ["blue", "red", "green"]
    var pipeColor = colors[getRandomInt(0, 2)]
    pipeImg[0].src = "Assets/Sprites/Pipes/pipeTop_" + pipeColor + ".png"
    pipeImg[1].src = "Assets/Sprites/Pipes/pipeBottom_" + pipeColor + ".png"


}
getImages()

var gap = 60


var constant = pipeImg[0].height + gap
console.log(pipeImg[0].height)
function drawImg(image, x, y) {
    image.onload = function () {
        ctx.drawImage(image, x, y)
    }
}
function draw() {
    drawImg(bgImg, 0, 0)
    drawImg(pipeImg[0], 100, 0)
    drawImg(pipeImg[1], 100, constant)
}
draw()