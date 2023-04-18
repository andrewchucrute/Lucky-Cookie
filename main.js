const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#Cookie")
const tryAgain = document.querySelector("#tryAgain")

const LuckyMessage = [
    "Creio no riso e nas lágrimas como antídotos contra o ódio e o terror.",   
    "Seja como for o que penses, creio que é melhor dizê-lo com boas palavras.",
    "Eu creio que um dos princípios essenciais da sabedoria é o de se abster das ameaças verbais ou insultos.",
    "Creio que tenho prova suficiente de que falo a verdade: a pobreza.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "Por mim, creio que estamos mortos há muito tempo: morremos no exato momento em que deixamos de ser úteis.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ]




fortuneCookie.addEventListener('click', handleTryClick)
tryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
        }

        
    }
)



function handleTryClick(event) {
    toggleScreen()
    pickMessage()
    
}

function handleResetClick() {
toggleScreen()
}


function pickMessage() {
    let allMessage = LuckyMessage.length
    let randomNumber = Math.floor(Math.random() * allMessage)  
    screen2.querySelector("h2").innerText = `${LuckyMessage[randomNumber]}`
}


function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}



