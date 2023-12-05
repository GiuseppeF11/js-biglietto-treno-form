// FLUSSO

/* 
-Inserire un button che attiverà tutto il nostro processo
-Calcolare il prezzo del biglietto: Km * 0,21€
--SE età < 18
---Applica 20% : prezzo * 0.80
--INVECE SE età > 65
---Applica 40% : prezzo * 0.60
-Scrivi il prezzo
*/
const sendButton = document.getElementById('send-button')

sendButton.addEventListener ('click', function() {
    const nameValue = document.getElementById ('name').value;
    document.getElementById('namePassenger').innerHTML = nameValue;

    const kmValue = document.getElementById ('km').value;
    const kmInNumber = parseInt (kmValue);

    const ageValue = document.getElementById('age').value;

    console.log('nome', nameValue, typeof nameValue);
    console.log('km', kmInNumber, typeof kmInNumber);
    console.log('age', ageValue, typeof ageValue);

    let price = (kmInNumber * 0.21);
    console.log('price', price, typeof price);

    let ticket = document.getElementById ('ticket')
    console.log('ticket ', ticket, typeof ticket);

    let cap = document.getElementById('cap').value;
    
    document.getElementById('myCap').innerHTML = cap;

    if (!isNaN(kmInNumber && cap)) {
        if (ageValue == 'minorenne') {
            price *= 0.8;
            ticket.innerHTML = 'Biglietto 20% - sconto minorenni'
        }
    
        else if (ageValue == 'over-65') {
            price *= 0.6;
            ticket.innerHTML = 'Biglietto 40% - sconto Over65'
        }
    
        else if (ageValue == 'maggiorenne') {
            ticket.innerHTML = 'Biglietto Standard'
        }
    
        document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 101);
    
        price = price.toFixed(2) + '€';
    
        const result = document.querySelector('#final-price');
    
        result.innerHTML = price;
    }

    else {
        alert('Inserisci cifre valide per i Km ed il Cap')
    }
})

const resetButton = document.getElementById('reset');

resetButton.addEventListener ('click', function() {
    document.getElementById('name').value = ''
    document.getElementById('km').value = ''
    document.getElementById('age').selectedIndex = 0;
})
