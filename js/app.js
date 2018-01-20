let Properties = [];



class Property {
    constructor(powierzchnia, miasto) {
        this.powierzchnia = powierzchnia;
        this.miasto = miasto;
    }
    showInfo() {
        console.log("powierchnia: " + this.powierzchnia + ', miatso: ' + this.miasto);
    }
    showPlace() {
        console.log('to tutaj!');
    }
}

class Dom extends Property {
    constructor(powierzchnia, miasto, rodzajZabudowy, rynek) {
        super(powierzchnia, miasto);
        // this.rodzajZabudowy = rodzajZabudowy;
        // this.rynek = rynek;
    }
    showInfo() {
        console.log("powierzchnia: " + this.powierzchnia + ', Miasto: ' + this.miasto + ', Rynek: ' + this.rynek);
    }
}

class Mieszkanie extends Property {
    constructor(powierzchnia, miasto, rokBudowy, czynsz) {
        super(powierzchnia, miasto);
        // this.rokBudowy = rokBudowy;
        // this.czynsz = czynsz;
    }

}

class Dzialka extends Property {
    constructor(powierzchnia, miasto, ogrodzenie, typDzialki) {
        super(powierzchnia, miasto);
        // this.ogrodzenie = ogrodzenie;
        // this.typDzialki = typDzialki;
    }
}

let listaOgloszen = $('.offers');
let deleteButton = '<button class="deleteButton">Usuń ogłoszenie</button>';


$('form').on('submit', function(event) {
    event.preventDefault();

    let self = $(this);
    let city = self.find('#city').val();
    let street = self.find('#street').val();
    let noHouse = self.find('#no').val();
    let noFlat = self.find('#flat_no').val();
    let powierzchnia = self.find('#powierzchnia').val();
    let ogloszenie;



    listaOgloszen.append('<li>' + city + ', ' + street + ' ' + noHouse + '/' + noFlat + ', pow: ' + powierzchnia + ' m2' + deleteButton + ' </li>').ap;


    let typNieruchomosci = $('select').val();

    switch (typNieruchomosci) {
        case 'house':
            ogloszenie = new Dom(powierzchnia, city);
            break;
        case 'flat':
            ogloszenie = new Mieszkanie(powierzchnia, city);
            break;
        case 'land':
            ogloszenie = new Dzialka(powierzchnia, city);
            break;

    }

    Counter();

    Properties.push(ogloszenie);
    console.log(Properties);

});



function Counter() {
    let counterPlace = $('.offers-no');
    let counterOgloszen = listaOgloszen.find('li:visible').length;
    counterPlace.text(counterOgloszen);
}


listaOgloszen.on('click', 'button', function(event) {



});

let filtres = $('#filtres').find('button');

filtres.on('click', function() {

    //let type = $(this).

});


//li[data-type="+ "]
