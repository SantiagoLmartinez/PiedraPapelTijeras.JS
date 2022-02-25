const piedra = 1
const papel = 2
const tijeras = 3

let userPoints = 0
let robotPoints = 0

// tablero
const _piedraBtn = document.querySelector('.piedra')
const _papelBtn = document.querySelector('.papel')
const _tijerasBtn = document.querySelector('.tijeras')

const _machine = document.getElementById('machine')

const _userJugada = document.getElementById('userjugada')
const _robotJugada = document.getElementById('robotJugada')

// alertas
const _alertaGanadora = document.getElementById('alertaGanadora')
const _alertaPerdedora = document.getElementById('alertaPerdedora')

const playerChoise = (ch) =>{
    console.log('User: ',ch)
    return  ch

}

// robot play 
const robotChoise = () =>{
    const _spinner = document.getElementById('spinner')
    // const _machine = document.getElementById('machine')
    ch = Math.floor(Math.random() *3) + 1 

    _spinner.classList.remove('d-none')   
    _machine.innerHTML = ''     
        setTimeout( 
        function(){
            
            _spinner.classList.add('d-none')
            
            if(ch === 1){
                _machine.innerHTML = `
                <img id="piedra" class="w-75 " src="svg/piedra.svg" alt="piedra">`
                _robotJugada.innerHTML = 'Piedra'
            }

            if(ch === 2){
                _machine.innerHTML = '<img id="piedra" class="w-75 " src="svg/papel.svg" alt="piedra">'
                _robotJugada.innerHTML = 'Papel'

                // console.log('papel')
            }

            if(ch === 3){
                _machine.innerHTML = '<img id="piedra" class="w-75 " src="svg/tijeras.svg" alt="piedra">'
                _robotJugada.innerHTML = 'Tijeras'
                
                // console.log('tijeras')
            }
        },1000)



    console.log('Robot: ',ch)
    return ch 
}

// select winner

const winner = (playerChoise, robotChoise) =>{
    // points()
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
        location.reload();

    }, 6000);

        // alert('GANASTE')
    }
    
    if(robotPoints === 3){
        _alertaPerdedora.classList.remove('d-none')
        setTimeout(() => { _alertaPerdedora.classList.add('d-none')
        location.reload();

    }, 4000);
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

// points()
