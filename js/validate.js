const validation_alert = {
    duplicate : {
        duplicate_text : ' unavailable, Please use another' ,
        duplicate_text_class : 'pull-left text-red',
        duplicate_icon : 'glyphicon glyphicon-remove form-control-feedback',
        duplicate_form_class : 'has-error'
    },
    Unduplicate : {
        Unduplicate_text : ' available' ,
        Unduplicate_text_class : 'pull-left text-green',
        Unduplicate_icon : 'glyphicon glyphicon-ok form-control-feedback',
        Unduplicate_form_class : 'has-success'
    },
    Invalid : {
        Invalid_minimumchar : ' must contain at least three character',
        Invalid_specialchar : ' does not contain special character',
        Invalid_text_class : 'pull-left text-red',
        Invalid_icon : 'glyphicon glyphicon-remove form-control-feedback',
        Invalid_form_class : 'has-error'
    }
};

const isSpecialChar = (str) => {
        return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

const isNull = (str) => {

    if(str.length === 0) {
        return true;
    } else {
        return false;
    }
}