
var $tabMenu = document.querySelector('#tab-menu'); //큰 메뉴
var $tabMenuEl = $tabMenu.querySelectorAll('a');    //해당하는 메뉴들
var $tabContent = document.getElementsByClassName('tab-content')  //메뉴 안에 내용

for(var i = 0; i < $tabMenuEl.length; i++){
    tabMenuClick(i);
}

function tabMenuClick(index){
    //i의 순서를 체크할 수 있게 index의 전달인자로 할당.
    $tabMenuEl[index].addEventListener("click", function(e){
    e.preventDefault();
    // console.log(index);

    for(var i = 0; i < $tabMenuEl.length; i++){
    //모든 요소에서 .selected를삭제
    $tabMenuEl[i].classList.remove('selected'); //각각 요소에 있는 selected삭제 /일단 다 삭제
    $tabContent[i].classList.remove('selected');
    
    if(i === index){
        //for반복문에서 
        $tabMenuEl[i].classList.add('selected'); //i의 순서와 index가 일치 할 경우 해당하는 selected를 보여줌
        $tabContent[i].classList.add('selected');
    }
    }
    });
}

var $soundMenu = document.querySelector('#sound-menu');
var $soundMenuEl = $soundMenu.querySelectorAll('a');
var $soundContent = document.getElementsByClassName('sound-content')



for(var i = 0; i < $soundMenuEl.length; i++){
  soundMenuClick(i);
}

function soundMenuClick(index){
  $soundMenuEl[index].addEventListener("click", function(e){
  e.preventDefault();

  for(var i = 0; i < $soundMenuEl.length; i++){
    $soundMenuEl[i].classList.remove('selected');
    $soundContent[i].classList.remove('selected');
  
    if(i === index){
      $soundMenuEl[i].classList.add('selected');
      $soundContent[i].classList.add('selected');
    }
  }
  });
}



//갤러리

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









//스크롤
var scroll = window.scrollY;
console.log(scroll);

var $scroll = document.scrollingElement;
var $top = document.querySelector('#top');
var $main = document.querySelector('.nav-main');
var $synopsis = document.querySelector('.nav-synopsis');
var $cast = document.querySelector('.nav-cast');
var $view = document.querySelector('.nav-view');
var $music = document.querySelector('.nav-music');

$top.addEventListener("click", onClickBtnTop);
function onClickBtnTop(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 0,
        duration : 500,
        easing:"easeInOutQuad"
    });
}

$main.addEventListener("click", onClickBtnmain);
function onClickBtnmain(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 0,
        duration : 500,
        easing:"easeInOutQuad"
    });
}

$synopsis.addEventListener("click", onClickBtnsy);
function onClickBtnsy(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 1003,
        duration : 500,
        easing:"easeInOutQuad"
    });
}

$cast.addEventListener("click", onClickBtncast);
function onClickBtncast(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 2003,
        duration : 500,
        easing:"easeInOutQuad"
    });
}

$view.addEventListener("click", onClickBtnview);
function onClickBtnview(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 2803,
        duration : 500,
        easing:"easeInOutQuad"
    });
}

$music.addEventListener("click", onClickBtnmusic);
function onClickBtnmusic(e){
    e.preventDefault();
    anime({
        targets : $scroll,
        scrollTop : 4905,
        duration : 500,
        easing:"easeInOutQuad"
    });
}