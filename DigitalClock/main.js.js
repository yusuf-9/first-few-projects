function time (){ var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var HoursModified1 = hours % 12 || 12;
var MinutesModified = minutes.toString().padStart(2, "0");
var SecondsModified = seconds.toString().padStart(2, "0");
var HoursModified2 = HoursModified1.toString().padStart(2, "0");
var am = HoursModified2 > 12;
var RenderedTime = HoursModified2 + ":" + MinutesModified + ":" + SecondsModified + " " + (am ? "AM" : "PM");
document.getElementById("time").innerHTML = RenderedTime;
}


setInterval(() => {
time()
}, 500)
time()



