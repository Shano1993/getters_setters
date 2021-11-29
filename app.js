
// Getters

let result1 = document.querySelector('p');

let aujourdHui = new Date();

result1.innerHTML =
    "Jour de la semaine : " + aujourdHui.getDay() + "<br/>" +
    "Jour du mois : " + aujourdHui.getDate() + "<br/>" +
    "Mois en cours version JS : " + aujourdHui.getMonth() + "<br/>" +
    "Mois en cours version humaine : " + (aujourdHui.getMonth() + 1) + "<br/>" +
    "Année au format 4 chiffres : " + aujourdHui.getFullYear() + "<br/>" +
    "Année au format 2 chiffres : " + aujourdHui.getFullYear().toString().slice(2) + "<br/>" +
    "Heure " + aujourdHui.getHours() + "<br/>" +
    "Heure avec un zéro devant si besoin : " + aujourdHui.getHours().toString().padStart(2, 0) + "<br/>" +
    "Minutes : " + aujourdHui.getMinutes() + "<br/>" +
    "Minutes avec un zéro devant si besoin : " + aujourdHui.getMinutes().toString().padStart(2, 0) + "<br/>" +
    "Secondes : " + aujourdHui.getSeconds() + "<br/>" +
    "Millisecondes : " + aujourdHui.getMilliseconds()
;

// Setters

let result2 = document.getElementById('result2');

let aujourdhui = new Date();
aujourdhui.setDate(5);
aujourdhui.setMonth(10);
aujourdhui.setFullYear(2019);
aujourdhui.setHours(23);
aujourdhui.setMinutes(59);
aujourdhui.setSeconds(35);
aujourdhui.setMilliseconds(200);

result2.innerHTML =
    "Jour de la semaine : " + aujourdhui.getDay() + "<br/>" +
    "Jour du mois : " + aujourdhui.getDate() + "<br/>" +
    "Mois en cours version JS : " + aujourdhui.getMonth() + "<br/>" +
    "Mois en cours version humaine : " + (aujourdhui.getMonth() + 1) + "<br/>" +
    "Année au format 4 chiffres : " + aujourdhui.getFullYear() + "<br/>" +
    "Année au format 2 chiffres : " + aujourdhui.getFullYear().toString().slice(2) + "<br/>" +
    "Heure " + aujourdhui.getHours() + "<br/>" +
    "Heure avec un zéro devant si besoin : " + aujourdhui.getHours().toString().padStart(2, 0) + "<br/>" +
    "Minutes : " + aujourdhui.getMinutes() + "<br/>" +
    "Minutes avec un zéro devant si besoin : " + aujourdhui.getMinutes().toString().padStart(2, 0) + "<br/>" +
    "Secondes : " + aujourdhui.getSeconds() + "<br/>" +
    "Millisecondes : " + aujourdhui.getMilliseconds()
;

let result3 = document.getElementById('result3');

let ajd = new Date();
ajd.setHours(20);
ajd.setMinutes(61);

result3.innerHTML =
    "Heure : " + ajd.getHours() + "<br>" +
    "Minutes : " + ajd.getMinutes()
;