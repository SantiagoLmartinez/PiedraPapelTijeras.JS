const _piedraBtn = document.querySelector('.piedra')
const _papelBtn = document.querySelector('.papel')
const _tijerasBtn = document.querySelector('.tijeras')
const _robotChoise = document.querySelector('.piedra')
_robotChoiseContainer = document.querySelector('.robotChoiseContainer')

const piedraValue = 1
const papelValue = 2
const tijerasValue = 3

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

// function
const playerChoise = (ch) =>{
    console.log('Player :', ch)
    return  ch
}

const choiseRobot = (ch) =>{
     ch = Math.floor(Math.random() *3) + 1 
    console.log('Robot :',ch)
    printRobotChoise(ch)

    return  ch;
}

const winner = (player, robot) =>  {

    if(player === 2 && robot === 1){
        console.log('papel gana contra piedras')
        return 
    }
    if(player === 2 && robot === 3){
        console.log('papel pierde contra tijeras')
        return  console.log('papel pierde contra tijeras')
    }
    if(player === 1 && robot === 3){
        console.log('piedra gana contra tijeras')
        return 
    }
    if(player === 1 && robot === 3){
        console.log('piedra pierde contra papel')
        return 
    }
    if(player === 3 && robot === 1){
        console.log('tijeras pierde contra piedra')
        return 
    }
    if(player === 3 && robot === 2){
        console.log('tijeras gana contra papel')
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
