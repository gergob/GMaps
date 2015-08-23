var map;
function initializeMap() {
    map = new google.maps.Map(document.getElementById('mymap'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}