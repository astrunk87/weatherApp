
var responseText = document.getElementById('response-text');
var buttonEl = document.getElementById('searchButton');
let cityInput = document.getElementById('city-input');
let stateInput = document.getElementById('state');
var h1EL = document.getElementById('h1');
var h2EL= document.getElementById('h2');
var cityButton = document.getElementById('cityButton'); 
var stateButton = document.getElementById('stateButton');
var city = localStorage.getItem('city');
var state = localStorage.getItem('state');
var RSList = document.getElementById('RS-list');
var clearButton = document.getElementById('clear');
// var queryURL = 'HTTPS://dataservice.accuweather.com/locations/v1/cities/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q='+ city +"%20" + state;
var countryCode = '840';
var limit = '5';
// open weather api key b046392f367662e66ecc3e239b36ad15
var APIKey = 'b046392f367662e66ecc3e239b36ad15';
// var queryURL = 'HTTPS://api.openweathermap.org/geo/1.0/direct?q=' + city + state + countryCode + '&appid=' + APIKey;
var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},{840}&appid=${APIKey}`
var recentSearches = []
function renderRecentSeraches() {    
    recent1.textContent = recentSearches[0]
    recent2.textContent = recentSearches[1]
    recent3.textContent = recentSearches[2]
}

function init() {
    // pulled from a class instruction
    var storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
  
    if (storedSearches !== null) {
      recentSearches = storedSearches;
    }
    
    renderRecentSeraches();
  }

function storeRecentSearches() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }

buttonEl.addEventListener('click', function(event) {
    event.preventDefault();
    var RSText = cityInput.value.trim() +" "+ stateInput.value
    recentSearches.push(RSText);
    // storeRecentSearches();
    // console.log(recentSearches);
    storeRecentSearches();
    renderRecentSeraches();
});

init()

function reload() {
  // this function was found on mozilla and helps reset the page
  location.reload();
}

 newSearch.addEventListener('click', reload);

// base of this function is from class work 05-06 on form elements
function handleCityButton(event) {
    event.preventDefault();  
    // select form element by its `name` attribute and get its value
    var cityText = $('input[name="city-input"]').val(); 
    // // print to the page
    h1EL.textContent = cityText;
    localStorage.setItem('city', h1EL.textContent);
   
  }
cityButton.addEventListener('click', handleCityButton);

function handleStateButton(event) {
    event.preventDefault();  
    // select form element by its `name` attribute and get its value
    var stateText = $('input[name="state-input"]').val(); 
    // print to the page
    h2EL.textContent = stateText;
    localStorage.setItem('state', h2EL.textContent);
    
   
  }
stateButton.addEventListener('click', handleStateButton);

 

buttonEl.addEventListener('click', locationKey)      

// below grabbed from the first project "whose hotter", then edited for this project
function locationKey(){
    fetch(queryURL)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
           
        console.log(data);
        console.log(data[0].lon);
        console.log(data[0].lat);
        var lon = (data[0].lon);
        var lat = (data[0].lat);
        
        // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
        
          // fetch(`HTTPS://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationNum}?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp`)
          // ^for acuweather api
          fetch(`HTTPS://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`)
            
          .then(function(response){
            return response.json();
          })
          .then(function(data){
            console.log(data);
            
            // changes day 1 card
            let day1date = dayjs(data.list[0].dt_txt);
            console.log(data.list[0].dt_txt)
            $('#day1date').text(day1date.format('MMM D, YYYY'));
            day1Phrase.textContent = (data.list[0].weather[0].description)
            day1Maxtemp.textContent = "max temp of " +(data.list[0].main.temp_max)+ "°"
            day1Mintemp.textContent = "min temp of " +(data.list[0].main.temp_min) + "°"
            day1humidity.textContent = "humidity: " + (data.list[0].main.humidity)
             // changes day2 card
             let day2date = dayjs(data.list[9].dt_txt);
             console.log(data.list[9].dt_txt)
             $('#day2date').text(day2date.format('MMM D, YYYY'));
             day2Phrase.textContent = (data.list[9].weather[0].description)
             day2Maxtemp.textContent = "max temp of " +(data.list[9].main.temp_max)+ "°"
             day2Mintemp.textContent = "min temp of " +(data.list[9].main.temp_min) + "°"
             day2humidity.textContent = "humidity: " + (data.list[9].main.humidity)          
            // changes day 3 card
            let day3date = dayjs(data.list[17].dt_txt);
            console.log(data.list[17].dt_txt)
            $('#day3date').text(day3date.format('MMM D, YYYY'));
            day3Phrase.textContent = (data.list[17].weather[0].description)
            day3Maxtemp.textContent = "max temp of " +(data.list[17].main.temp_max)+ "°"
            day3Mintemp.textContent = "min temp of " +(data.list[17].main.temp_min) + "°"
            day3humidity.textContent = "humidity: " + (data.list[17].main.humidity)          
            // changes day 4 card
            let day4date = dayjs(data.list[26].dt_txt);
            console.log(data.list[26].dt_txt)
            $('#day4date').text(day4date.format('MMM D, YYYY'));
            day4Phrase.textContent = (data.list[26].weather[0].description)
            day4Maxtemp.textContent = "max temp of " +(data.list[26].main.temp_max)+ "°"
            day4Mintemp.textContent = "min temp of " +(data.list[26].main.temp_min) + "°"
            day4humidity.textContent = "humidity: " + (data.list[26].main.humidity)          
            // changes day 5 card
            let day5date = dayjs(data.list[35].dt_txt);
            console.log(data.list[35].dt_txt)
            $('#day5date').text(day5date.format('MMM D, YYYY'));
            day5Phrase.textContent = (data.list[35].weather[0].description)
            day5Maxtemp.textContent = "max temp of " +(data.list[35].main.temp_max)+ "°"
            day5Mintemp.textContent = "min temp of " +(data.list[35].main.temp_min) + "°"
            day5humidity.textContent = "humidity: " + (data.list[35].main.humidity)
         

        });
        
    });
};
          
     
         
     

    
 