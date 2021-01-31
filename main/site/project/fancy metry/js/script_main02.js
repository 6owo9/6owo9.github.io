(function($){
     // 로딩화면
     $(document).ready(function(){

          console.log('ready');

              
          var $overview = $('#overview');
          var $overview2 = $('#overview2');

          var $view = $('div.view');
          var $contents = $('div#contents')
          var check = true;
          $overview.on('click',function(){
               console.log('click')
               if(check == true){
                    check=false;
                    $view.css({'display':'block'}).animate({'opacity':'1'},500);
                    //$overview.animate({'opacity':'0'},500);
                    //$overview2.animate({'opacity':'1'},500);
               }
               else if(check == false){
                    check=true;
                    $view.animate({'opacity':'0',},500);
                    setTimeout(function() {
                     $view.css({'display':'none'})
                    },500);
               }
          })

          var $cursorBg = $("#cursor-bg");
          var $progress = $('#progress');
          //progress 움직이기
          window.addEventListener("mousemove", onMouseMoveWindow);
          function onMouseMoveWindow(e){
               // console.log('move');
               var posX = e.clientX, posY=e.clientY;
               TweenMax.to($cursorBg, 1,{css : {top:posY,left:posX}});
               TweenMax.to($progress, 0.2,{css : {top:posY,left:posX}});
          }

          // 마우스 팔로우
          var $name = $('#names').find('li');
          // console.log($name);
          var isDrag = false;

          $name.eq(0).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('argb')){
                    $progress.addClass('argb')
               }
               if(!$cursorBg.hasClass('square')){
                    $cursorBg.addClass('square')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('argb')){
                    $progress.removeClass('argb')
               }
               if($cursorBg.hasClass('square')){
                    $cursorBg.removeClass('square')
               }
          })
          $name.eq(1).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('ss')){
                    $progress.addClass('ss')
               }
               if(!$cursorBg.hasClass('square')){
                    $cursorBg.addClass('square')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('ss')){
                    $progress.removeClass('ss')
               }
               if($cursorBg.hasClass('square')){
                    $cursorBg.removeClass('square')
               }
          })
          $name.eq(2).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('ak17')){
                    $progress.addClass('ak17')
               }
               if(!$cursorBg.hasClass('triangle')){
                    $cursorBg.addClass('triangle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('ak17')){
                    $progress.removeClass('ak17')
               }
               if($cursorBg.hasClass('triangle')){
                    $cursorBg.removeClass('triangle')
               }
          })
          $name.eq(3).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('cozy')){
                    $progress.addClass('cozy')
               }
               if(!$cursorBg.hasClass('triangle')){
                    $cursorBg.addClass('triangle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('cozy')){
                    $progress.removeClass('cozy')
               }
               if($cursorBg.hasClass('triangle')){
                    $cursorBg.removeClass('triangle')
               }
          })
          $name.eq(4).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('pcg')){
                    $progress.addClass('pcg')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('pcg')){
                    $progress.removeClass('pcg')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(5).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('ddago')){
                    $progress.addClass('ddago')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('ddago')){
                    $progress.removeClass('ddago')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(6).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('remember')){
                    $progress.addClass('remember')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('remember')){
                    $progress.removeClass('remember')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(7).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('cookinz')){
                    $progress.addClass('cookinz')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('cookinz')){
                    $progress.removeClass('cookinz')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(8).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('presen')){
                    $progress.addClass('presen')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('presen')){
                    $progress.removeClass('presen')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(9).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('jgdc')){
                    $progress.addClass('jgdc')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('jgdc')){
                    $progress.removeClass('jgdc')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(10).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('sgb')){
                    $progress.addClass('sgb')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('sgb')){
                    $progress.removeClass('sgb')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(11).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('ddd')){
                    $progress.addClass('ddd')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('ddd')){
                    $progress.removeClass('ddd')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(12).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('mmd')){
                    $progress.addClass('mmd')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('mmd')){
                    $progress.removeClass('mmd')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(13).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('muse')){
                    $progress.addClass('muse')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('muse')){
                    $progress.removeClass('muse')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(14).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('wevent')){
                    $progress.addClass('wevent')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('wevent')){
                    $progress.removeClass('wevent')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(15).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('yak')){
                    $progress.addClass('yak')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('yak')){
                    $progress.removeClass('yak')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(16).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('konnect')){
                    $progress.addClass('konnect')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('konnect')){
                    $progress.removeClass('konnect')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(17).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('bul')){
                    $progress.addClass('bul')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('bul')){
                    $progress.removeClass('bul')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(18).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('nn')){
                    $progress.addClass('nn')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('nn')){
                    $progress.removeClass('nn')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(19).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('zipdan')){
                    $progress.addClass('zipdan')
               }
               if(!$cursorBg.hasClass('circle')){
                    $cursorBg.addClass('circle')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('zipdan')){
                    $progress.removeClass('zipdan')
               }
               if($cursorBg.hasClass('circle')){
                    $cursorBg.removeClass('circle')
               }
          })
          $name.eq(20).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('sodam')){
                    $progress.addClass('sodam')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('sodam')){
                    $progress.removeClass('sodam')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })
          $name.eq(21).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('bol1')){
                    $progress.addClass('bol1')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('bol1')){
                    $progress.removeClass('bol1')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })
          $name.eq(22).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('donhe')){
                    $progress.addClass('donhe')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('donhe')){
                    $progress.removeClass('donhe')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })
          $name.eq(23).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('johab')){
                    $progress.addClass('johab')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('johab')){
                    $progress.removeClass('johab')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })
          $name.eq(24).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('monyam')){
                    $progress.addClass('monyam')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('monyam')){
                    $progress.removeClass('monyam')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })
          $name.eq(25).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('kahlua')){
                    $progress.addClass('kahlua')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('kahlua')){
                    $progress.removeClass('kahlua')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })
          $name.eq(26).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('lookback')){
                    $progress.addClass('lookback')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('lookback')){
                    $progress.removeClass('lookback')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })
          $name.eq(27).on('mouseenter',function(){
               console.log("enter");
               if(!$progress.hasClass('imade')){
                    $progress.addClass('imade')
               }
               if(!$cursorBg.hasClass('pentagon')){
                    $cursorBg.addClass('pentagon')
               }
          }).on('mouseleave',function(){
               console.log("leave");
               if($progress.hasClass('imade')){
                    $progress.removeClass('imade')
               }
               if($cursorBg.hasClass('pentagon')){
                    $cursorBg.removeClass('pentagon')
               }
          })







          // Name Random

          var leng = $('ul#names>li').length;

          $('ul#names').each(function(){
               var ulnames = $('ul#names');
               var liArr = ulnames.children('li');

               liArr.sort(function(){
                    var temp = parseInt(Math.random()*leng); // parseInt : 문자를 숫자로 바꿔줌
                    var temp1 = parseInt(Math.random()*leng); // ie 에서 동작하기 위해 필요, 크롬 파폭에서는
                    return temp1-temp;
               }).appendTo(ulnames);
          });
         
