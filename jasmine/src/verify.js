let user_email = JSON.parse(sessionStorage.email) ? JSON.parse(sessionStorage.email) : '-';
document.getElementById('user_email').innerHTML = user_email;

let username = JSON.parse(sessionStorage.username) ? JSON.parse(sessionStorage.username) : '-';

const submit = {

    verify() {
        let innerBtnText = document.getElementById('verify_btn_text');
        let status = document.getElementById('verify_status');

        let loading = `<i class="fa fa-circle-o-notch fa-spin"></i>
                        <span class="sr-only">Loading...</span>`
        innerBtnText.innerHTML = loading;

        // set param 
        let arrText = '';
        $('#formVerify input').each(function () {
            arrText += ($(this).val());
        })

        API.verify({
            "verify_code": arrText,
            "username": username
        }).done(function (response) {
            innerBtnText.innerHTML = 'Verify';
            if (response.success) {

                redirect("verify", "index");
            } else {
                status.innerHTML = response.message.message;
            }
        });
    },
    resend() {

        let status = document.getElementById('resend_status');
        let loading = `<i class="fa fa-circle-o-notch fa-spin"></i>
                        <span class="sr-only">Loading...</span>`
        let success = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
            
            status.innerHTML = loading;
        console.log(username);
        API.resend({
            "username": username
        }).done(function (response) {
            status.innerHTML = '';
            if (response.success) {
                status.innerHTML = success;
            } else {
                status.innerHTML = `<p class="pull-left text-red">${response.message.message}</p>`;
            }
        });
    }
}


const redirect = (from, where) => {

    const res = document.URL.replace(from, where);
    window.open(res, "_self");
};

$('#formVerify').submit(function (e) {
    e.preventDefault();
    submit.verify();
});

function Add (a,b) {
    return a+b;
}
function multiply  (a,b) {
    return a * b;
}