class Person {
    constructor(name, age, hours, meals) {
        this.name = name;
        this.age = age;
        this.Sleep(hours);
        this.Eat(meals);

    }
    Sleep(hours) {
        this.sleepMode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
    }
    Eat(meals) {
        this.healthRate = (meals == 1) ? `50 Health Rate` : (meals == 2) ? `75 Health Rate` : (meals >= 3) ? `100 Health Rate` : `0 Health Rate`
    }

}

class Employee extends Person {
    #id;
    #salary;
    constructor(id, name, email, salary, age, isManager, workinghours, sleephours, meals) {
        super(name, age, sleephours, meals);
        this.#id = id;
        this.#salary = salary < 1000 ? 1000 : salary;
        this.email = email;
        this.isManager = isManager;
        this.work(workinghours);
    }
    work(hours) {
        this.workMood = (hours == 8) ? `Happy` : (hours > 8) ? `Lazy` : `Tired`;
    }
    Buy(items) {
        this.#salary -= (10 * items);
    }

    set id(id) {
        this.#id = id;
    }
    get id() {
        return this.#id;
    }
    set salary(salary) {
        this.#salary = salary;
    }
    get salary() {
        return this.#salary;
    }
}
class Office {
    #Employees = [];
    hire(employee) {
        (this.#Employees).push(employee);
    }
    fire(id) {
        this.#Employees = this.#Employees.filter((employee) => employee.id != id);
    }
    getEmployee(id) {
        var employee = null;
        employee = (this.#Employees).find((emp) => emp.id == id);
        console.log(employee);
        if (employee != null) {
            if (employee.isManager == true) {
                alert(`Manager is :` + printObject(employee, false)); //manager not print salary
            }
            else {
                console.log("employee")
                alert(`Employee is :` + printObject(employee, true)); //normal emp print salary
            }
            return true
        }
        else
            return false;
    }
    getAllEmployess() {
        var i = 1;
        var display;
        var normalEmp;
        const normalEmployees = this.#Employees.filter((employee) => employee.isManager == false);
        const managers = this.#Employees.filter((employee) => employee.isManager == true);
        if (normalEmployees.length == 0 && managers.length == 0) {
            return false;
        }
        if (normalEmployees.length != 0) {
            normalEmp = true;
            normalEmployees.forEach(emp => {
                display = `Employee ${i}`;
                alert(display + printObject(emp, normalEmp));
                i++;
            })
        }
        else
            display = "No Employees\n";
        i = 1;
        if (managers.length != 0) {
            normalEmp = false;
            display = "Managers are :";
            managers.forEach(manager => {
                display = `Manager ${i} :`;
                alert(display + printObject(manager, normalEmp));
                i++;
            })
        }
        else
            display = "No Managers\n"
        return true;
    }
}
var office = new Office();

function addEmployee(isManager) {
    var id = prompt("Enter id:");
    var name = prompt("Enter name: ");
    var age = prompt("Enter age : ");
    var salary = prompt("Enter salary : ");
    var email = prompt("Enter email : ");
    var meals = prompt("Enter The number of meals you eat per day: ");
    var sleepHours = prompt("Enter The number of hours you sleep per day:");
    var workingHours = prompt("Enter The number of working Hours you spend per day: ");
    id = Number(id);
    age = Number(age);
    salary = Number(salary);
    meals = Number(meals);
    sleepHours = Number(sleepHours);
    workingHours = Number(workingHours);

    if (!isNaN(id) && name != null && name != "" && !isNaN(age) && !isNaN(salary) && age > 0 &&
        email != null && email != "" && !isNaN(meals) && !isNaN(sleepHours) && !isNaN(workingHours)) {
        var employee = new Employee(id, name, email, salary, age, isManager, workingHours, sleepHours, meals);
        office.hire(employee);
        return true
    }
    else {
        return false;
    }
}

function printObject(obj, normalEmp) {
    var append = '';
    if (normalEmp) {
        var append = `Salary: ${obj.salary}`
    }
    return `
     Name : ${obj.name}
     Id : ${obj.id}
     Email : ${obj.email}
     Age : ${obj.age}
     Working Mode : ${obj.workMood}
     Sleep Mode : ${obj.sleepMode}
     Health Rate : ${obj.healthRate}
     ${append}
     \n`;
}

function display() {
    outer: do {
        var choice = prompt(`
        For adding new employee Enter 1
        For show all employees in the office Enter 2
        For get a specific employee with his id Enter 3
        For fire an employee Enter 4
        Enter Your choice, Please :`);
        choice = Number(choice);
        if (!isNaN(choice) && choice > 0 && choice < 5) {
            switch (choice) {
                case 1: {
                    var type = prompt(`
        For adding normal employee Enter 1
        For adding manager Enter 2
        Enter Your choice, Please :`);
                    type = Number(type);
                    if (!isNaN(type)) {
                        var isManager;
                        var invaild;
                        console.log(type);
                        switch (type) {
                            case 1: isManager = false;
                                break;

                            case 2: isManager = true;
                                break;

                            default: invaild = true;;
                        }
                        if (!invaild) {
                            if (addEmployee(isManager)) {
                                alert("add sucessfully");
                            }
                            else {
                                alert("Invaild data");
                                break outer;
                            }
                        }
                        else
                            alert("invaild choice");

                    }
                }
                    break;
                case 2: {
                    if (!office.getAllEmployess()) { alert("No data to show"); }
                }
                    break;
                case 3: {
                    var id = prompt("Enter id :");
                    id = Number(id);
                    if (!isNaN(id)) {
                        if (!office.getEmployee(id)) {
                            alert("Not Found!!!");
                        }
                    }
                    else {
                        alert("InVaild data");
                    }
                }
                    break;
                case 4: {
                    var id = prompt("Enter id :");
                    id = Number(id);
                    if (!isNaN(id)) {
                        if (office.getEmployee(id)) {
                            var ans = confirm("Are you sure to delete this employee?");
                            if (ans) {
                                office.fire(id);
                                alert(`Employee with id : ${id} 
                                deleted sucessfully`);
                            }
                        }
                    }
                }
                    break;
            }
        }
        else break outer;

        var ans = confirm("Do you want to continue?");
        if (!ans)
            break outer;

    } while (true)
}

display();
