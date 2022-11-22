$(function(){

$('.header-slider').slick({
arrows: false,
vertical: true,
dots: true,
dotsClass: 'header-dots',
autoplay: 2000  
});



$('.menu-btn').on('click', function(){
   $('.menu-btn ,.menu__list').toggleClass('active');
   $('body').toggleClass('lock');
});
});
