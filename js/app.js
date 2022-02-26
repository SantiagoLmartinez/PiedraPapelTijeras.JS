const piedra = 1
const papel = 2
const tijeras = 3


let userPoints = 0
let robotPoints = 0

// tablero
const _piedraBtn = document.querySelector('.piedra')
const _papelBtn = document.querySelector('.papel')
const _tijerasBtn = document.querySelector('.tijeras')

const _piedr = 'piedra'

const _machine = document.getElementById('machine')

const _userJugada = document.getElementById('userjugada')
const _robotJugada = document.getElementById('robotJugada')

// alertas
const _alertaGanadora = document.getElementById('alertaGanadora')
const _alertaPerdedora = document.getElementById('alertaPerdedora')
const _btnCerrarAlerta = document.querySelector('.btn-close')

const playerChoise = (ch) =>{
    console.log('User: ',ch)
    return  ch

}



// robot play 
const robotChoise = () =>{
    // const _spinner = document.getElementById('spinner')
    // const _machine = document.getElementById('machine')
    ch = Math.floor(Math.random() *3) + 1 
    

    // _spinner.classList.remove('d-none')   
    _machine.innerHTML = ''     
        setTimeout( 
        function(){
            clearInterval(interval)
            // _spinner.classList.add('d-none')
            
            if(ch === 1){
                _machine.innerHTML = `
                <img id="piedra" class="w-75 " src="svg/piedra.svg" alt="piedra">`
                _robotJugada.innerHTML = 'Piedra'
            }

            if(ch === 2){
                _machine.innerHTML = '<img id="piedra" class="w-75 " src="svg/papel.svg" alt="piedra">'
                _robotJugada.innerHTML = 'Papel'

            }

            if(ch === 3){
                _machine.innerHTML = '<img id="piedra" class="w-75 " src="svg/tijeras.svg" alt="piedra">'
                _robotJugada.innerHTML = 'Tijeras'
                
            }
        },2000)



    console.log('Robot: ',ch)
    return ch 
}

function machineRandom(ch){
    ch = Math.floor(Math.random() *3) + 1 
    return ch
}

// select winner

const winner = (playerChoise, robotChoise) =>{
interval = setInterval(()=>{
    const robotChoise2 = machineRandom();
    if(robotChoise2 === 1){_machine.innerHTML = `<h2>Piedra</h2>`}
    if(robotChoise2 === 2){_machine.innerHTML = `<h2>Papel</h2>`}
    if(robotChoise2 === 3){_machine.innerHTML = `<h2>Tijeras</h2>`}
    // console.log(robotChoise2)
},500)

    setTimeout( 
        function(){
            if(playerChoise === robotChoise){
                // _machine.innerHTML = `<h3>EMPATE</h3>`
                
                return console.log('Empate')  
            }
            
            else if(playerChoise === piedra ){
                if(robotChoise === 2){
                    robotPoints++
                    points()
        
                    return  console.log('user:Piedra PIERDE contra robot:Papel')}
                if(robotChoise === 3){
                    userPoints++
                    points()
        
                    return console.log('user:Piedra GANA contra robot: Tijeras')}
        
            }else if(playerChoise === papel ){
                if(robotChoise === 3){
                    robotPoints++
                    points()
        
                    return console.log('user: Papel PIERDE contra robot:Tijeras')}
                if(robotChoise === 1){
                    userPoints++ 
                    points()
        
                    return console.log('user: Papel GANA contra robot: Piedra')}
        
            }else if(playerChoise === tijeras ){ 
                if(robotChoise === 1){
                    robotPoints++
                    points()
        
                    return console.log('user: Tijeras PIERDE contra robot: Piedra')}
                if(robotChoise === 2){
                    userPoints++ 
                    points()
        
                    return console.log('user: Tijeras GANA contra robot: Papel')}
            }
        },1000)
}



const points = () =>{
    // puntos
    const _userPoints = document.querySelector('.userPoints')
    const _robotPoints = document.querySelector('.robotPoints')

    _userPoints.innerHTML = userPoints
    _robotPoints.innerHTML = robotPoints

    if(userPoints === 3){
        _alertaGanadora.classList.remove('d-none')
        setTimeout(() => { _alertaGanadora.classList.add('d-none')
        // location.reload();

    }, 9000);

        // alert('GANASTE')
    }
    
    if(robotPoints === 3){
        _alertaPerdedora.classList.remove('d-none')
        setTimeout(() => { _alertaPerdedora.classList.add('d-none')
        // location.reload();

    }, 9000);
        // alert('Perdiste')
    }
}


//Player play 
_piedraBtn.addEventListener('click', (e)=>{
    
    _userJugada.innerHTML = 'Piedra'
    // console.log ('diste click en piedra')
    winner(playerChoise(piedra), robotChoise())

})

_papelBtn.addEventListener('click', (e)=>{
    _userJugada.innerHTML = 'Papel'

    // console.log ('diste click en papel')
    winner(playerChoise(papel), robotChoise() )
})

_tijerasBtn.addEventListener('click', (e)=>{
    _userJugada.innerHTML = 'Tijeras'

    // console.log ('diste click en tijeras')
    winner(playerChoise(tijeras), robotChoise() )
})

_btnCerrarAlerta.addEventListener('click', ()=>{
    location.reload();

})
// points()
