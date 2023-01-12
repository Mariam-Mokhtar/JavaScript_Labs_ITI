var prev = false;
var firstNum;
var shape;
var secNum;
var result = 0;

outer: do {
    var vaildNum = true;
    if (!prev) { firstNum = prompt("Enter First Number :"); }
    shape = prompt("Enter an operation (sum ,multi,subtract,division,moduls) :");
    secNum = prompt("Enter Second Number :");
    if (firstNum != null && firstNum != "" && shape != null && shape != "" && secNum != null && secNum != "") {
        firstNum = Number(firstNum);
        secNum = Number(secNum);
        if (!isNaN(firstNum) && !isNaN(secNum)) {
            switch (shape.toLowerCase()) {
                case "sum": result = firstNum + secNum;
                    break;

                case "multi": result = firstNum * secNum;
                    break;

                case "subtract": result = firstNum - secNum;
                    break;

                case "division": result = firstNum / secNum;
                    break;

                case "moduls": result = firstNum % secNum;
                    break;

                default:
                    { alert("Invaild Operation") }
                    break outer;
            }
            alert(`Result of ${shape} is ${result}`);
        }
        else {
            var vaildNum = false;
            alert(`Invaild Numbers`);
        }
        if (vaildNum) {
            var prevCheck = confirm("Do you want to use previous Result?");
            if (prevCheck) {
                prev = true;
                firstNum = result;
            }
        }

    }
    if (!prevCheck) {
        var ans = confirm("Do you want to continue to do new calculation?");
        if (!ans)
            break;
    }
} while (true)
