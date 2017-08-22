//Map options
function initMap(){
        var options = {
            zoom: 10,
            center: {lat: 49.1951, lng: 16.6068}
        }
        //New Map
        var map = new google.maps.Map(document.getElementById('map'), options);

        //Add marker
        var marker = new google.maps.Marker({
          position: { lat: 49.1951, lng: 16.6068 },
          map: map
        });

        var infoWindow = new google.maps.InfoWindow({
            content: '<h1>Forget about Prague, come here !</h1>'
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }
 