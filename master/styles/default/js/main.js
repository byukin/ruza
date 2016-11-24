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
	$(this).on("swiperight",function(event){
		$('.swipe-menu').css('left','0px');
		$('body').css('padding-left','256px');
	});
	$(this).on("swipeleft",function(){
	 	$('.swipe-menu').css('left','-256px');
		$('body').css('padding-left','0px');
	});
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



