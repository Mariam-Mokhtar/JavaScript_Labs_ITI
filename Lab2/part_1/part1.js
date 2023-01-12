do {
    var age = prompt("Enter Your age :");
    age = Number(age);
    var flag = true;
    if (!isNaN(age) && age > 0) {
        if (age > 0 && age <= 10) {
            alert("Your Status: Child");
        }
        else if (age > 10 && age <= 18) {
            alert("Your Status: Teenager");
        }
        else if (age > 18 && age <= 50) {
            alert("Your Status: Grown up");

        }
        else {
            alert("Your Status: Old");
        }
        var ans = confirm("You want to continue");
        if (!ans)
            break;
    }
    else
        break;


} while (true)