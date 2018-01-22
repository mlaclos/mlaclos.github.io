/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Properties = [];

var Property = function () {
    function Property(powierzchnia, miasto) {
        _classCallCheck(this, Property);

        this.powierzchnia = powierzchnia;
        this.miasto = miasto;
    }

    _createClass(Property, [{
        key: 'showInfo',
        value: function showInfo() {
            console.log("powierchnia: " + this.powierzchnia + ', miatso: ' + this.miasto);
        }
    }, {
        key: 'showPlace',
        value: function showPlace() {
            console.log('to tutaj!');
        }
    }]);

    return Property;
}();

var Dom = function (_Property) {
    _inherits(Dom, _Property);

    function Dom(powierzchnia, miasto, rodzajZabudowy, rynek) {
        _classCallCheck(this, Dom);

        return _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this, powierzchnia, miasto));
        // this.rodzajZabudowy = rodzajZabudowy;
        // this.rynek = rynek;
    }

    _createClass(Dom, [{
        key: 'showInfo',
        value: function showInfo() {
            console.log("powierzchnia: " + this.powierzchnia + ', Miasto: ' + this.miasto + ', Rynek: ' + this.rynek);
        }
    }]);

    return Dom;
}(Property);

var Mieszkanie = function (_Property2) {
    _inherits(Mieszkanie, _Property2);

    function Mieszkanie(powierzchnia, miasto, rokBudowy, pokoje) {
        _classCallCheck(this, Mieszkanie);

        // this.rokBudowy = rokBudowy;
        var _this2 = _possibleConstructorReturn(this, (Mieszkanie.__proto__ || Object.getPrototypeOf(Mieszkanie)).call(this, powierzchnia, miasto));

        _this2.pokoje = pokoje;
        return _this2;
    }

    return Mieszkanie;
}(Property);

var Dzialka = function (_Property3) {
    _inherits(Dzialka, _Property3);

    function Dzialka(powierzchnia, miasto, ogrodzenie, typDzialki) {
        _classCallCheck(this, Dzialka);

        return _possibleConstructorReturn(this, (Dzialka.__proto__ || Object.getPrototypeOf(Dzialka)).call(this, powierzchnia, miasto));
        // this.ogrodzenie = ogrodzenie;
        // this.typDzialki = typDzialki;
    }

    return Dzialka;
}(Property);

var listaOgloszen = $('.offers');
var deleteButton = '<button class="deleteButton">Usuń ogłoszenie</button>';

var select = $('select');

var houseDiv = $('#houseInputs');
var flatDiv = $('#flatInputs');
var landDiv = $('#landInputs');

flatDiv.hide();
landDiv.hide();

select.on('change', function (event) {

    var typNieruchomosci = select.val();

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

$('form').on('submit', function (event) {
    event.preventDefault();

    var self = $(this);
    var city = self.find('#city').val();
    var street = self.find('#street').val();
    var noHouse = self.find('#no').val();
    var noFlat = self.find('#flat_no').val();
    var powierzchnia = self.find('#powierzchnia').val();
    var ogloszenie = void 0;

    var typNieruchomosci = $('select').val();

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
    var counterPlace = $('.offers-no');
    var counterOgloszen = listaOgloszen.find('li:visible').length;
    counterPlace.text(counterOgloszen);
}

listaOgloszen.on('click', 'button', function (event) {

    var array = Array.from(listaOgloszen.children());
    var currentLi = this.parentElement; // z elem. jQuerowym: $(this).parent() nie działało, bo nie zgadzał sie typeof
    var index = array.indexOf(currentLi);
    Properties.splice(index, 1);
    console.log(Properties);

    $(currentLi).remove();
    Counter();
});

var filters = $('#filters').find('button');

filters.on('click', function (event) {

    var type = $(this).data('type');
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

/***/ })
/******/ ]);