(function($) {
    $(document).ready(function() {
        var $target = $('.OpOut');
        var $video = $('#video');
        var $type = $('#type');
        $target.on('mouseout', function(e) {
            // 해당 노드 영역에서 마우스 커서가 벗어날 때.
            //console.log('out');
            $target.addClass('iconOpOut');
        });
        $video.on('mouseout', function(e) {
            $video.addClass('iconOpOut');
        });
        $type.on('mouseout', function(e) {
            $type.addClass('iconOpOut');
        });

        $('.hide_main').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'5%'},1200);
            }
            
        });

        
        var $scroll = document.scrollingElement;
        var $mainLi = document.querySelector('#mainLi');console.log($mainLi);
        var $overLi = document.querySelector('#overLi');console.log($overLi);
        var $backLi = document.querySelector('#backLi');console.log($backLi);
        var $targetLi = document.querySelector('#targetLi');console.log($targetLi);
        var $logoLi = document.querySelector('#logoLi');console.log($logoLi);
        var $serLi = document.querySelector('#serLi');console.log($serLi);
        var $teamLi = document.querySelector('#teamLi');console.log($teamLi);



            
        $mainLi.addEventListener("click", onClickBtnTop);
        function onClickBtnTop(e){
            e.preventDefault();
            console.log("click btn top");
            anime({
                targets : $scroll,
                scrollTop : 0,
                duration : 500,
                easing:"easeInOutQuad"
            });
        }

        $overLi.addEventListener("click", onClickBtnover);
        function onClickBtnover(e){
            e.preventDefault();
            anime({targets : $scroll, scrollTop : 1000, duration : 500, easing:"easeInOutQuad"});}

        $backLi.addEventListener("click", onClickBtnback);
        function onClickBtnback(e){
            e.preventDefault();
            anime({targets : $scroll,scrollTop : 1779, duration : 500, easing:"easeInOutQuad"});}

        $targetLi.addEventListener("click", onClickBtndtarget);
        function onClickBtndtarget(e){
            e.preventDefault();
            anime({targets : $scroll,scrollTop : 4519,duration : 500,easing:"easeInOutQuad"});}

        $logoLi.addEventListener("click", onClickBtnglogo);
        function onClickBtnglogo(e){
            e.preventDefault();
            anime({targets : $scroll, scrollTop : 5520, duration : 500, easing:"easeInOutQuad"});}

        $serLi.addEventListener("click", onClickBtngser);
        function onClickBtngser(e){
            e.preventDefault();
            anime({targets : $scroll, scrollTop : 8061, duration : 500, easing:"easeInOutQuad"});}

        $teamLi.addEventListener("click", onClickBtngteam);
        function onClickBtngteam(e){
            e.preventDefault();
            anime({targets : $scroll, scrollTop : 17250, duration : 500, easing:"easeInOutQuad"});}
                    
        console.log(window.pageYOffset);

    });


    setTimeout(function() {
        //console.log('Works!');
      }, 3000);



    $(window).scroll( function(){
      /*  $(function () {
            var lastScrollTop = 0,
                delta = 15;
            $(window).scroll(function (event) {
                var st = $(this).scrollTop();
                if (Math.abs(lastScrollTop - st) <= delta) return;
                if ((st > lastScrollTop) && (lastScrollTop > 0)) {
                    $("#headerBox").css("top", "-90px");
                } else {
                    $("#headerBox").css("top", "0px");
                }
                lastScrollTop = st;
            });
            */
        var position = $(window).scrollTop(); 

        // should start at 0
        
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if(scroll > position) {
                console.log('다다다다운');
                
                    $('#headerBox').css("top", "-100px");
                
                //$('div').text('Scrolling Down Scripts');
            } else {
                 console.log('어어어어어업');
                
                    $('#headerBox').css("top", "0px");
               

                 
                 //$('div').text('Scrolling Up Scripts');
            }
            position = scroll;
        });

        $('.hideme').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1200);
            }
            
        }); 

        

        $('.Remeet_title').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#overview_img').animate({'opacity':'1','right':'0'},1200);
            }
        }); 

        
        $('#background_text02_back03').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#background_img').animate({'opacity':'1','right':'0px'},1200);
            }
        });

        $('#illust_text').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('.hide_up').animate({'opacity':'1','margin-top':'0%'},1200);
            } 
        }); 

        $('#illust_text').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob04').animate({'opacity':'1','top':'300px'},700);
            }
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob04').animate({'top':'310px'},700);
            }
        });
        $('#illust_ob04').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob09').animate({'opacity':'1','top':'500px'},700);
            }
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob09').animate({'top':'515px'},700);
            } 
        });
        $('#illust_ob09').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob03').animate({'opacity':'1','top':'500px'},700);
            }
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob03').animate({'top':'515px'},700);
            } 
        });
        $('#illust_ob03').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob06').animate({'opacity':'1','top':'200px'},700);
            } 
            if( bottom_of_window > bottom_of_element ){
                $('#illust_ob06').animate({'opacity':'1','top':'215px'},700);
            } 
        });

        $('#gragh_stick_17').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'80%'},1000);
            }  
        }); 
        $('#gragh_boder_17').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'762px'},1000);
            }  
        });

        $('#gragh_stick_15').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'60%'},1000);
            }  
        });
        $('#gragh_stick_15').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#gragh_boder_15').animate({'width':'570px'},1000);
            }  
        });

        $('#gragh_stick_12').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'40%'},1000);
            }  
        });
        $('#gragh_boder_12').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'380px'},1000);
            }  
        });

        $('#arrow').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'1880px'},1200);
            }  
        });
        $('#arrow').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#arrow_af').animate({'left':'1794px'},1200);
            }  
        });
        $('#arrow_be').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'left':'1794px'},1200);
            }  
        });
        
        $('#target_circle_01').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#target_circle_01').animate({'opacity':'1'},300);
                $('#target_circle_border01').animate({'opacity':'1'},300);
            } 
        }); 
        $('#target_circle_02').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#target_circle_02').animate({'opacity':'1'},300);
                    $('#target_circle_border02').animate({'opacity':'1'},300);
                } 
              }, 200);
        });
        $('#target_circle_03').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#target_circle_03').animate({'opacity':'1'},300);
                    $('#target_circle_border03').animate({'opacity':'1'},300);
                } 
              }, 380);
        });
        $('#target_circle_target').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#target_circle_target').animate({'opacity':'1'},300);
                } 
            }, 530);
        });

        $('.service_main_title').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#service_main img').animate({'padding-left':'0px', 'opacity':'1'},1000);
                } 
            }, 530);
        });

        $('#js_found').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#guide_phone_view00').animate({'opacity':'1','left':'0'},1000);
            } 
        }); 
        $('#js_found').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#guide_phone_view01').animate({'opacity':'1','left':'338px'},700);
                } 
            }, 630);
        });
        $('#js_found').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#guide_phone_view02').animate({'opacity':'1','left':'609px'},700);
                } 
            }, 630);
        });
        $('#js_found').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#guide_phone_view03').animate({'opacity':'1','left':'880px'},700);
                } 
            }, 630);
        });

        $('#bye_title').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#bye_view img').animate({'opacity':'1','margin-top':'70px'},1200);
            } 
        });
        $('.comu_title').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#comu_view01').animate({'opacity':'1','margin-top':'70px'},1200);
            } 
        });
        $('.comu_title').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#comu_view02').animate({'opacity':'1','margin-top':'-590px'},1200);
            } 
        });

        $('.service_memorry_title').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#service_memorry img').animate({'padding-left':'0px', 'opacity':'1'},1000);
                } 
            }, 530);
        });

        $('#letter_circle_01').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('.letter_view').animate({'opacity':'1','margin-top':'0px'},1200);
            } 
        });
        $('.letter_view').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#letter_text').animate({'opacity':'1','bottom':'150px'},1200);
            } 
        });

        $('#js_found02').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#memoryBox01').animate({'opacity':'1','margin-top':'70px'},1000);
            } 
        });
        $('#js_found02').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#memoryBox02').animate({'opacity':'1','margin-top':'70px'},1000);
                } 
            }, 530);
        });
        $('#js_found02').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#memoryBox03').animate({'opacity':'1','margin-top':'70px'},1000);
                } 
            }, 730);
        });
        $('#memoryBox03').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            setTimeout(function() {
                if( bottom_of_window > bottom_of_element ){
                    $('#memoryBox_text').animate({'opacity':'1'},1000);
                } 
            }, 530);
        });

    });
})(jQuery);










