var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
let form_elem = $('#form_login');
let img_elem = $('#img_login');

const view = {

    goToRegister() {
        form_elem.addClass('animated-fast ' + 'slideOutLeft').one(animationEnd, function() {
            form_elem.removeClass('animated-fast ' + 'slideOutLeft');

        });
        img_elem.addClass('animated-fast ' + 'slideOutRight').one(animationEnd, function() {
            img_elem.removeClass('animated-fast ' + 'slideOutRight');

            $('#section_register').removeClass('hide');
            $('#section_login').hide();
        });
    },

    goToLogin() {
        
        $('#form_register').addClass('animated-fast ' + 'slideOutLeft').one(animationEnd, function() {

            $('#form_register').removeClass('animated-fast ' + 'slideOutLeft');
        });
        $('#img_register').addClass('animated-fast ' + 'slideOutRight').one(animationEnd, function() {
            
            $('#img_register').removeClass('animated-fast ' + 'slideOutRight');
            $('#section_register').addClass('hide');
            $('#section_login').show();
        });
    },
}



$('#formLogin').submit(function (e) {
    e.preventDefault();
    //code goes here
    let id = $('#login_id').val();
    let pass = $('#login_password').val()
    
    if(id === 'vippass' && pass === 'vippass') {

        let res = document.URL.replace("login", "index");
                  window.open(res,"_self");

    }else if(id === 'firsttime' && pass === 'firsttime') {

        let res = document.URL.replace("login", "firstState");
                  window.open(res,"_self");

    }else {

        form_elem.addClass('animated-fast ' + 'shake').one(animationEnd, function() {
            form_elem.removeClass('animated-fast ' + 'shake');
        });
        $('#alert').show();
    }
});