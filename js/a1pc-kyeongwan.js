
$(function(){
    $("#p-show").slick({
        autoplay:true,
        infinite:true,
        autoplaySpeed:2000,
        slidesToShow:1,
        slidesToScroll:1,
        arrows: false,
    });

    let mainText = document.querySelector("#p-magic");
window.addEventListener("scroll",function(){
    let value = window.scrollY;
    if(value > 2000){
        mainText.style.animation = "disa 1s ease-out forwards";
    }else{
        mainText.style.animation= "slide 1s ease-out";
    }
})
   });/*테블릿,피시 이벤트슬릭끝*/
