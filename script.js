let count = 0
let countEl = document.getElementById("count-el")
let historyEl =  document.getElementById("his-el")

function increment(){
    count += 1
    countEl.innerText=count

}
function save(){
    console.log(count);
    historyEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}
