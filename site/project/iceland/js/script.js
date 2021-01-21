(function($) {
    $(document).ready(function() {
        console.log("준비");
        history.scrollRestoration = "manual" //새로고침 시 스크롤 복원 안함  
        
        // $('#ready').delay(1500).fadeOut(500);/
        $('#ready').stop().delay(1300).animate({'marginTop':'-100vh'},500);
        $('#ready p').stop().delay(1000).fadeOut(500);
        $('#readyBox').stop().delay(500).animate({'right':'30%'},500);
    }); 

    $(window).on('load',function(){
        setTimeout(function() {
            $('#main_tile').delay(1500).animate({"letter-spacing":"10px","opacity":"1"},1500);
            },100);setTimeout(function() {
            $('#main_sub').delay(1500).animate({"padding-top":"0px","opacity":"1"},700);
            },1500);
    });

    
})(jQuery);




