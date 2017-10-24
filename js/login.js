const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
let form_elem = $('#form_login');
let img_elem = $('#img_login');
const slideOutLeft = 'animated-fast ' + 'slideOutLeft';
const slideOutRight = 'animated-fast ' + 'slideOutRight';
let isMatch;
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
        clear('formLogin');
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
        clear('formRegister');
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

        ctrl.isMatch('r_password', 'r_repassword')
        if (isMatch) {
            let innerBtnText = document.getElementById('register_btn_text');
            let status = document.getElementById('submit_status');
            
            let loading = `<i class="fa fa-circle-o-notch fa-spin"></i>
                        <span class="sr-only">Loading...</span>`
            innerBtnText.innerHTML = loading;
            API.register(ctrl.stateBtn.type.value).done(function (response) {

                innerBtnText.innerHTML = 'Create Account';
                if(response.success){

                    sessionStorage.email = JSON.stringify(ctrl.stateBtn.type.value.email);
                    sessionStorage.username = JSON.stringify(ctrl.stateBtn.type.value.username);
                    redirect("login", "verify");
                }else{
                    status.innerHTML = response.message.message;
                }
            });
        }
    }
}

const ctrl = {
    stateBtn: {

        type: {
            status: {
                'firstname': 0,
                'email': 0,
                'username': 0,
                'password': 0,
                'repassword': 0
            },
            value: {
                'firstname': '',
                'email': '',
                'username': '',
                'password': ''
            }
        },
        plus(idx, value) {
            if (ctrl.stateBtn.type.status[idx] === 0) {
                ctrl.stateBtn.type.status[idx] += 1;
            }
            ctrl.stateBtn.type.value[idx] = value;
        },
        minus(idx) {

            if (ctrl.stateBtn.type.status[idx] !== 0) {
                ctrl.stateBtn.type.status[idx] -= 1;
            }
        },
        checkState() {
            const vals = Object.keys(ctrl.stateBtn.type.status).map(key => ctrl.stateBtn.type.status[key]);
            const idx = vals.indexOf(0);
            if (idx === -1) {
                $('#register_btn').removeAttr('disabled');
            } else {
                $('#register_btn').attr('disabled', 'disabled');
            }
        }
    },

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

            ctrl.stateBtn.minus(type);

        } else if (isSpecialChar(value)) {

            // Have a Special character
            status_elem.innerHTML = type + validation_alert.Invalid.Invalid_specialchar;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem).addClass(validation_alert.Invalid.Invalid_form_class);

            ctrl.stateBtn.minus(type);

        } else if (type === 'email' && !isValidEmail(value)) {
            // email invalid
            status_elem.innerHTML = validation_alert.Invalid.Invalid_email + type;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem).addClass(validation_alert.Invalid.Invalid_form_class);

            ctrl.stateBtn.minus(type);

        } else if (type === 'password' &&
            (!isMoreThan(8, value) ||
                !hasLowercase(value) ||
                !hasUppercase(value) ||
                !hasNumber(value))) {
            ctrl.isMatch('r_password', 'r_repassword');
            // password < 5 character
            status_elem.innerHTML = validation_alert.Invalid.Invalid_email + type;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem).addClass(validation_alert.Invalid.Invalid_form_class);

            ctrl.stateBtn.minus(type);

        } else {
            // Valid
            status_elem.innerHTML = "";
            $(elem).removeClass('has-error');

            ctrl.stateBtn.plus(type, value);
        }
        ctrl.stateBtn.checkState();
    },

    isMatch(string1, string2) {

        let elem1 = document.getElementById(string1);
        let elem2 = document.getElementById(string2);
        let type = string2.substr(string2.indexOf('_') + 1, string2.length - 1);
        let value1 = elem1.getElementsByTagName('input')[0].value;
        let value2 = elem2.getElementsByTagName('input')[0].value;
        let status_elem = document.getElementById(string2 + '_status');

        if (value1 !== value2) {

            status_elem.innerHTML = validation_alert.Invalid.Invalid_notmatch;
            status_elem.className = validation_alert.Invalid.Invalid_text_class;
            $(elem2).addClass(validation_alert.Invalid.Invalid_form_class);

            ctrl.stateBtn.minus(type);
            isMatch = false;
        } else {
            // Valid
            status_elem.innerHTML = "";
            $(elem2).removeClass('has-error');

            ctrl.stateBtn.plus(type);
            isMatch = true;
        }
        ctrl.stateBtn.checkState();
    },


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

const clear = (formname) => {
    document.forms[formname].reset();
}
window.onload = clear('formRegister');