/*
       
               setTimeout(function() {
               $('.headertxt01').each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(0).css({'display':'inline-block'}).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},0);});
                    
                    
               liArr.eq(0).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(1).css({'display':'inline-block'}).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},100);});

               liArr.eq(1).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(2).css({'display':'inline-block'}).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},200);});

               liArr.eq(2).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(3).css({'display':'inline-block'}).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},300);});

               liArr.eq(3).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(4).css({'display':'inline-block'}).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},400);});

               liArr.eq(4).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(5).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},500);});

               liArr.eq(5).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(6).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},600);});

               liArr.eq(6).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(7).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},700);});

               liArr.eq(7).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(8).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},800);});

               liArr.eq(8).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(9).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},900);});

               liArr.eq(9).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(10).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1000);});

               liArr.eq(10).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(11).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1100);});

               liArr.eq(11).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(12).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1200);});
               
               liArr.eq(12).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(13).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1300);});

               liArr.eq(2).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(14).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1400);});

               liArr.eq(3).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(15).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1500);});

               liArr.eq(4).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(16).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1600);});

               liArr.eq(5).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(17).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1700);});

               liArr.eq(6).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(18).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1800);});

               liArr.eq(7).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(19).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},1900);});

               liArr.eq(8).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(20).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2000);});

               liArr.eq(9).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(21).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2100);});

               liArr.eq(10).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(22).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2200);});

               liArr.eq(11).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(23).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2300);});

               liArr.eq(12).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(24).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2400);});

               liArr.eq(13).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(25).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2500);});

               liArr.eq(14).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(26).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2600);});

               liArr.eq(15).each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    setTimeout(function(){if( bottom_of_window > bottom_of_element ){liArr.eq(27).css({'display':'inline-block'}).animate({'opacity':'1'},500);}},2700);});
               },4600);
          });
     });
          //--------------------------------------------------------------------------------
 
          
*/
});


     // 로딩 후 메인
     $(window).on('load',function(){


          // 로딩 연결
/*
          console.log('load');

          var $loader = $('div#loader');
          var $intro = $('div#intro');

          $loader.css("display","none");
          $intro.css("display","block");
          */

     });
})(jQuery);