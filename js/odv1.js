let name = prompt("Adınız nedir?");

let txtWelcome = document.getElementById("welcome");
txtWelcome.innerHTML += (name != "") ? (name[0].toUpperCase() + name.slice(1)) : "dostum";

let days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
];

updateClock()

function updateClock(){

    let txtDate = document.getElementById("date");

    let date = new Date();
    
    txtDate.innerHTML = 
    getTwoDigit(date.getHours()) + ":" + 
    getTwoDigit(date.getMinutes()) + ":" + 
    getTwoDigit(date.getSeconds()) + " " +
    days[date.getDay()-1];
    
    setTimeout(updateClock,1000);
}

function getTwoDigit(s){
    let txtReturn = s.toString();
    if(s < 10){
        return "0" + txtReturn;
    }
    return txtReturn;
}