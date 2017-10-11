let business = document.getElementById('businessDisplay');
      business.innerHTML = sessionStorage.bus;
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