
# Klasy  &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`


## Ogłoszenia

Tworzymy internetowy serwis ogłoszeń nieruchomości.
Stwórz klasę abstrakcyjną Property.

1. Stwórz klasy dla kategorii nieruchomości: dom, mieszkanie, działka.
2. Zdefiniuj wspólne parametry/metody dla wszystkich klas dziedziczących.
3. Zdefiniuj parametry/metody wyróżniające dla klas dziedziczących (użyj nadpisania konstruktora i metod jeżeli potrzeba) - niech każdy z kategorii ma po min. dwa wyróżniające parametry.

## Dodawanie ogłószenia

W pliku index.html znajduje się formularz. Napisz funkcję, która będzie zbierała wpisane dane i tworzyła z nich obiekt, odpowiedni w zależności od tego jaki typ nieruchomości jest wybrany w formularzu.
Następnie zapisz obiekt do tablicy Properties, oraz dodaj do listy ogłoszeń w elemencie ul o id offers.

Pod listą jest licznik ofert, powinien się aktualizować po dodaniu ogłoszenia.
Niech aktualizacja licznika będzie osobną funkcją.

## Usuwanie ogłoszenia

Każdy dodawany do listy #offers element, powinien mieć możliwość usunięcia z listy.
Dodaj mu przycisk, który po kliknięciu usuwa element z listy.
Pamiętaj! Po usunięciu z listy, licznik na dole powinien się zaktualizować!

Dodatkowo: element powinien też zostać usunięty z tablicy Properties


## Elementy wyróżniające ogłoszenia
Dla różnych kategorii ogłoszeń, i dla ich wyróżniających właściwości stwórz w formularzu pola wewnątrz właściwego fieldsetu. Po zmienia wartości pola select powinny się pokazywać tylko fieldset z adresem oraz fieldset z polami dla konkretnej kategorii.


## Filtrowanie ogłoszeń

Nad listą ogłoszeń znajdują się przyciski do filtrowania ogłoszeń.
Napisz funkcję, która pokazuje na liście tylko ogłoszenia danej kategorii, użyj data atrybutów.

//zrobic wszystko czyli usuwanie z tabeli, animacje przy usuwaniu, dodawaniu, etc do następnego zjazdu., w sassie najlepiej :D
