

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