var time = prompt("Enter Time in 24 hour type");
time = Number(time);
var label;
if (!isNaN(time) && time >= 0 && time <= 24) {

    if (time < 12 || time == 24) {
        label = "am";
    }
    else {
        label = "pm";
    }
    if (time == 12 || time == 24) { time = 12; }
    else { time = time % 12; }
    alert(`Time in 12 hour type is ${time + label}`);
}
else
{
    alert("Not Vaild Time")
}