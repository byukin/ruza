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
  } else {
	$('.header-fixed').css('top','-90px');

  }
});





$(document).ready(function() {
	$('body').swipe({
		swipeRight:function(){
			$('.swipe-menu').css('left','0px');

		},
		swipeLeft:function(){
			$('.swipe-menu').css('left','-256px');

		},
		threshold:30
	});
	$('.image-slider , .image-slider *').swipe("disable");

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



