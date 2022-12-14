function myMap(){
 const map = new google.maps.Map(document.getElementById('map'),{
      center:{lat:0,lng:180},
      zoom :3,
      mapTypeId: "terrain",
 });

  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
      path:flightPlanCoordinates,
      strokeColor:"#0000FF",
      strokeOpacity:0.8,
      strokeWeight:5,
     
  });
  flightPath.setMap(map);
}