
var no = prompt("Enter, How many Numbers you want ? ");
const numbers = [];
var sum = 0;
var avg;
no = Number(no);
if (!isNaN(no) && no > 0) {
    for (let i = 0; i < no; i++) {
        do {
            var num = prompt(`Enter Number ${i+1}:`);  
            num = Number(num);
            numbers[i] = num;
        } while (isNaN(num))
    }
    for (let i = 0; i < no; i++) {
        sum += numbers[i]
    }
    avg = sum / no;
    alert(`Sum of Numbers is ${sum} and avg is ${avg}`);
}
