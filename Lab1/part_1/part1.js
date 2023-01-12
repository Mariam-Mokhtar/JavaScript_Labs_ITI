var fName = prompt("Enter Your First Name:");
var lName = prompt("Enter Your Last Name:");

if (fName != null && lName != null&& fName != "" &&lName != "") {
    var bYear = prompt("Enter Your Birth Year:");
    bYear = Number(bYear);
    if (!isNaN(bYear)) {
        var age = 2023 - bYear;
        alert(`Welcome ${fName} ${lName} you are ${age} years old`);
    }
}

