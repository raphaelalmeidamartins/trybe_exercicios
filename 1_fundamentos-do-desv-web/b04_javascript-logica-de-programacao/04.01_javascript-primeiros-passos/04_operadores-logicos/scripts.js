//Operador AND &&

const currentHour = 4;
let message = "";

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 &&  currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}

console.log(message);

//Operador OR ||

let weekDay = "sétima-feira";

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira" ) {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else if (weekDay == "sábado" || weekDay == "domingo") {
    console.log("FINALMENTE, descanso merecido UwU.")
} else {
    console.log("Este dia não existe, ainda")
}

//Operador NOT !

console.log(!(2 + 2) === 4);