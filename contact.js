// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()



/*function seterror(id, error) {
    element = document.getElementById(id);
    element = document.getElementsByClassName('formerror')[0].innerHTML = error;

}

function clearErrors() {
    errors = getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function validateForm() {
    var returnval = true;





    var name = document.forms['contactForm']["fname"].value;

    if (name.length < 5) {
        seterror("Name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("Name", "*name field is mandatory");
        returnval = false;
    }

    var email = document.forms['contactForm']["femail"].value;

    if (email.length > 30) {
        seterror("Email", "*Length of email is too long");
        returnval = false;
    }

    if (email.length == 0) {
        seterror("Email", "*email field is mandatory");
        returnval = false;
    }

    return returnval;


}*/