var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

const view = {
    
    changeState(slideOut, slideIn) {

        $('#' + slideOut).addClass('animated-fast ' + 'slideOutLeft').one(animationEnd, function() {
            $('#' + slideOut).removeClass();
            $('#' + slideOut).addClass('hide');
             
            $('#' + slideIn).removeClass('hide');
        });


        $('#' + slideIn).addClass('animated-fast ' + 'slideInLeft').one(animationEnd, function() {
            $('#' + slideIn).removeClass('animated-fast ' + 'slideInLeft ' + 'hide');
        });

    },

    goToIndex() {
        let res = document.URL.replace("firstState", "index");
                  window.open(res,"_self");
    }
}

const business_inDB = ['krungsri', 'jackfruit', 'bright', 'pineapple', 'apple'];

const ctrl = {
    checkBus() {
        
        let value = document.getElementById('bus_input').value.toLowerCase();
        let found = business_inDB.indexOf(value);
        if( found !== -1 ) {
            $('#showResult').removeClass('hide');
            $('#noResult').addClass('hide');
        }else{
            $('#noResult').removeClass('hide');
            $('#showResult').addClass('hide');
        }
    }
}

$("input[name=logo-file]").change(function () {
    if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var img = $('<img>').attr('src', e.target.result);
                img.addClass('img-circle');
            $('.upload-frame').html(img);
        };

        reader.readAsDataURL(this.files[0]);
    }
});
