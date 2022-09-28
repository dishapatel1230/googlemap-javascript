function myMap(){
    var map_parameters = { center: {lat: -25.363, lng: 131.044}, zoom: 4 };
    var map = new google.maps.Map(document.getElementById('map'), map_parameters);

    var position1 = {position:{lat: -25.363, lng: 131.044}, map:map};
    var marker = new google.maps.Marker(position1);
    
}