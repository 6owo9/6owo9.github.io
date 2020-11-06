(function($) {
    $(document).ready(function() {
        console.log("준비");
        history.scrollRestoration = "manual" //새로고침 시 스크롤 복원 안함
        
        setTimeout(function() {
            $('#main_tile').animate({"letter-spacing":"10px","opacity":"1"},1500);
            },100);setTimeout(function() {
            $('#main_sub').animate({"padding-top":"0px","opacity":"1"},700);
            },1500);
    });
})(jQuery);


