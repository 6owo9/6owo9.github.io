(function($) {
    $(document).ready(function() {
       
        history.scrollRestoration = "manual" 
        $('#contentBox>ul').children().not('#box01').fadeOut(0);

        $(window).on("scroll", function() {
            wheel = window.scrollY;
            //console.log(wheel);
            $('#back').fadeOut(500);
            $('.jejuline').fadeOut(400);
            $('#scrollani').fadeOut(400);
            $('#contentBox').animate({'zIndex':'1'},500);

            if(wheel>=0 && wheel<300 || wheel<=299){
            $('#box01').fadeIn(300);
            $('#contentBox>ul').children().not('#box01').fadeOut(300);}
            
            else if(wheel==300 || wheel>=300 && wheel<800 || wheel<=799){
            $('#box02').fadeIn(300);
            $('#contentBox>ul').children().not('#box02').fadeOut(300); }
            
            else if(wheel==800 || wheel>=800 && wheel<1000 || wheel<=999){
            $('#box03').fadeIn(300);
            $('#contentBox>ul').children().not('#box03').fadeOut(300);

            }else if(wheel==1000 || wheel>=900 && wheel<1300 || wheel<=1299){
            $('#box04').fadeIn(300);
            $('#contentBox>ul').children().not('#box04').fadeOut(300);}
            
            else if(wheel==1300 || wheel>=1300 && wheel<1600 || wheel<=1599){
            $('#box05').fadeIn(300);
            $('#contentBox>ul').children().not('#box05').fadeOut(300);}
            
            else if(wheel==1600 || wheel>=1600 && wheel<1800 || wheel<=1799){
            $('#box06').fadeIn(300);
            $('#contentBox>ul').children().not('#box06').fadeOut(300);}
            
            else if(wheel>=1800){
            $('#box07').fadeIn(300);
            $('#contentBox>ul').children().not('#box07').fadeOut(300);}
        });
    });
})(jQuery);












