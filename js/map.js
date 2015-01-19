var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    });
    
    var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
								iconLayout: 'default#image',
								iconImageHref: '/img/pointer.png',
								iconImageSize: [30, 42],
								iconImageOffset: [-3, -42]
							});
	myMap.geoObjects.add(myPlacemark);
}