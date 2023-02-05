let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

let count = 0

function increment(){

    count += 1
    countEl.textContent = count
}

function save(){

    saveEL.textContent += count + " - "
    countEl.textContent = 0
    count = 0

}