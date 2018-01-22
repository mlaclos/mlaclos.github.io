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
    constructor(powierzchnia, miasto, rokBudowy, pokoje) {
        super(powierzchnia, miasto);
        // this.rokBudowy = rokBudowy;
        this.pokoje = pokoje;
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


let select = $('select');

let houseDiv = $('#houseInputs');
let flatDiv = $('#flatInputs');
let landDiv = $('#landInputs');

flatDiv.hide();
landDiv.hide();

select.on('change', function(event) {

    let typNieruchomosci = select.val();

    switch (typNieruchomosci) {
        case 'house':
            houseDiv.show();
            flatDiv.hide();
            landDiv.hide();
            break;
        case 'flat':
            houseDiv.hide();
            flatDiv.show();
            landDiv.hide();
            break;
        case 'land':
            houseDiv.hide();
            flatDiv.hide();
            landDiv.show();
            break;
    }

});


$('form').on('submit', function(event) {
    event.preventDefault();

    let self = $(this);
    let city = self.find('#city').val();
    let street = self.find('#street').val();
    let noHouse = self.find('#no').val();
    let noFlat = self.find('#flat_no').val();
    let powierzchnia = self.find('#powierzchnia').val();
    let ogloszenie;






    let typNieruchomosci = $('select').val();

    switch (typNieruchomosci) {
        case 'house':
            ogloszenie = new Dom(powierzchnia, city);
            listaOgloszen.append('<li data-type="house">' + city + ', ' + street + ' ' + noHouse + deleteButton + ' </li>');
            break;
        case 'flat':
            ogloszenie = new Mieszkanie(powierzchnia, city, pokoje);
            listaOgloszen.append('<li data-type="flat">' + city + ', ' + street + ' ' + noHouse + 'm. ' + noFlat + deleteButton + ' </li>');
            break;
        case 'land':
            ogloszenie = new Dzialka(powierzchnia, city);
            listaOgloszen.append('<li data-type="land">' + city + ', ' + street + ' ' + noHouse + 'm. ' + noFlat + deleteButton + ' </li>');
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

    let array = Array.from(listaOgloszen.children());
    let currentLi = this.parentElement; // z elem. jQuerowym: $(this).parent() nie działało, bo nie zgadzał sie typeof
    let index = array.indexOf(currentLi);
    Properties.splice(index, 1);
    console.log(Properties);

    $(currentLi).remove();
    Counter();


});

let filters = $('#filters').find('button');

filters.on('click', function(event) {

    let type = $(this).data('type');
    console.log(type);

    switch (type) {
        case 'house':
            $('li[data-type="house"]').show();
            $('li[data-type="flat"]').hide();
            $('li[data-type="land"]').hide();
            break;
        case 'flat':
            $('li[data-type="house"]').hide();
            $('li[data-type="flat"]').show();
            $('li[data-type="land"]').hide();
            break;
        case 'land':
            $('li[data-type="house"]').hide();
            $('li[data-type="flat"]').hide();
            $('li[data-type="land"]').show();
            break;
        case 'all':
            $('li').show();
            break;
    }

    Counter();
});
