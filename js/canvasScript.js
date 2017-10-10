
const view = {

    goToIndex() {

        let res = document.URL.replace("designCanvas", "index");
                window.open(res, '_self');
    }
}


const logout = () => {
    
    let res = document.URL.replace("designCanvas", "login");
              window.open(res, '_self');
};