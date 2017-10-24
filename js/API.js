
const URL = 'https://w5haykphii.execute-api.ap-southeast-1.amazonaws.com/dev/';

const API = {
    register(param) {
        return $.ajax({
            url : URL + 'master/register',
            type : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            dataType : 'json',
            data : JSON.stringify(param)
        })
    },

    login() {

    },

    verify(param) {
        return $.ajax({
            url : URL + 'master/verify',
            type : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            dataType : 'json',
            data : JSON.stringify(param)
        })
    },

    resend(param) {

        return $.ajax({
            url : URL + 'master/resend-verify',
            type : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            dataType : 'json',
            data : JSON.stringify(param)
        })
    }
}
