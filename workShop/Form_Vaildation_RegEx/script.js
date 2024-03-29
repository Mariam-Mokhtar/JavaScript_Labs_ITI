var inputs = document.getElementsByClassName("form-control");
var nameAlert = document.getElementById("nameAlert");
var regex;
var vaildForm = false;
var form = document.querySelector("form");
var inputsArray = Object.values(inputs);

var patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([\w\.-]+)@([a-z\d]+)\.([a-z]{3,5})(\.[a-z]{2,5})?$/, //yourname @ domain.com(.uk)
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@!#%&_])[\w@!#%&]{8,}$/
}

function validate(field, pattern) {
    var text = document.querySelector(`#${field.id}+div`);
    if (pattern.test(field.value)) {
        text.classList.add("d-none");
        field.classList.remove("is-invalid")
        field.classList.add("is-valid")
        if (field.id === "password") {
            document.getElementById("repeatedPassword").disabled = false;
        }
    }
    else {
        text.classList.remove("d-none");
        field.classList.add("is-invalid")
        field.classList.remove("is-valid")
        if (field.id === "password") {
            document.getElementById("repeatedPassword").disabled = true;
        }
    }
}

for (var input of inputs) {
    input.addEventListener('keyup', (e) => {
        if (e.target.attributes.name.value == "repeatedPassword") {
            validate(e.target, regex);
        } else {
            validate(e.target, patterns[e.target.attributes.name.value]);
            if (e.target.attributes.name.value == "password") {
                vaildatePassStyle(e.target.value)
                regex = new RegExp(`${e.target.value}`);
            }
        }
    });
}
function vaildatePassStyle(pass) {
    if (containsUppercase(pass)) {
        replace(".big-letter", true)
    }
    else {
        replace(".big-letter", false)
    }
    if (containsSpecialChar(pass)) {
        replace(".special-char", true)
    } else {
        replace(".special-char", false)
    }
    if (containsDigit(pass)) {
        replace(".num", true)
    } else {
        replace(".num", false)
    }
    if (pass.length >= 8) {
        replace(".leng", true)
    }
    else {
        replace(".leng", false)
    }
}
function containsUppercase(str) {
    return /[A-Z]/.test(str);
}
function containsSpecialChar(str) {
    return /[@!#%&_]/.test(str);
}
function containsDigit(str) {
    return /[\d]/.test(str);
}
function replace(elementClass, vaild) {
    var icon = document.querySelector(`${elementClass} i`);
    var text = document.querySelector(elementClass);
    if (vaild) {
        icon.classList.replace("bi-x-lg", "bi-check-lg")
        text.classList.replace("text-danger", "text-success")
    }
    else {
        icon.classList.replace("bi-check-lg", "bi-x-lg")
        text.classList.replace("text-success", "text-danger")
    }
}
form.addEventListener("submit", (e) => {
    if (!inputsArray.every(checkVaildate)) {
        e.preventDefault();
    }
})
function checkVaildate(element) {
    return element.classList.contains("is-valid");
}