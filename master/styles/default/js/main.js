window.onload = function() {
  ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("location-map", {
                center: [55.72355770, 36.20014961],
                zoom: 9
            });

            myPlacemark = new ymaps.Placemark([55.71525143, 36.18837718], {
                hintContent: 'Белая Руза',
                balloonContent: 'Белая Руза. Котеджный поселок'
            });

            myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
			myMap.behaviors.disable('drag');
        }
};



$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 140) {
	$('.header-fixed').css('top','0px');
	$('.header-project-fixed').css('top','70px');
  } else {
	$('.header-fixed').css('top','-90px');
	$('.header-project-fixed').css('top','-160px');

  }
});

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});
document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });
document.querySelector('.toggle-button-fixed').addEventListener('click', function() {
        slideout.toggle();
      });

slideout.on('translate', function(translated) {
    $('.header-fixed').css('transition','-webkit-transform 0ms ease');
    $('.header-fixed').css('-webkit-transform','translateX('+translated+'px)');
    $('.header-fixed').css('transform','translateX('+translated+'px)');
});

slideout.on('beforeclose', function() {
    $('.header-fixed').css('transition','-webkit-transform 300ms ease');
    $('.header-fixed').css('-webkit-transform','translateX(0px)');
    $('.header-fixed').css('transform','translateX(0px)');
});

slideout.on('beforeopen', function() {
    $('.header-fixed').css('transition','-webkit-transform 300ms ease');
    $('.header-fixed').css('-webkit-transform','translateX(256px)');
    $('.header-fixed').css('transform','translateX(256px)');
});



$(document).ready(function() {
	$('.subheader-contact__message , .header-fixed-contact__message , .swipe-menu-contact__message , .footer__contact').click(function() {
		$('.popup-form').fadeIn(100);
	});
	$('.popup-form__close').click(function() {
		$('.popup-form').fadeOut(100);
	});
	$(".image-slider").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoHeight : true,

	});
});



