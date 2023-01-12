
var shape;
const contacts = []; //array of objects

do {
    var shape = prompt("What Operation do you want ?\n Add or Search");
    if (shape != null && shape != "") {
        switch (shape.toLowerCase()) {
            case "add": {
                add();
            } break;

            case "search": {
                search();
            } break;
            default:
                { alert("Invaild Operation") }
        }
    } 

    var ans = confirm("Do you want to continue?");
    if (!ans)
        break;
} while (true)


function add() {
    var userName = prompt("Enter Name: ");
    var userPhone = prompt("Enter Phone: ");
    if (userName != null && userName != "" && userPhone != null && userPhone != "") {
        var person = {
            name: userName,
            phone: userPhone,
        };
        contacts.push(person);
    }
    else {
        alert("Enter Vaild Data");
    }
}

function search() {
    var userName = prompt("Enter Name: ");
    if (userName != null && userName != "") {
        //const searchObject = contact.findAll((person) => person.name==userName);
        const searchObject = contacts.filter((person) => person.name == userName);
        console.log(searchObject);
        if (searchObject.length != 0) {
            var i = 1;
            var display = "";
            searchObject.forEach(person => {
                display = display + `Person ${i} :\n
                Name : ${person.name}\n
                Phone : ${person.phone}\n`;
                i++;
            });
            alert(display);
        }
        else {
            alert("Not Found This Name");
        }
    }
    else {
        alert("Enter Vaild name");
    }
}
