function setDeceleratingTimeout(e,t,i){const o=(n=i,s=0,()=>{0<--n&&(setTimeout(o,++s*t),e())});var n,s;setTimeout(o,t)}

const form = document.getElementById("form")
const headerEl = document.querySelector(".header")
const mainEl = document.querySelector(".main-content")
const namesEl = document.querySelector(".names")
const winnerEl = document.querySelector(".winner")
const backgroundEl = document.querySelector(".background")


form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function randomName() {
    const attenders =  document.getElementById("raffleText").value.split(/\r?\n/);
    const rand = Math.floor(Math.random() * attenders.length)
    const winner = attenders[rand]

    namesEl.innerHTML = winner;
}

function raffle() {
    mainEl.classList.add("hide")
    namesEl.classList.remove("hide")
    backgroundEl.classList.remove("hide")

    setDeceleratingTimeout(randomName, 10, 30);

    setTimeout(() => {
        namesEl.classList.add("hide");
        winnerEl.classList.remove("hide");
    
        const winner = namesEl.innerText;
        winnerEl.innerText = winner;
        winnerEl.innerHTML = `<span>Ve kazanan...</span><br>${winner}`;
      }, 4000);
}

function raffleAgain() {
    location.reload()
}


