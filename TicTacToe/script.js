var move
function initialize(){
    var a1 = document.getElementById("a1")
    var b1 = document.getElementById('b1')
    var c1 = document.getElementById('c1')
    var a2 = document.getElementById('a2')
    var b2 = document.getElementById('b2')
    var c2 = document.getElementById('c2')
    var a3 = document.getElementById('a3')
    var b3 = document.getElementById('b3')
    var c3 = document.getElementById('c3')
    
    move = true

}

function putValue(cell){
    var text = cell.textContent
    if (text == ""){
        if(move) {
            cell.textContent = "X"
        }
        else{
            cell.textContent = "O"
        }
        move = !move
        cell.disabled = true
    }
}
