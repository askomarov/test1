$(document).ready(function () {
   $('.slider').slick({
      arrows: false, 		// стрелочки - видно или нет
      dots: false, 			 //пагинация - точки списков
      // adaptiveHeight:true,
      // infinite: true,
      centerMode: false,
      slidesToShow: 3,		 //кол-во слайдов на экране
      slidesToScroll: 1,	 // кол-во слайдов для прокрутки
      speed: 1000, 		 //1000ms - 1 секунда
      easing: 'ease',
      touchTreshhold: 10,
      autoplay: false,
      autoplaySpeed: 700,
      vertical: true,
      infinite: true,
   });

});