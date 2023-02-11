var alarm;
var exist_alarm = false;
function showTime() {
    var date = new Date();
    week_day(date.getDay());
    document.getElementById("MyClockDisplay").textContent = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setTimeout(showTime, 1000);
    if (exist_alarm) {
        if (Math.floor(Date.now() / 1000) === alarm) {
            let alerm_audio = new Audio("./audio/alarm.mp3");
            alerm_audio.play();
            alarm = 0;
            exist_alarm = false;
        }
    }
}

showTime();

function week_day(day_num) {
    var days_span = document.getElementsByTagName('span');
    var cur_day;
    switch (day_num) {
        case 0: //sun
            cur_day = 6;
            break;
        case 1: //mon
            cur_day = 0;
            break;
        case 2: //tue
            cur_day = 1;
            break;
        case 3: //wed
            cur_day = 2;
            break;
        case 4: //thu
            cur_day = 3;
            break;
        case 5: //fri
            cur_day = 4;
            break;
        case 6: //sat
            cur_day = 5;
            break;
    }
    days_span[cur_day].style.color = "black";
}

var reset = document.getElementById("reset");
var set_alarm = document.getElementById("set-alarm");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

reset.addEventListener('click', function () {
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    alarm = 0;
    console.log(alarm);
    exist_alarm = false;
});

set_alarm.addEventListener('click', function () {
    var h = hours.value;
    var m = minutes.value;
    var s = seconds.value;
    alarm = Math.floor(Date.now() / 1000) + Number((h * 60 * 60) + (m * 60) + (s));
    exist_alarm = true;
    document.getElementById("alarm_alert").classList.remove('d-none');
    setTimeout(function(){ document.getElementById("alarm_alert").classList.add('d-none');},1000);
});

