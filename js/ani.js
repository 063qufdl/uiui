$(document).ready(function(){
    var pheight =$("#magic").height();

    $("#magic").hide();

    $(window).scroll(function(){
        var rollIt = $(this).scrollTop() >= pheight;

        if(rollIt){
            $("#magic").show().css({"position":"absolute"});
        }
        else{
            $("#magic").hide();
        }
    });

    var pcheight =$("#p-cover").height();

    $("#p-cover").hide();

    $(window).scroll(function(){
        var rollIt = $(this).scrollTop() >= pcheight;

        if(rollIt){
            $("#p-cover").show().css({"position":"absolute"});
        }
        else{
            $("#p-cover").hide();
        }
    });

    $('.wp1').waypoint(function(){
        $('.wp1').addClass('animated fadeInLeft');
    },{
        offset:'75%'
    });

    // $('.wp2').waypoint(function(){
    //     $('.wp2').addClass('animated fadeInLeft');
    // },{
    //     offset:'75%'
    // });

   

});


let mainText = document.querySelector("#magic");
window.addEventListener("scroll",function(){
    let value = window.scrollY;
    if(value > 2000){
        mainText.style.animation = "disa 1s ease-out forwards";
    }else{
        mainText.style.animation= "slide 1s ease-out";
    }
})