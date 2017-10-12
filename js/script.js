var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
let business = document.getElementById('businessDisplay');
    business.innerHTML = sessionStorage.bus;

let user = document.getElementById('usernameDisplay');
    user.innerHTML = sessionStorage.email;

let business_img = document.getElementById('bus_thumbnail');
if (sessionStorage.img) {
    business_img.src = sessionStorage.img;
}

const view = {

    changeModalState() {
        $('#myModal').modal('hide');
        $('#myModal2').modal('show');
    },

    goToCanvas() {

        let res = document.URL.replace("index", "designCanvas");
              window.open(res, '_self');
    }
}

const logout = () => {
    
    let res = document.URL.replace("index", "login");
              window.open(res, '_self');
};

const loadAnimate = () => {

    $('#container').addClass('animated ' + 'bounceInLeft').one(animationEnd, function() {
        $('#container').removeClass('animated ' + 'bounceInLeft');
    });
    console.log('bite');
}
window.onload = loadAnimate();