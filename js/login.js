const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
let form_elem = $('#form_login');
let img_elem = $('#img_login');
const slideOutLeft = 'animated-fast ' + 'slideOutLeft';
const slideOutRight = 'animated-fast ' + 'slideOutRight';
const view = {

    goToRegister() {
        form_elem.addClass(slideOutLeft)
            .one(animationEnd, function() {

                form_elem.removeClass(slideOutLeft);
        });
        img_elem.addClass(slideOutRight)
            .one(animationEnd, function() {

                img_elem.removeClass(slideOutRight);
                $('#section_register').removeClass('hide');
                $('#section_login').hide();
        });
    },

    goToLogin() {
        
        $('#form_register').addClass(slideOutLeft)
            .one(animationEnd, function() {

            $('#form_register').removeClass(slideOutLeft);
        });
        $('#img_register').addClass(slideOutRight)
            .one(animationEnd, function() {
            
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
        
        if(email === 'vippass' && pass === 'vippass') {

            redirect("login", "index");
        }else if(email === 'first' && pass === 'first') {
            
            redirect("login", "firstState");
        }else {

            form_elem.addClass('animated-fast ' + 'shake')
                .one(animationEnd, function() {
                    
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

        let value = document.getElementById(input).value ;
        console.log(!isNull(value));
        console.log(!isSpecialChar(value));
        if( !isNull(value) || !isSpecialChar(value) ) {
            // TODO
        }
    }
}

const redirect = (from , where) => {

    const res = document.URL.replace(from, where);
                window.open(res,"_self");
};

$('#formLogin').submit(function (e) {

    e.preventDefault();
    submit.login();    
});


$('#formRegister').submit(function (e) {

    e.preventDefault();
    submit.register();    
});