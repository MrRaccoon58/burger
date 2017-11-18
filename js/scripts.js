/*jshint esversion: 6 */
$(document).ready(()=>{
    //меню в первой секции
  $(".mobile-menu").hide();
  $(".hamburger").click(e => {
    e.preventDefault();
    $(".mobile-menu").fadeToggle(300,'linear');

    if ($(".hamburger__bars").hasClass('bars-active')) 
    { //вернуть меню
        $('.mobile-hamburger__bars').fadeOut(300);
        $(".hamburger__bars").animate({left: '0'}, 300);
        $(".hamburger__bars").removeClass('bars-active');  
    }
    else 
    { //спрятать меню
        $('.mobile-hamburger__bars').removeClass('vh');
        $('.mobile-hamburger__bars').fadeIn(300);
        $(".hamburger__bars").animate({left: '50px'}, 300);
        $(".hamburger__bars").addClass('bars-active');
    }
    
    
});
});
