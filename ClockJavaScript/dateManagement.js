window.onload = function(){

var elHourOutput = document.getElementById("hourOutput");
var elMinOutput = document.getElementById("minOutput");
var elSecOutput = document.getElementById("secOutput");
var elDateOutput = document.getElementById("dateOutput");

var startTime = new Date();

elDateOutput.innerText = startTime.getDate() + " ." + startTime.getMonth() + " . " + startTime.getFullYear();

if(startTime.getHours() < 10) {
    elHourOutput.innerText = "0" + startTime.getHours();
}else {
    elHourOutput.innerText = startTime.getHours();
}

if(startTime.getMinutes() < 10){
    elMinOutput.innerText = "0" + startTime.getMinutes();
}else {
    elMinOutput.innerText = startTime.getMinutes();
}

if(startTime.getSeconds()< 10){
    elSecOutput.innerText = "0" + startTime.getSeconds();
}else{
    elSecOutput.innerText = startTime.getSeconds()
}

startClock();

//Functions

function timeCounter(){
    var newTime = new Date();
    console.log(newTime.getSeconds());
    if (newTime.getSeconds() < 10){
        elSecOutput.innerText = "0" + newTime.getSeconds();
    }else{
        elSecOutput.innerText = newTime.getSeconds();
    }

    if (newTime.getSeconds() == 0){
        if (newTime.getMinutes() < 10){
            elMinOutput.innerText = "0" + newTime.getMinutes();
        }else{
            elMinOutput.innerText = newTime.getMinutes();
        }
    }

    if (newTime.getMinutes() == 0){
        if (newTime.getHours() < 10){
            elHourOutput.innerText = "0"  + newTime.getHours();
        } else {
            elHourOutput.innerText = newTime.getHours();
        }
    }

    if (newTime.getHours() == 0){
        elDateOutput.innerText = newTime.getDate() + "" + newTime.getMonth() + "  " + newTime.getFullYear();
    }
}

function startClock(){
    setInterval(timeCounter, 1000);
}

}