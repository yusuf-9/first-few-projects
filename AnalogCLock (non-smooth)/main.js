function SetTime(){
    var now = new Date();
    var secondsrotation = now.getSeconds() * 6;
    var minuterotation = now.getMinutes() * 6;
    var hours = now.getHours() % 12 || 12;
    var hoursrotation = (hours * 30) + (now.getMinutes() / 2);
    document.getElementById("second-hand").style.setProperty('--rotation', secondsrotation);
    document.getElementById("minute-hand").style.setProperty('--rotation', minuterotation);
    document.getElementById("hour-hand").style.setProperty('--rotation', hoursrotation);
}

SetTime();

setInterval(() => {
    var now = new Date();
    var secondsrotation = now.getSeconds() * 6;
    var minuterotation = now.getMinutes() * 6;
    var hours = now.getHours() % 12 || 12;
    var hoursrotation = (hours * 30) + (now.getMinutes() / 2);
    document.getElementById("second-hand").style.setProperty('--rotation', secondsrotation);
    document.getElementById("minute-hand").style.setProperty('--rotation', minuterotation);
    document.getElementById("hour-hand").style.setProperty('--rotation', hoursrotation);
}, 1000);



// -----------------------------------------------------------------------------------------------------------------





