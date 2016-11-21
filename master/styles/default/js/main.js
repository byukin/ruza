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
