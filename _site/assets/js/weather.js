var x = document.getElementById("weather");
var long = "";
var lat = "";
/*checks location (prompts user) and calls the next function (showPosition)*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

/*sets the long and lat and calls the next function*/
function showPosition(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    getWeather();
}

var myArray = [];
/*creates a GET request*/
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

/*Final function that actually gets the weather data from the api and then writes it out to HTML*/
function getWeather(){
var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" +long;
var client = new HttpClient();
client.get(url, function(response){
  alert (response); /*shows all the JSON in a string*/
  alert(response[2]); /*alerts the third character of the string thus proving it's a string*/
  var obj=JSON.parse(response); /*this turns it into a JSON object*/
  alert(obj); /*shoiuld shod object Object which proves obj is now a JSON object*/
  document.getElementById("weather").innerHTML = obj.name; /*IT WORKSSSSS*/

});
}

/*
Need to feed the function the users current lat/longitude and
HOW TO PARSE THIS INFORMATIONNNNN? THE PROBLEM IS THAT "RESPONSE" is coming in as a PURE STRING so not sure how to turn that into an array or JSON...
need to fill in the inner HTML*/
