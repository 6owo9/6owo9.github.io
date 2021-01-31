(function($) {
    $(document).ready(function() {
       //console.log('준비');
        $(window).on('mousewheel',function(e){
            var wheel = e.originalEvent.wheelDelta; //스크롤 값
            
            if(wheel>0){
            //스크롤 올릴때
            $("#header").css('top','0');}
            else {
            //스크롤 내릴때
            $("#header").css('top','-70px');}
            });
        

            var burger = $('.menu-trigger');
            burger.each(function(index){
                var $this = $(this);
                
                $this.on('click', function(e){

                    e.preventDefault();
                    $this.toggleClass('active-' + (index+1));
                    
                    $('#Mheader').toggleClass('toggleMenuon toggleMenuoff');
                    
                    var menuON = $('.toggleMenuon').length
                    if(menuON == 0){
                        $('html, body').css({'overflow':'hidden'});

                    }else{
                        $('html, body').css({'overflow':''});
                    }
                    
                })
            });

            $('a').click(function () {
                $('html, body').animate({
                  scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
              });
              

            $(window).on('scroll', function(){
                if($('#overview').offset().top > 0 ){
                    var stdPos = $(window).scrollTop() + $(window).height() - ($(window).height() / 3);
                    if( stdPos >  $('#overview').offset().top ){
                        $("#overview_cover img").animate({'opacity':'1'},800);
                        //console.log('1');
                    }
                   


                    if( stdPos >  $('#background').offset().top ){
                        $("#gragh_stick_12").animate({'width':'22%'},800);
                        $("#gragh_stick_12Bar").animate({'width':'17%'},800);
                    }
                    if( stdPos >  $('#back_source').offset().top ){
                        $("#gragh_stick_15").animate({'width':'27%'},800);
                        $("#gragh_stick_15Bar").animate({'width':'21%'},800);
                    }
                    if( stdPos >  $('#gragh_stick_12').offset().top ){
                        $("#gragh_stick_17").animate({'width':'36%'},800);       
                        $("#gragh_stick_17Bar").animate({'width':'28%'},800);
                    }



                    if( stdPos >  $('#back_bot_text_cover').offset().top ){
                        $("#back_bot_text_cover img").animate({'opacity':'1'},800);}


                        var width_size = $(window).width();

                    if( stdPos >  $('#target_box').offset().top-100 && width_size > 1024){
                        $("#circle01").animate({'opacity':'1'},300);       
                        $("#circle02").animate({'opacity':'1'},500);       
                        $("#circle03").animate({'opacity':'1'},800);       
                        $("#circle_big").animate({'opacity':'1'},900);       

                        $("#arrow").animate({'width':'130%'},800);       
                        $("#arrow_be").animate({'left':'107%'},800);       
                        $("#arrow_af").animate({'left':'107%'},800);
                          
                    }
                    if (stdPos >  $('#target_box').offset().top-100 && width_size >= 767 && width_size < 1025) { 
                        $("#circle01").animate({'opacity':'1'},300);       
                        $("#circle02").animate({'opacity':'1'},500);       
                        $("#circle03").animate({'opacity':'1'},800);       
                        $("#circle_big").animate({'opacity':'1'},900);

                        $("#arrow").animate({'width':'95%'},800);       
                        $("#arrow_be").animate({'left':'98%'},800);       
                        $("#arrow_af").animate({'left':'98%'},800);}


                    if( stdPos >  $('#illust').offset().top+300){
                        $("#il_01").animate({'opacity':'1','top':'30%'},800);}
                    if( stdPos >  $('#il_01').offset().top+200){
                        $("#il_02").animate({'opacity':'1','top':'57%'},800);}
                    if( stdPos >  $('#il_02').offset().top){
                        $("#il_03").animate({'opacity':'1','top':'40%'},800);}
                    if( stdPos >  $('#il_03').offset().top+200){
                        $("#il_04").animate({'opacity':'1','top':'66%'},800);}



                    if( stdPos >  $('#guide_phone_view00').offset().top && width_size > 1024){
                    $("#guide_phone_view01").animate({'left':'340px'},800);
                    $("#guide_phone_view02").animate({'left':'620px'},800);
                    $("#guide_phone_view03").animate({'left':'900px'},800);}
                        if (stdPos >  $('#guide_phone_view00').offset().top && width_size >= 767 && width_size < 1025) { 
                            $("#guide_phone_view01").animate({'left':'200px'},800);
                        $("#guide_phone_view02").animate({'left':'370px'},800);
                        $("#guide_phone_view03").animate({'left':'520px'},800);}

                    
                    if( stdPos >  $('#letter_title').offset().top){
                    $("#letter_img").animate({'margin-top':'0','opacity':'1'},800);}



                    if( stdPos >  $('#memoryBoxT').offset().top){
                        $("#memoryBox_img").animate({'margin-top':'0','opacity':'1'},800);}
                    
                }}
            );
            

        /*ser_tab_button*/
        $('#petkit_but').click(function(){
            // ↓버튼
            $('#diary').fadeOut("800");
            $('#memory').fadeOut("800");

            $('#petkit').fadeIn("800");

            $('#petkit_but').css('opacity','1');
            $('#diary_but').css('opacity','0.5');
            $('#memory_but').css('opacity','0.5');
        });

        $('#diary_but').click(function(){
            $('#petkit').fadeOut("800");
            $('#memory').fadeOut("800");

            $('#diary').fadeIn("800");
            
            $('#petkit_but').css('opacity','0.5');
            $('#diary_but').css('opacity','1');
            $('#memory_but').css('opacity','0.5');
        });

        $('#memory_but').click(function(){
            $('#petkit').fadeOut("800");
            $('#diary').fadeOut("800");

            $('#memory').fadeIn("800");

            $('#petkit_but').css('opacity','0.5');
            $('#diary_but').css('opacity','0.5');
            $('#memory_but').css('opacity','1');
        });
        
    
    

    });
})(jQuery);

            
      

