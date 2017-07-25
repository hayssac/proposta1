function myMap() {
	// var esigPoint = new google.maps.LatLng(-5.83046, -35.205386);
	var esigPoint = {lat: -5.83046, lng: -35.205386};
    var mapOptions = {
        center: esigPoint,
        zoom: 50,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
  		position: esigPoint,
  		map: map,
  		animation:google.maps.Animation.BOUNCE
 	});
 	// marker.setMark(map);
}