var $gallery = document.querySelector('#gallery');

var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li");
var _$a = [];

var _vWidth = window.innerWidth;
var _vheight= window.innerHeight;
var _max = $viewItem.length;
var _cuId = 0;
var _exId = _cuId;

window.addEventListener('resize',onResize);
function onResize(){
    _vWidth = window.innerWidth;
    _vheight= window.innerHeight;
    $viewContainer.style.width = (_vWidth * _max) + 'px';
    for(var i = 0; i < _max; i++){
        $viewItem[i].style.width = _vWidth + 'px';
    }
}
//리사이즈 할 때, vieew-container의 left좌표 변경
var left = _vWidth * _cuId * -1;
// $viewContainer.style.left = left + 'px'
TweenMax.killTweensOf($viewContainer); //해당 요소의 애니메이션 정지
TweenMax.set($viewContainer, {css : {left : left}});

onResize();

var $paddleNav = $gallery.querySelector(".paddle-nav");
var $BtnPaddleEl = $paddleNav.querySelectorAll("Button");
var $BtnPaddlePrev = $paddleNav.querySelector(".prev");
var $BtnPaddleNext = $paddleNav.querySelector(".next");

for(var i = 0; i < $BtnPaddleEl.length; i++){
    $BtnPaddleEl[i].addEventListener("click",onClickPaddleEl);
}
function onClickPaddleEl(e){
    e.preventDefault();
    var $li=e.currentTarget.parentElement;
    if($li.classList.contains("prev")){
        console.log("prev");
        _cuId--;
        if(_cuId < 0)   _cuId = 0;


    }else if($li.classList.contains("next")){
        console.log("next");
        _cuId++;
        if(_cuId >= _max)   _cuId = _max -1;
    }
    slide();
   // console.log(e.currentTarget.parentElement);/*e는 클릭 된 요소를 찾아줌  */

}



