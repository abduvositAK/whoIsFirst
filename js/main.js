
var elForm = document.querySelector('form')
var eltime1 = document.querySelector('.time1')
var eltime2 = document.querySelector('.time2')
var eltime3 = document.querySelector('.time3')
var eltime4 = document.querySelector('.time4')
var elMasofa = document.querySelector('.masofa')
var elBtn = document.querySelector('.btn')

function masofa(){
    if(elMasofa.value > 0 ){
        console.log('ishlayapti');
        var time1 = elMasofa.value / 4
        var time2 = elMasofa.value / 20
        var time3 = elMasofa.value / 70
        var time4 = elMasofa.value / 800
        
        eltime1.textContent = time1.toFixed(1)     
        eltime2.textContent = time2.toFixed(2)     
        eltime3.textContent = time3.toFixed(2)
        eltime4.textContent = time4.toFixed(2)
        
    }
    else{
        console.log('ok');
    }
}


