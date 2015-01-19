var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 12
    });
    
    var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/pointer.png',
		iconImageSize: [50, 65],
		iconImageOffset: [-3, -42]
	});

	
	var myPlacemark2 = new ymaps.Placemark([55.78, 37.56], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	var myPlacemark3 = new ymaps.Placemark([55.78, 37.54], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	var myPlacemark4 = new ymaps.Placemark([55.78, 37.56], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});

	var myPlacemark4 = new ymaps.Placemark([55.78, 37.56], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	var myPlacemark5 = new ymaps.Placemark([55.77, 37.52], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark2.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	var myPlacemark6 = new ymaps.Placemark([55.75, 37.54], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark3.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	var myPlacemark7 = new ymaps.Placemark([55.74, 37.57], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark4.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	var myPlacemark8 = new ymaps.Placemark([55.75, 37.59], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark5.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	var myPlacemark9 = new ymaps.Placemark([55.77, 37.58], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark6.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});

	myMap.geoObjects.add(myPlacemark);
	myMap.geoObjects.add(myPlacemark2);
	myMap.geoObjects.add(myPlacemark3);
	myMap.geoObjects.add(myPlacemark4);
	myMap.geoObjects.add(myPlacemark5);
	myMap.geoObjects.add(myPlacemark6);
	myMap.geoObjects.add(myPlacemark7);
	myMap.geoObjects.add(myPlacemark8);
	myMap.geoObjects.add(myPlacemark9);


	var myPlacemark10 = new ymaps.Placemark([55.762367, 37.597812], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark5.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	myMap.geoObjects.add(myPlacemark10);

	var myPlacemark11 = new ymaps.Placemark([55.783467, 37.602467], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark4.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	myMap.geoObjects.add(myPlacemark11);

	var myPlacemark12 = new ymaps.Placemark([55.737852, 37.608954], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'http://iralsob.github.io/hotel/img/mark3.png',
		iconImageSize: [31, 42],
		iconImageOffset: [-3, -42]
	});
	myMap.geoObjects.add(myPlacemark12);
}