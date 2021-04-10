const a1 = document.getElementById('a1')
const b1 = document.getElementById('b1')
const c1 = document.getElementById('c1')
const a2 = document.getElementById('a2')
const b2 = document.getElementById('b2')
const c2 = document.getElementById('c2')
const a3 = document.getElementById('a3')
const b3 = document.getElementById('b3')
const c3 = document.getElementById('c3')
var move = true




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
    checkComplete()
    checkWinning()
}

function checkWinning(){
    var winner = ""
    if ((a1.textContent == a2.textContent && a2.textContent == a3.textContent && a1.textContent != "")||
        (a1.textContent == b1.textContent && b1.textContent == c1.textContent && a1.textContent != "")||
        (a1.textContent == b2.textContent && b2.textContent == c3.textContent && a1.textContent != "")){
            winner = a1.textContent
            
    }
    else if (b1.textContent == b2.textContent && b2.textContent == b3.textContent && b1.textContent != ""){
            winner = b1.textContent
    }
    else if (c1.textContent == c2.textContent && c2.textContent == c3.textContent && c1.textContent != ""){
            winner = c1.textContent
    }
    else if (a2.textContent == b2.textContent && b2.textContent == c2.textContent && a2.textContent != ""){
            winner = a2.textContent
    }
    else if ((a3.textContent == b3.textContent && b3.textContent == c3.textContent && a3.textContent != "") ||
        (a3.textContent == b2.textContent && b2.textContent == c1.textContent && a3.textContent != "")){
            winner = a3.textContent

        }
    if (winner!=""){
        alert( winner + " wins")
        location.reload(true)
    }
    
}


function checkComplete(){
    if (a1.textContent != "" && b1.textContent != "" && c1.textContent != "" && a2.textContent != "" && b2.textContent != "" && c2.textContent != "" && a3.textContent != "" && b3.textContent != "" && c3.textContent != ""){
        alert("Game Draw")
        location.reload(true)
    }
}