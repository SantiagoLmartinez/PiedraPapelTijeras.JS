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
const piedra = 1
const papel = 2
const tijeras = 3

let userPoints = 0
let robotPoints = 0

// spinner
const _spinner = document.querySelector('#spinner')
// events listener

_piedraBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en piedra')
    
    winner(playerChoise(piedra), choiseRobot() )
})
_papelBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en papel')
    winner(playerChoise(papel), choiseRobot() )

})
_tijerasBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en tijeras')
    winner(playerChoise(tijeras), choiseRobot() )

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
    if(userPoints === 3){
        alert('Ganaste')
        return
    }
    if(robotPoints === 3){
        alert('Perdiste')
        return    
    }

    if(player === 2 && robot === 1){
        console.log('papel gana contra piedras // USER + 1 ')
        _userPoints.textContent = `${ userPoints = userPoints + 1 }`
        return 
    }

    if(player === 2 && robot === 3){
        console.log('papel pierde contra tijeras // ROBOT + 1')
        _robotPoints.textContent = `${robotPoints = robotPoints + 1 }`
        return  
    }

    if(player === 1 && robot === 3){
        console.log('piedra gana contra tijeras // USER + 1')
        _userPoints.textContent = `${userPoints = userPoints +1}`

        return 
    }
    if(player === 1 && robot === 2){
        console.log('piedra pierde contra papel // ROBOT + 1')
        _robotPoints.textContent = `${robotPoints = robotPoints +1 }`

        return 
    }
    if(player === 3 && robot === 1){
        console.log('tijeras pierde contra piedra // ROBOT + 1')
        _robotPoints.textContent = `${robotPoints = robotPoints  +1}`

        return 
    }
    if(player === 3 && robot === 2){
        console.log('tijeras gana contra papel // USER + 1')
        _userPoints.textContent = `${userPoints = userPoints +1 }`

        return 
    }
    if(player === robot){
        console.log('Empate')
    }
}

// pintar en pantalla que eligio el robot
const printRobotChoise = (ch) =>{
    _robotChoiseContainer.innerHTML = ''

    // setTimeout( 
    //     function(){
    //         _robotChoiseContainer.innerHTML = '<div class="spinner-border d-none" role="status">'
    //     _spinner.classList.as('d-none')   
    //     },2000)

        // _spinner.classList.add('d-none')

    // _robotImg.src
        if(ch === 1){
        _robotChoiseContainer.innerHTML= `<img class="" src="svg/piedra.svg" alt="piedra">`
        return
    }
    if(ch === 2){
        _robotChoiseContainer.innerHTML= `
        <img class="" src="svg/papel.svg" alt="papel">
        `
        return
    }
    if(ch === 3){
        _robotChoiseContainer.innerHTML= `<img class="" src="svg/tijeras.svg" alt="tijeras">`
        return
    }
    // _robotChoiseContainer.innerHTML= 
    
}
