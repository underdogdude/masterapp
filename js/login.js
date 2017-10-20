const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
let form_elem = $('#form_login');
let img_elem = $('#img_login');
const slideOutLeft = 'animated-fast ' + 'slideOutLeft';
const slideOutRight = 'animated-fast ' + 'slideOutRight';
const view = {

    goToRegister() {
        form_elem.addClass(slideOutLeft)
            .one(animationEnd, function () {

                form_elem.removeClass(slideOutLeft);
            });
        img_elem.addClass(slideOutRight)
            .one(animationEnd, function () {

                img_elem.removeClass(slideOutRight);
                $('#section_register').removeClass('hide');
                $('#section_login').hide();
            });
    },

    goToLogin() {

        $('#form_register').addClass(slideOutLeft)
            .one(animationEnd, function () {

                $('#form_register').removeClass(slideOutLeft);
            });
        $('#img_register').addClass(slideOutRight)
            .one(animationEnd, function () {

                $('#img_register').removeClass(slideOutRight);
                $('#section_register').addClass('hide');
                $('#section_login').show();
            });
    },
}

const submit = {

    login() {

        let email = $('#login_email').val().trim();
        let pass = $('#login_password').val().trim();
        // save email to sessgion storage
        sessionStorage.email = email ? email : 'N/A';

        if (email === 'vippass' && pass === 'vippass') {

            redirect("login", "index");
        } else if (email === 'first' && pass === 'first') {

            redirect("login", "firstState");
        } else {

            form_elem.addClass('animated-fast ' + 'shake')
                .one(animationEnd, function () {

                    form_elem.removeClass('animated-fast ' + 'shake');
                });
            $('#alert').show();
        }
    },

    register() {


    }
}

const ctrl = {

    isValid(input) {

        // input is ` text r_{type} ` will get only {type}
        let type = input.substr(input.indexOf('_') + 1, input.length - 1);
        let elem = document.getElementById(input);
        let status_elem = document.getElementById(input + '_status');
        let value = elem.getElementsByTagName('input')[0].value;

        // clear inner text every time
        status_elem.innerHTML = "";
        $(status_elem).removeClass();

        if (isNull(value)) {
            // Null
            status_elem.innerHTML = type + validation_alert.Invalid.Invalid_null;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem).addClass(validation_alert.Invalid.Invalid_form_class);

        }else if (isSpecialChar(value)) {

            // Have a Special character
            status_elem.innerHTML = type + validation_alert.Invalid.Invalid_specialchar;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem).addClass(validation_alert.Invalid.Invalid_form_class);
                
        } else if ( type === 'email' && !isValidEmail(value) ) {
             // email invalid
            status_elem.innerHTML = validation_alert.Invalid.Invalid_email + type;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem).addClass(validation_alert.Invalid.Invalid_form_class);

        }else if ( type === 'password' && !isMoreThan(6,value) ) {

            // password < 5 character
            status_elem.innerHTML = type + validation_alert.Invalid.Invalid_minimum6char;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem).addClass(validation_alert.Invalid.Invalid_form_class);

        } else {
            // Valid
            status_elem.innerHTML = "";
            $(elem).removeClass('has-error');
        }
    }
}

const redirect = (from, where) => {

    const res = document.URL.replace(from, where);
    window.open(res, "_self");
};

$('#formLogin').submit(function (e) {

    e.preventDefault();
    submit.login();
});


$('#formRegister').submit(function (e) {

    e.preventDefault();
    submit.register();
});




