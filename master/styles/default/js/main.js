
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

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 140) {
	$('.header-fixed').css('top','0px');
  } else {
	$('.header-fixed').css('top','-90px');

  }
});
$(".image-slider").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

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
