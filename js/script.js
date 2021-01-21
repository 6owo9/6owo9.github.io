(function($) {
    $(document).ready(function() {
    console.log('준비');
        
    $('.PFlist:odd').css('float','right'); //PFlist 짝수 
    $('.PFlist:even').css('float','left'); //PFlist 홀수 
        
        
       
   
    
    });
})(jQuery);


      

            
            

            
 //var max = 1000; //100% 투명할때의 스크롤 값
       
            // $(window).scroll(function(){
            //     var scrollPX = $(this).scrollTop();
                
            //     if( scrollPX+1000  < max ) {
            //         $("#page01 img").css({"opacity": (max-scrollPX)/max });
        
            //     }else{
            //         $("#page01 img").css({"opacity": 0});
            //     }	
        
            // });