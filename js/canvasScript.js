var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

const view = {

    goToIndex() {

        let res = document.URL.replace("designCanvas", "index");
                window.open(res, '_self');
    },
    slideIn(menuOut, menuIn) {
        $('#' + menuOut).addClass('animated-fast ' + 'slideOutRight')
            .one(animationEnd, function() {
                $('#' + menuOut).removeClass();
                $('#' + menuOut).addClass('hide');
                $('#' + menuIn).removeClass('hide');
        });

        $('#' + menuIn).addClass('animated-fast ' + 'slideInLeft')
            .one(animationEnd, function() {
                $('#' + menuIn).removeClass('animated-fast ' + 'slideInLeft ' + 'hide');
        });
    },

    slideOut(menuOut, menuIn) {
        $('#' + menuOut).addClass('animated-fast ' + 'slideOutLeft')
            .one(animationEnd, function() {
                $('#' + menuOut).removeClass();
                $('#' + menuOut).addClass('hide');
                $('#' + menuIn).removeClass('hide');
        });

        $('#' + menuIn).addClass('animated-fast ' + 'slideInRight')
            .one(animationEnd, function() {
                $('#' + menuIn).removeClass('animated-fast ' + 'slideInRight ' + 'hide');
        });
    },

    addQuestion() {
        
        let get_length = document.querySelectorAll('.question-builder').length;
        let div_elem = document.createElement('DIV');
            div_elem.innerHTML = `
                                <h6 class="text-bold color__eee">Question ${get_length + 1}</h6>
                                <div class="question-builder">
                                    <div class="middle margin-top-2">
                                        <div class="question-builder__elem" style="width:80%;">
                                        <a class="edit text-bold">
                                            edit
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </a>
                                            Header
                                        </div>
                                    </div>
                                    <div class="middle question-builder__elem">
                                        <div class="question-builder__elem">
                                            Button 1
                                        </div>
                                        <div class="question-builder__elem">
                                            Button 2
                                        </div>
                                        <div class="question-builder__elem">
                                            Button 3
                                        </div>
                                        <div class="question-builder__elem">
                                            Button 4
                                        </div>
                                        <div class="question-builder__elem">
                                            Button 5
                                        </div>
                                        <div class="question-builder__elem">
                                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                            Add Button 
                                        </div>
                                    </div>
                                </div>`;
        let question = document.getElementById('containerBuild');
            question.appendChild(div_elem);

        // Scroll to Buttom
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    },

    addBtn() {
        
        let addbtn = document.getElementById('addBtn');
        let div_elem = document.createElement('DIV');
            div_elem.className = 'question-builder__elem';
            div_elem.innerHTML = `
                    <a class="edit text-bold">
                        edit
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </a>
                    Text Button 5
                    <p class="text-center text-headline">value</p>`;

            $(div_elem).insertBefore(addbtn);
    }
}


const logout = () => {
    
    let res = document.URL.replace("designCanvas", "login");
              window.open(res, '_self');
};

