$(function(){

// $("#hamburger-menu").on("click",function(){
//     $("#menu-container").animate({marginLeft:"100%"}, 300);

//    });

//    $( ".cross" ).click(function() {
//     $("#menu-container").animate({marginLeft:"0px"}, 300);
// });

//      $("#menu-container>.menu>li>a").click(function(){
//      if($(this).next().is(":visible"))
//       {
//        $(this).next().stop().slideUp(500);
//        $(this).children("img").attr("src","img/arrow-down.png");
//       }else{
//         $(".submenu").stop().slideUp(500);
// $("#menu-container>.menu>li>a").children("img").attr("src","img/arrow-down.png"); 
//     $(this).next().stop().slideDown(500);
//     $(this).find("img").attr("src","img/arrow-up.png");        
//       }

//      });

$(".p-menu> li >a").bind("mouseover focus",function() {
  $(".p-menu>li>.p-submenu").hide();
  $(this).next().show();
});
$(".p-menu").mouseleave(function(){
  $(".p-menu >ul").stop().slideUp(100);
});  

});