for(var i = 0; i < _max; i++){
    
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onClickListItemEl);
}
function onClickListItemEl(e) {
    e.preventDefault();
    var id = _$a.indexOf(e.currentTarget);
    var $listItemParent = e.currentTarget.parentElement;
    //현재 클릭된 요소(a) 의 부모 요소(li)를 찾는다.
    if(!$listItemParent.classList.contains('selected')){
        //부모 요소(li) 가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때(false).
        _cuId = id;
        slide();
    }
}

$BtnPaddlePrev.classList.add('disabled');

function slide(){
    if(_cuId === 0){
        $BtnPaddlePrev.classList.add('disabled');
        $BtnPaddleNext.classList.remove('disabled');
    }
    else if(_cuId === _max -1){
        $BtnPaddlePrev.classList.remove('disabled');
        $BtnPaddleNext.classList.add('disabled');
    }
    else{
        $BtnPaddlePrev.classList.remove('disabled');
        $BtnPaddleNext.classList.remove('disabled');
    }


    //현재 클릭된 버튼의 번호를 변경.
    $listItem[_exId].classList.remove("selected");
    //이전에 활성화된 버튼의 클래스(selected)를 삭제
    $listItem[_cuId].classList.add("selected");
    //현재 버튼의 클래스(selected)가 활성화되도록 추가.
    var left = _vWidth * _cuId * -1;

    TweenMax.to($viewContainer, 1.0, { css: { left: left }, ease: Quad.easeInOut });
    _exId = _cuId;

}