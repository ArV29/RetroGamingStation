function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generatePipes() {
    var y = getRandomInt(-225, 0)
    var x= 400
    pipes.push({'x' : x, 'y': y})

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


var constant = 287+100
console.log()
console.log(baseImg)
function drawImg(image, x, y) {
    image.onload = function () {
        ctx.drawImage(image, x, y)
    }
}
var birdIterator = 1
var pipes = []
generatePipes()
pipes.push({'x' : 600, 'y' : getRandomInt(-200, 0)})
drawImg(bgImg, 0, 0)
drawImg(pipeImg[0], pipes[0].x, 0)
drawImg(pipeImg[1], pipes[0].x, constant)

drawImg(baseImg, 0, 450)
drawImg(birdImg[birdIterator], 50, 250)
var birdCounter = 0



bird = {'x' : 100, 'y' : 250, 'velocity' : 1}
gravity = 0.00001
maxVelocity = 1.5

gravity = 1
document.addEventListener("keydown", moveUp);
function moveUp(){
    bird.velocity = -7.5
}


function collision(){
    for (var index = 0; index < pipes.length; index++) {
        if (pipes[index].x <= bird.x + 34 && pipes[index].x + 68>=bird.x){
            console.log('BirdY ' + (bird.y + 24) + 'Allowance' + (pipes[index].y + 287 + gap))

            if(bird.y <= pipes[index].y  + 287 || (bird.y + 24) >= (pipes[index].y+287+gap)){
                return true
            }
        }
    }
    if (bird.y+ 24 >= 475){
        return true
    }
    return false

}


var score = 0


function draw() {
    ctx.drawImage(bgImg, 0, 0)
    for (let index = 0; index < pipes.length; index++) {
        pipes[index].x--
        ctx.drawImage(pipeImg[0], pipes[index].x, pipes[index].y)
        ctx.drawImage(pipeImg[1], pipes[index].x, constant + pipes[index].y)
        if(pipes[index].x == 100+ 68){
            score += 1
        }

    }
    ctx.drawImage(baseImg, 0, 475)
    ctx.drawImage(birdImg[birdIterator], bird.x, bird.y)
    birdCounter ++
    if (birdCounter == 10){
        birdIterator++
        if (birdIterator == 4) {
            birdIterator = 0
        }
        birdCounter =  0
    }
    if(pipes[0].x == 0){
        generatePipes()
    }
    else if(pipes[0].x == -68){
        pipes.shift()
    }
    if (bird.y<0){
        bird.y = 0
    }
    else if(bird.y<=450){
      
        bird.y+=bird.velocity
    }
    else if(bird.y >= 450 ){
        bird.y = 450
    }

    if(bird.velocity < maxVelocity){
        bird.velocity += gravity
    }
    var isColliding = collision()
    if (isColliding){
        console.log(bird)
        console.log(pipes)
        alert("Game Over")
        location.reload()
    }
    document.getElementById('score').innerHTML = 'Score : ' + score
    

    
    requestAnimationFrame(draw)
    
}
draw()