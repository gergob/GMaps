//var map;
function initializeMap() {
    if(google && google.maps && typeof(google.maps.Map) === 'function') {

        //
        // Roadmap - DEFAULT
        //
        var myMapElement = document.getElementById('stdMap');
        var stdMap = new google.maps.Map(myMapElement, {
            center: {lat: 42, lng: 0.3},
            zoom: 6
        });


        //
        // Satellite Map
        //
        var satelliteMapElement = document.getElementById('satelliteMap');
        var satelliteMap = new google.maps.Map(satelliteMapElement, {
            center: {lat: 42, lng: 0.3},
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });

        //
        // Hybrid Map
        //
        var hybridMapElement = document.getElementById('hybridMap');
        var hybridMap = new google.maps.Map(hybridMapElement, {
            center: {lat: 42, lng: 0.3},
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.HYBRID
        });

        //
        // Terrain Map
        //
        var terrainMapElement = document.getElementById('terrainMap');
        var terrainMap = new google.maps.Map(terrainMapElement, {
            center: {lat: 42, lng: 0.3},
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        });
    }
}