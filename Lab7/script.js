document.body.style.backgroundColor="whitesmoke";
(function () {
    'use strict'
    // bootstrap java script vaildation 
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else{
                 // my own implemention --> when form vaild 
                var login = {
                    user_name: document.getElementById("validationCustomUsername").value,
                    password: document.getElementById("inputPassword4").value
                }
                console.log(login);
                if (login.user_name === "admin" && login.password === "123") {
                  document.getElementById("sucess").classList.remove("d-none");
                  document.getElementById("fail").classList.add("d-none");
                }
                else {
                  document.getElementById("fail").classList.remove("d-none");
                  document.getElementById("sucess").classList.add("d-none");
                }
                }

                form.classList.add('was-validated');
                event.preventDefault();
             
            }, false)
        })
})()

