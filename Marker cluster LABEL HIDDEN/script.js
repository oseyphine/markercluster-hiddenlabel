var data = [
  {country: 'ingenierie', name: 'Paris', lat: -20.895788041665, lng: 55.412737559527},
  {country: 'ingenierie', name: 'Melun', lat: -20.916691943136, lng: 55.506295775995},
  {country: 'ingenierie', name: 'Lyon', lat: -20.889503358684, lng: 55.454000663012},
  
  {country: 'habitat', name: 'Berlin', lat: -20.881310777304, lng: 55.456766104326},
  {country: 'habitat', name: 'Baden Baden', lat: -20.8994519, lng: 55.4696561},
  {country: 'habitat', name: 'Berlin', lat: -20.8871485, lng: 55.4246952},
  {country: 'habitat', name: 'Baden Baden', lat: -20.902420204841, lng: 55.480364179239},
  {country: 'habitat', name: 'Berlin', lat: -20.8907323, lng: 55.4798155},
  {country: 'habitat', name: 'Baden Baden', lat: -20.8907323, lng: 55.4798155},
  {country: 'habitat', name: 'Berlin', lat: -20.893633036477, lng: 55.478762816638},
  {country: 'habitat', name: 'Baden Baden', lat: -20.9011485, lng: 55.3967176},
  
  {country: 'amenagement', name: 'Londres', lat: -20.8809097, lng: 55.4422935},
  {country: 'amenagement', name: 'Bristol', lat: -20.895619604693, lng: 55.468739485368},
  {country: 'amenagement', name: 'Plymouth', lat: -20.8931727, lng: 55.4853431},
  {country: 'amenagement', name: 'Londres', lat: -20.889941343589, lng: 55.477381562814},
  {country: 'amenagement', name: 'Bristol', lat: -20.893203989418, lng: 55.4855891224},
  {country: 'amenagement', name: 'Plymouth', lat: -20.879798, lng: 55.4460264},
  {country: 'amenagement', name: 'Londres', lat: -20.905792827343, lng: 55.603423928842},
  {country: 'amenagement', name: 'Bristol', lat: -20.890375411758, lng: 55.478247832507},
  {country: 'amenagement', name: 'Plymouth', lat: -20.913568159019, lng: 55.477636288851},
  
  {country: 'amenagement', name: 'Londres', lat: -20.9000754, lng: 55.5013121},
  {country: 'amenagement', name: 'Bristol', lat: -20.8960772, lng: 55.489854},
  {country: 'amenagement', name: 'Plymouth', lat: -20.932525568395, lng: 55.295120095834},
  {country: 'amenagement', name: 'Londres', lat: -20.9320153, lng: 55.2949112},
  {country: 'amenagement', name: 'Bristol', lat: -20.9065427, lng: 55.5005946},
  {country: 'amenagement', name: 'Plymouth', lat: -20.895779976115, lng: 55.4460264},
  {country: 'amenagement', name: 'Londres', lat: -20.905792827343, lng: 55.603423928842},
  {country: 'amenagement', name: 'Bristol', lat: -20.890375411758, lng: 55.478247832507},
  {country: 'amenagement', name: 'Plymouth', lat: -20.913568159019, lng: 55.477636288851},
  {country: 'amenagement', name: 'Londres', lat: -20.9000754, lng: 55.5013121},
  {country: 'amenagement', name: 'Bristol', lat: -20.8960772, lng: 55.489854},
  {country: 'amenagement', name: 'Plymouth', lat: -20.932525568395, lng: 55.295120095834},
  {country: 'amenagement', name: 'Londres', lat: -20.9320153, lng: 55.2949112},
  {country: 'amenagement', name: 'Bristol', lat: -20.9065427, lng: 55.5005946},
  {country: 'amenagement', name: 'Plymouth', lat: -20.895779976115, lng: 55.4460264},
  {country: 'amenagement', name: 'Londres', lat: -20.905792827343, lng: 55.603423928842},
  {country: 'amenagement', name: 'Bristol', lat: -20.890375411758, lng: 55.478247832507},
  {country: 'amenagement', name: 'Plymouth', lat: -20.913568159019, lng: 55.477636288851},
];

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: -21, lng: 55.5},
    });

		// Save Markers by location
		var placeMarkerList = {};

		 // Checks every place
		for (var i = 0; i < data.length; ++i) {
		var place = data[i];
		var latLng = new google.maps.LatLng(place.lat, place.lng);

		if(!placeMarkerList.hasOwnProperty(place.country)) {
  			placeMarkerList[place.country] = [];
		}

	// Creates the marker and save it in place marker list
		var marker = new google.maps.Marker({
  			position: latLng,
  			icon: 'https://s3-eu-west-1.amazonaws.com/test-sodiac/' + place.country + '1.png',
		});
		placeMarkerList[place.country].push(marker);
		 }

	MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
	  var index = 0;
	  var count = markers.length.toString();

	  var dv = count;
	  while (dv !== 0) {
	    dv = parseInt(dv / 5, 10);
	    index++;
	  }

	  index = Math.min(index, numStyles);
	  return {
	    text: "",
	    index: index,
	    title: count
	  };
	}
	MarkerClusterer.prototype.setCalculator = function(calculator) {
			this.calculator_ = calculator;
	};

	// Parse every country to display a cluster for the country
		for (var country in placeMarkerList) {
		if (placeMarkerList.hasOwnProperty(country)) {
			var markerCluster = new MarkerClusterer(map, placeMarkerList[country],{
    			imagePath: 'https://s3-eu-west-1.amazonaws.com/test-sodiac/' + country,
  			});
			 }    
		}
}