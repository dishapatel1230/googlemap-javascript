let gmap;
let  directionsRenderer;
let  directionsService;

function myMap(){
    let mapOptions = {
    center:new google.maps.LatLng(37.77,-122.447),    
    zoom : 12, 
    };
    gmap = new google.maps.Map(document.getElementById("map"),mapOptions);
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    directionsRenderer.setMap(gmap);  

    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
      });
}

function calculateAndDisplayRoute(directionsService,directionsRenderer) {
    let SelectedMode = document.getElementById("mode").value;

    directionsService.
    route({
        origin:'Casino Del Sol, West Valencia Road, Tucson, AZ, USA',
        destination:'Bisbee Breakfast Club Sunrise, East Sunrise Drive, Tucson, AZ, USA',
        travelMode: google.maps.TravelMode[SelectedMode],
    })
    .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
}