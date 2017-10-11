var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
const validation_alert = {
    duplicate : {
        duplicate_text : 'Business name unavailable, Please use another' ,
        duplicate_text_class : 'pull-left text-red',
        duplicate_icon : 'glyphicon glyphicon-remove form-control-feedback',
        duplicate_form_class : 'has-error'
    },
    Unduplicate : {
        Unduplicate_text : 'Business name available' ,
        Unduplicate_text_class : 'pull-left text-green',
        Unduplicate_icon : 'glyphicon glyphicon-ok form-control-feedback',
        Unduplicate_form_class : 'has-success'
    },
    Invalid : {
        Invalid_minimumchar : 'Buiness name must contain at least three character',
        Invalid_specialchar : 'Buiness name does not contain special character',
        Invalid_text_class : 'pull-left text-red',
        Invalid_icon : 'glyphicon glyphicon-remove form-control-feedback',
        Invalid_form_class : 'has-error'
    }
}; 
const business_inDB = ['krungsri', 'jackfruit', 'bright', 'pineapple', 'apple', 'Big', 'camelCASE', 'BIGHEAD'];

const dup_form = document.getElementById('dup_form');
const dup_icon_status = document.getElementById('dup_icon_status');
const dup_text_status = document.getElementById('dup_text_status');
const createBusiness_name = document.getElementById('createBusiness_name');

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
    },

    searchBusResult : {
        found() {
            $('#showResult').removeClass('hide');
            $('#noResult').addClass('hide');
        },
        notFound() {
            $('#noResult').removeClass('hide');
            $('#showResult').addClass('hide');
        },
        display( bus_name ) {
            document.getElementById('search_bus_result_name').innerHTML = bus_name;
        }
    },

    validaterCreateBus : {
        invalid : {
            invalid_minimun() {

                let in_mini = validation_alert.Invalid;
                view.validaterCreateBus.setValidateStatus(
                    in_mini.Invalid_minimumchar,
                    in_mini.Invalid_text_class,
                    in_mini.Invalid_icon
                );

                view.validaterCreateBus.disbleHandle(
                    in_mini.Invalid_form_class, 
                    'has-success'
                );
            },
            invalid_special() {

                let in_spe = validation_alert.Invalid;
                view.validaterCreateBus.setValidateStatus(
                    in_spe.Invalid_specialchar,
                    in_spe.Invalid_text_class,
                    in_spe.Invalid_icon
                );
                view.validaterCreateBus.disbleHandle(
                    in_spe.Invalid_form_class,
                    'has-success'
                );
            },
        },
        is_duplicate : {
            duplicate() {

                let dup = validation_alert.duplicate;
                view.validaterCreateBus.setValidateStatus(
                    dup.duplicate_text,
                    dup.duplicate_text_class,
                    dup.duplicate_icon
                );
                view.validaterCreateBus.disbleHandle(
                    dup.duplicate_form_class, 
                    'has-success'
                );
            },
            Unduplicate() {

                let undup = validation_alert.Unduplicate;
                view.validaterCreateBus.setValidateStatus(
                    undup.Unduplicate_text, 
                    undup.Unduplicate_text_class, 
                    undup.Unduplicate_icon
                );
                view.validaterCreateBus.disbleHandle(
                    undup.Unduplicate_form_class, 
                    'has-error'
                );
            }
        },
        disbleHandle(addAttr, removeAttr) {
            $('#dup_form').addClass(addAttr);
            $('#dup_form').removeClass(removeAttr);

            if(addAttr === 'has-success'){
                $('#createBusiness_btn').removeAttr('disabled');
            }else {
                $('#createBusiness_btn').attr('disabled', 'disabled');
            }
        },
        setValidateStatus(text, text_class, icon_class) {

            dup_text_status.innerHTML = text;
            dup_text_status.className = text_class;
            dup_icon_status.className = icon_class;
        }
    }
}

const ctrl = {

    searchBus() {

        const business_list = business_inDB.map((x) => x.toLowerCase());
        const value = document.getElementById('bus_input').value.toLowerCase();
        const found = business_list.indexOf(value);
        //set undefined bus name value to ''
        const business_name = business_inDB[found] ? business_inDB[found] : '';
        
        if( found !== -1 ) {
            view.searchBusResult.found();
        }else{
            view.searchBusResult.notFound();
        }
        view.searchBusResult.display(business_name);
    },
            
    isValidCreateBus() {

        const business_list = business_inDB.map((x) => x.toLowerCase());
        const value = createBusiness_name.value.toLowerCase();
        const has_duplicate = business_list.indexOf(value);
        //set defalt length value to 0
        const length_busname = value.length ? value.length : 0;
        
        if(length_busname === 0 || length_busname < 3) {
            // case minimum char input
            view.validaterCreateBus.invalid.invalid_minimun();

        }else if(!ctrl.isSpecialChar(value)) {
            // case special char input
            view.validaterCreateBus.invalid.invalid_special();

        } else {
            if( has_duplicate !== -1 ) {
                // dupicate  
                view.validaterCreateBus.is_duplicate.duplicate();
               
            } else {
                // Undupicate  
                view.validaterCreateBus.is_duplicate.Unduplicate();

            }
        }
    },

    isSpecialChar(str) {
        return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
    },

    // add data to localstorage
    getCreateBusData(e) { 
        
        e.preventDefault();

        let business_name = document.getElementById('createBusiness_name').value;
        let business_logo = document.getElementById('createBusiness_logo');
        sessionStorage.bus = business_name;
        view.goToIndex();
    }
}

$("input[name=logo-file]").change(function () {
    if (this.files && this.files[0]) {
        
        var reader = new FileReader();

            reader.onload = function (e) {
                
                var img = $('<img>').attr('src', e.target.result);
                    img.addClass('img-circle');
                $('.upload-frame').html(img);

                sessionStorage.img = reader.result;
            };
        reader.readAsDataURL(this.files[0]);
    }
});
