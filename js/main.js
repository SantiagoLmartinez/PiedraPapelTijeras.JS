// tablero
const _piedraBtn = document.querySelector('.piedra')
const _papelBtn = document.querySelector('.papel')
const _tijerasBtn = document.querySelector('.tijeras')
// robot
const _robotChoiseContainer = document.querySelector('.robotChoiseContainer')
const _robotChoise = document.querySelector('.piedra')
const _robotImg = document.querySelector('.robotImg')
// puntos
const _userPoints = document.querySelector('.userPoints')
const _robotPoints = document.querySelector('.robotPoints')
// values
const piedraValue = 1
const papelValue = 2
const tijerasValue = 3

let userPoints = 0
let robotPoints = 0

// events listener

_piedraBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en piedra')
    
    winner(playerChoise(piedraValue), choiseRobot() )
})
_papelBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en papel')
    winner(playerChoise(papelValue), choiseRobot() )

})
_tijerasBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en tijeras')
    winner(playerChoise(tijerasValue), choiseRobot() )

})

// functions

// player
const playerChoise = (ch) =>{
    console.log('Player :', ch)
    return  ch
}
// robot
const choiseRobot = (ch) =>{
     ch = Math.floor(Math.random() *3) + 1 
    console.log('Robot :',ch)
    printRobotChoise(ch)

    return  ch;
}
// elegir ganador
const winner = (player, robot) =>  {

    if(player === 2 && robot === 1){
        console.log('papel gana contra piedras')
        _userPoints.textContent = `${ userPoints = userPoints + 1 }`
        return 
    }

    if(player === 2 && robot === 3){
        console.log('papel pierde contra tijeras')
        _robotPoints.textContent = `${robotPoints = robotPoints + 1 }`
        return  
    }

    if(player === 1 && robot === 3){
        console.log('piedra gana contra tijeras')
        _userPoints.textContent = `${userPoints = userPoints +1}`

        return 
    }
    if(player === 1 && robot === 2){
        console.log('piedra pierde contra papel')
        _robotPoints.textContent = `${robotPoints = robotPoints +1 }`

        return 
    }
    if(player === 3 && robot === 1){
        console.log('tijeras pierde contra piedra')
        _robotPoints.textContent = `${robotPoints = robotPoints  +1}`

        return 
    }
    if(player === 3 && robot === 2){
        console.log('tijeras gana contra papel')
        _userPoints.textContent = `${userPoints = userPoints +1 }`

        return 
    }
    if(player === robot){
        console.log('Empate')
    }
}

// pintar en pantalla que eligio el robot
const printRobotChoise = (ch) =>{
    _robotChoiseContainer.innerHTML= ''
    if(ch === 1){
        _robotChoiseContainer.innerHTML= `<img class="" src="svg/stone-576268.svg" alt="tijeras">`
        return
    }
    if(ch === 2){
        _robotChoiseContainer.innerHTML= `
        <img class="" src="svg/scroll-34696.svg" alt="tijeras">
        `
        return
    }
    if(ch === 3){
        _robotChoiseContainer.innerHTML= `<img class="" src="svg/scissors-1297454.svg" alt="tijeras">`
        return
    }
    // _robotChoiseContainer.innerHTML= 
    
}
