const _piedraBtn = document.querySelector('.piedra')
const _papelBtn = document.querySelector('.papel')
const _tijerasBtn = document.querySelector('.tijeras')
const _robotChoise = document.querySelector('.piedra')

const piedraValue = 1
const papelValue = 2
const tijerasValue = 3

// events listener

_piedraBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en piedra')
    playerChoise(piedraValue)
})
_papelBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en papel')
    playerChoise(papelValue)

})

_tijerasBtn.addEventListener('click', (e)=>{
    // console.log ('diste click en tijeras')
    playerChoise(tijerasValue)

})

// function
const playerChoise = (choisePlayer) =>{
    winner(choisePlayer, choiseRobot() )
    return console.log('Player:',  choisePlayer)
}

const choiseRobot = () =>{
     robotCh = Math.floor(Math.random() *3) + 1 
    //  console.log('Robot :',robotCh)
    return console.log('Robot :', robotCh);
}

const winner = (player, robot) =>  {
    if(player === papelValue && robot === piedraValue){
        console.log('papel pierde contra tijeras')
        return 
    }

    // console.log( choiseRobot())

}