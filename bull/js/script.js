
$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1200);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme-botton').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-bottom':'0px'},1200);
            }
            
        }); 
    });
});



$(document).ready(function() {
    $(window).scroll( function(){
        $('.hide-gragh78').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'78%'},1200);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hide-gragh-ko').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'100%'},1200);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hide-gragh79').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'79%'},1200);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hide-gragh72').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'72%'},1200);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1200);
            }
            
        }); 
    });
});


// $(document).ready(function() {
//     $(window).scroll( function(){
//         $('.hideme_solide').each( function(i){
            
//             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             if( bottom_of_window > bottom_of_element ){
//                 $(this).animate({'opacity':'1','margin-bottom':'0px'},1200);
//             }
            
//         }); 
//     });
// });

var $mouse1 = document.getElementById('keyword-box1'); 
var $mouse2 = document.getElementById('keyword-box2'); 
var $mouse3 = document.getElementById('keyword-box3'); 
var $text1 = document.getElementById('keyword-text1');
var $text2 = document.getElementById('keyword-text2');
var $text3 = document.getElementById('keyword-text3'); 

$mouse1.addEventListener('mouseover', function(e){
    e.preventDefault();
    if($text1.classList.contains("textnone")){
        $text1.classList.remove('textnone');
        $text1.classList.add('.text1');
        
    }
    $mouse1.classList.add('box-1');//배경색 변경
    // $mouse1.classList.add('box-1');
    // $text.classList.add('.text')
});
$mouse1.addEventListener('mouseout', function(e){
    e.preventDefault();
    $text1.classList.add('textnone');
    $text1.classList.remove('.text1');
    $mouse1.classList.remove('box-1');    
    
});

$mouse2.addEventListener('mouseover', function(e){
    e.preventDefault();
    if($text2.classList.contains("textnone")){
        $text2.classList.remove('textnone');
        $text2.classList.add('.text2');
    }
    $mouse2.classList.add('box-1');
});
$mouse2.addEventListener('mouseout', function(e){
    e.preventDefault();
    $text2.classList.add('textnone');
    $text2.classList.remove('.text2');
    $mouse2.classList.remove('box-1');    
});

$mouse3.addEventListener('mouseover', function(e){
    e.preventDefault();
    if($text3.classList.contains("textnone")){
        $text3.classList.remove('textnone');
        $text3.classList.add('.text3');
    }
    $mouse3.classList.add('box-1');
});
$mouse3.addEventListener('mouseout', function(e){
    e.preventDefault();
    $text3.classList.add('textnone');
    $text3.classList.remove('.text3');
    $mouse3.classList.remove('box-1');    

});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.text-box').each( function(i){
            if(!$text3.classList.contains("text1")){
                console.log('sss')
                $(this).animate({'opacity':'1','margin-bottom':'0px'},1200);
            };     
            $text3.classList.add('text-op');  
    });
})});


// ----------------------------------------------------------------메뉴 스크롤

var $scroll = document.scrollingElement;
var $btnTop = document.querySelector('#top');


$btnTop.addEventListener("click", onClickBtnTop);
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

var $scroll = document.scrollingElement;
var $ma = document.querySelector('#ma');
var $pj = document.querySelector('#pj');
var $pro = document.querySelector('#pro');
var $dif = document.querySelector('#dif');
var $gal = document.querySelector('#gal');

$ma.addEventListener("click", onClickBtnTop);
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

$pj.addEventListener("click", onClickBtnpj);
function onClickBtnpj(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 1177,
        duration : 500,
        easing:"easeInOutQuad"
    });
}

$pro.addEventListener("click", onClickBtnpro);
function onClickBtnpro(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 2530,
        duration : 500,
        easing:"easeInOutQuad"

    });
}

$dif.addEventListener("click", onClickBtndif);
function onClickBtndif(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 3954,
        duration : 500,
        easing:"easeInOutQuad"

    });
}

$gal.addEventListener("click", onClickBtngal);
function onClickBtngal(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 7180,
        duration : 500,
        easing:"easeInOutQuad"

    });
}
console.log(window.pageYOffset);
// ----------------------------------------------------------------갤러리


//slide-wrap
var slideWrapper = document.getElementById('slider-wrap');
//current slideIndexition
var slideIndex = 0;
//items
var slides = document.querySelectorAll('#slider-wrap ul li');
//number of slides
var totalSlides = slides.length;
//get the slide width
var sliderWidth = slideWrapper.clientWidth;
//set width of items
slides.forEach(function (element) {
    element.style.width = sliderWidth + 'px';
})
//set width to be 'x' times the number of slides
var slider = document.querySelector('#slider-wrap ul#slider');
slider.style.width = sliderWidth * totalSlides + 'px';

// next, prev
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('previous');
nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

// hover
slideWrapper.addEventListener('mouseover', function () {
    this.classList.add('active');
    clearInterval(autoSlider);
});
slideWrapper.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    autoSlider = setInterval(function () {
        plusSlides(1);
    }, 3000);
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }

    slider.style.left = -(sliderWidth * slideIndex) + 'px';
    pagination();
}


