var userName = prompt("Enter Username :");
var passWord = prompt("Enter Password :");

if (userName != null && userName != "" && passWord != null && passWord != "") {
    if (userName == "admin") {
        if (passWord = "421$$") { alert("Welcome  \n login success"); }
        else {
            alert("Invaild Password");
        }
    }
    else {
        alert("Invaild UserName");
    }
}
else {
    alert("Username or password not be entered");
}