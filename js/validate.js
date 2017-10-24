const validation_alert = {
    duplicate : {
        duplicate_text : ' unavailable, Please use another' ,
        duplicate_text_class : 'text-red',
        duplicate_icon : 'glyphicon glyphicon-remove form-control-feedback',
        duplicate_form_class : 'has-error'
    },
    Unduplicate : {
        Unduplicate_text : ' available' ,
        Unduplicate_text_class : 'text-green',
        Unduplicate_icon : 'glyphicon glyphicon-ok form-control-feedback',
        Unduplicate_form_class : 'has-success'
    },
    Invalid : {
        Invalid_minimumchar : ' must contain at least 3 character',
        Invalid_minimum6char : ' must contain at least 6 characters',
        Invalid_notmatch : 'Your password and confirmation password do not match',
        Invalid_specialchar : ' does not contain special character',
        Invalid_email : 'Invalid ',
        Invalid_null : ' cannot be empty',
        Invalid_text_class : 'text-red',
        Invalid_icon : 'glyphicon glyphicon-remove form-control-feedback',
        Invalid_form_class : 'has-error'
    }
};

const isSpecialChar = (str) => {
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

const isNull = (str) => {

    if(str.length === 0) {
        return true;
    } else {
        return false;
    }
}
const isMoreThan = (number , sting) => {

    if(sting.length >= number) {
        return true;
    } else {
        return false;
    }
}

const isValidEmail = (mail) => {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {  
        return (true)  
    }else{
        return (false)  
    }
}  

const hasLowercase = (string) => {
    if (/[a-z]/.test(string))
    {  
        return (true)  
    }else{
        return (false)  
    }
}
const hasUppercase = (string) => {
    if (/[A-Z]/.test(string))
    {  
        return (true)  
    }else{
        return (false)  
    }
}

const hasNumber = (string) => {
    if (/[0-9]/.test(string))
    {  
        return (true)  
    }else{
        return (false)  
    }
}