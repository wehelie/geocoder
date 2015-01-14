$(document).ready(function(){


	// map options

	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(47.75107 , -120.74014),
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.BOTTEM_LEFT
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},

		scaleControl: false
	};

	infowindow = new google.maps.InfoWindow({
		content: 'holding'
	}); 

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); 

	geocoder = new google.maps.Geocoder(); 

	function getCor(address, callback) {
		var cord; 
		geocoder.geocode({address: address}, function(results, status){
			cord_obj = results[0].geometry.location; 
			cord = [cord_obj.k, cord_obj.D];
			callback(cord); 
		});

		getCor('5910 47th ave S. Seattle, WA', function(cord) {
			
		});
	}

}); 