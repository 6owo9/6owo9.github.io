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