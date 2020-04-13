/* add in your functions here */
//test vars
// var name = "Canada"
// var continent = "North America"
// var cities = "Madrid"
// var photos = "us1.jpg"

function outputCountryBox(name, continent, cities, photos) {
var citiesOutput = "";
var photosOutput = "";

  function outputCities(cities) {
    var i, citiesLength
    citiesLength = cities.length
    for (i = 0; i < citiesLength; i++) {
      citiesOutput += "<li>" + cities[i] + "</li>"
    }

    //do stuff
    //test output
    //citiesOutput = "<li>loop of cities</li>"
    return citiesOutput;

  }

  function outputPhotos(photos) {
    var i, photosLength;
    photosLength = photos.length
    for (i = 0; i < photosLength; i++) {
      photosOutput += "<img src=\"images/" + photos[i] + "\" class=\"photo\">"
    }
    //do stuff
    //test output
    //photosOutput = "us2.jpg"
    return photosOutput;
  }

  document.write(
  "<div class=\"item\">"
  +
  "<h2>" + name + "</h2>"
  +
  "<p>" + continent + "</p>"
  +
  "<div class=\"inner-box\">"
  +
  "<h3>Cities</h3>"
  +
  "<ul>"

  //end first document.write, sub function to loop cities array

  + outputCities(cities) +

  "</ul>"
  +
  "</div>"
  +
  "<div class=\"inner-box\">"
  +
  "<h3>Popular Photos</h3>"
  +
  outputPhotos(photos)
  +
  "</div>"
  +
  "<button>Visit</button>"
  +
  "</div>"
);
}
