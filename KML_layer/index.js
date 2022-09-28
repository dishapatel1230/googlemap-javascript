function myMap(){
    const map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:41.786,lng:-87.624},zoom:6,
    });
    //Creates a new KMLLayer object to display your KML.
    const KmlLayer = new google.maps.KmlLayer({
        url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
        suppressInfoWindows: true,
        preserveViewport: false,
        map:map,
    });

    //These lines of code become the function within the addListener constructor.
     KmlLayer.addListener('click',function(event){
     const content = event.featureData.infoWindowHtml;                      //Writes the info window content to a variable.
     const testimonial = document.getElementById('capture');                //Identifies the div to write to, and replaces the HTML in it with the feature's content.
     testimonial.innerHTML =content;
   });
}