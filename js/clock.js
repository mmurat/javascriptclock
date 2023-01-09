let name = prompt("Adınız?");
let myName = document.querySelector('#myName');
myName.innerHTML = name;


setInterval(onload, 1000);

function onload() {
  const date = new Date();
  let day = date.getDay();
  let dayName = getDayName(day);
  document.querySelector("#myClock").innerHTML = date.toLocaleTimeString() + " " + dayName; 
}


function getDayName(day) {
    let dayName;
    switch(day) {
        case 1:
            dayName = "Pazartesi";
            break;
        case 2: 
            dayName = "Salı";
            break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
        case 7:
            dayName = "Pazar";
            break;
    }

    return dayName;


}


