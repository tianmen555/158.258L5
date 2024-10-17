/*E2 location js file*/

function getGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showGeolocation);
    } else {
        let x = document.getElementById("geolocation");
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position){
    let x = document.getElementById("geolocation");
    x.innerHTML = "Latitude: "+position.coords.latitude+
    "<br>Longitude: "+position.coords.longitude;
}