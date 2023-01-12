alert("This is the first release of a calculator that only has a summation feature");

var first=prompt("Enter The first Number:");
var second=prompt("Enter The second Number:");
if (first != null && second != null&& first != "" && second != "") {
    first=Number(first);
    second=Number(second);
    if (!isNaN(first)&&!isNaN(second)) {
        alert(`Summation Result is ${first +second}`);
    }
}
