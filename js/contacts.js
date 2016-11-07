(function iifeContacts($) {
  $(document).ready(function() {
    function initialize() {
  		var myLatlng = new google.maps.LatLng(50.4359915,30.4766343);
  		var mapOptions = {
  			zoom: 14,
  			center: myLatlng,
  			mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        disableDefaultUI: false,
        mapTypeControl: false
  		}

  		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  		//Callout Content
  		var contentString = 'улица Алексея Шовкуненко 6, Киев 03049, Украина';
  		//Set window width + content
  		var infowindow = new google.maps.InfoWindow({
  			content: contentString,
  			maxWidth: 300
  		});

  		//Add Marker
  		var marker = new google.maps.Marker({
  			position: myLatlng,
  			map: map
  		});

  		google.maps.event.addListener(marker, 'click', function() {
  			infowindow.open(map,marker);
  		});

  		//Resize Function
  		google.maps.event.addDomListener(window, "resize", function() {
  			var center = map.getCenter();
  			google.maps.event.trigger(map, "resize");
  			map.setCenter(center);
  		});
  	}

    google.maps.event.addDomListener(window, 'load', initialize);
  });
})(jQuery);
