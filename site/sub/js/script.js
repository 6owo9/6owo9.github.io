(function($) {
    $(document).ready(function() {
    console.log('서브');
        
        $('#webBTN').on({
            mouseenter: function () {
                $(this).stop().animate({ 'border-width': "4px" }, 200);
            },mouseleave:function () {
                $(this).stop().animate({ 'border-width': "2px" }, 100);
            } 
        });

        $('#pdfBTN').on({
            mouseenter: function () {
                $(this).stop().animate({ 'border-width': "4px" }, 200);
            },mouseleave:function () {
                $(this).stop().animate({ 'border-width': "2px" }, 100);
            }
        });

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