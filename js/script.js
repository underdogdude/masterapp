
const view = {

    changeModalState() {
       
        $('#myModal').modal('hide');
        $('#myModal2').modal('show');
    },

}



const logout = () => {
    
    let res = document.URL.replace("index", "login");
              window.open(res, '_blank');
};