$(document).ready(function(){

	$('.navbar-toggler').click(function(){
		$(this).toggleClass('activo');
	});

	$('.nav-link').click(function(){

		var link = $(this);

		//offset nos devuelve dos coordenadas TOP y LEFT de cualquier elemento
		console.log($(link.attr('href')).offset().top);

		$('html, body').stop().animate({scrollTop: $(link.attr('href')).offset().top},1000);

	});


	$('.top').click(function(){
		$('html,body').animate({scrollTop: 0}, 1000);
	});


	$(window).scroll(function(){
		
		if( $(this).scrollTop() > 500 ){
			$('.top').css('display','flex');
		}else{
			$('.top').css('display','none');
		}

	});



	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		],
		responsive : {
		    // breakpoint from 768 up
		    768 : {
		    	items: 2
		    }
		}
	});



});

function initMap(){

	var icon = "img/marker.png";	
	var location = {lat: -12.045832, lng: -77.030549}; 

	var locations = [
	[
	"Primer Local",-12.047580, -77.033140
	],
	[
	"Segundo Local",-12.045832, -77.030549
	],
	[
	"Tercer Local", -12.046447, -77.032526
	]
	]

	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 16,
			center: location,
			disableDefaultUI: true,
			styles: [
			{
				"elementType": "labels",
				"stylers": [
				{
					"visibility": "off"
				},
				{
					"color": "#f49f53"
				}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
				{
					"color": "#f9ddc5"
				},
				{
					"lightness": -7
				}
				]
			},
			{
				"featureType": "road",
				"stylers": [
				{
					"color": "#813033"
				},
				{
					"lightness": 43
				}
				]
			},
			{
				"featureType": "poi.business",
				"stylers": [
				{
					"color": "#645c20"
				},
				{
					"lightness": 38
				}
				]
			},
			{
				"featureType": "water",
				"stylers": [
				{
					"color": "#1994bf"
				},
				{
					"saturation": -69
				},
				{
					"gamma": 0.99
				},
				{
					"lightness": 43
				}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#f19f53"
				},
				{
					"weight": 1.3
				},
				{
					"visibility": "on"
				},
				{
					"lightness": 16
				}
				]
			},
			{
				"featureType": "poi.business"
			},
			{
				"featureType": "poi.park",
				"stylers": [
				{
					"color": "#645c20"
				},
				{
					"lightness": 39
				}
				]
			},
			{
				"featureType": "poi.school",
				"stylers": [
				{
					"color": "#a95521"
				},
				{
					"lightness": 35
				}
				]
			},
			{},
			{
				"featureType": "poi.medical",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#813033"
				},
				{
					"lightness": 38
				},
				{
					"visibility": "off"
				}
				]
			},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{
				"elementType": "labels"
			},
			{
				"featureType": "poi.sports_complex",
				"stylers": [
				{
					"color": "#9e5916"
				},
				{
					"lightness": 32
				}
				]
			},
			{},
			{
				"featureType": "poi.government",
				"stylers": [
				{
					"color": "#9e5916"
				},
				{
					"lightness": 46
				}
				]
			},
			{
				"featureType": "transit.station",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "transit.line",
				"stylers": [
				{
					"color": "#813033"
				},
				{
					"lightness": 22
				}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
				{
					"lightness": 38
				}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#f19f53"
				},
				{
					"lightness": -10
				}
				]
			},
			{},
			{},
			{}
			]
		});





	var infowindow = new google.maps.InfoWindow();


	for (var i = 0; i< locations.length ; i++) {

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: icon
		});


		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				var content = '<h1 class="asdsa">'+locations[i][0]+'</h1>';
				infowindow.setContent(content);
				infowindow.open(map, marker);
			}
		})(marker, i));

	}

	


}








