
const URL = 'https://w5haykphii.execute-api.ap-southeast-1.amazonaws.com/dev/';

const login = () => {
    $.ajax({
        url : URL + 'master/register',
        type : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        dataType : 'json',
        data : JSON.stringify({
            "email": "abc@defg.com",
            "password": "as",
            "username": "Michel",
            "firstname": "Veron"
        })
    }).done(function(response) {
        console.log(response);
    });
};

const register = () => {

    
};
