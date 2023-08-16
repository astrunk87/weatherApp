
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
var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q="+ city +"%20" + state;

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
        console.log(data[0].Key);
        var locationNum = (data[0].Key);
        
        
          fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationNum}?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp`)      
          .then(function(response){
            return response.json();
          })
          .then(function(data){
            console.log(data);
            
            // changes day 1 card
            let day1date = dayjs( data.DailyForecasts[0].Date);
            $('#day1date').text(day1date.format('MMM D, YYYY'));
            day1Phrase.textContent = (data.DailyForecasts[0].Day.IconPhrase)
            day1Maxtemp.textContent = "max temp of " +(data.DailyForecasts[0].Temperature.Maximum.Value)+ "°"
            day1Mintemp.textContent = "min temp of " +(data.DailyForecasts[0].Temperature.Minimum.Value) + "°"
            day1Precip.textContent = "type of precipitation: " + (data.DailyForecasts[0].Day.PrecipitationType)
             // changes day2 card
            let day2date = dayjs( data.DailyForecasts[1].Date);
            $('#day2date').text(day2date.format('MMM D, YYYY'));
            day2Phrase.textContent = (data.DailyForecasts[1].Day.IconPhrase)
            day2Maxtemp.textContent = "max temp of " +(data.DailyForecasts[1].Temperature.Maximum.Value)+ "°"
            day2Mintemp.textContent = "min temp of " +(data.DailyForecasts[1].Temperature.Minimum.Value) + "°"
            day2Precip.textContent = "type of precipitation: " + (data.DailyForecasts[1].Day.PrecipitationType)           
            // changes day 3 card
            let day3date = dayjs( data.DailyForecasts[2].Date);
            $('#day3date').text(day3date.format('MMM D, YYYY'));
            day3Phrase.textContent = (data.DailyForecasts[2].Day.IconPhrase)
            day3Maxtemp.textContent = "max temp of " +(data.DailyForecasts[2].Temperature.Maximum.Value)+ "°"
            day3Mintemp.textContent = "min temp of " +(data.DailyForecasts[2].Temperature.Minimum.Value) + "°"
            day3Precip.textContent = "type of precipitation: " + (data.DailyForecasts[2].Day.PrecipitationType)           
            // changes day 4 card
            let day4date = dayjs( data.DailyForecasts[3].Date);
            $('#day4date').text(day4date.format('MMM D, YYYY'));
            day4Phrase.textContent = (data.DailyForecasts[3].Day.IconPhrase)
            day4Maxtemp.textContent = "max temp of " +(data.DailyForecasts[3].Temperature.Maximum.Value)+ "°"
            day4Mintemp.textContent = "min temp of " +(data.DailyForecasts[3].Temperature.Minimum.Value) + "°"
            day4Precip.textContent = "type of precipitation: " + (data.DailyForecasts[3].Day.PrecipitationType)           
            // changes day 5 card
            let day5date = dayjs( data.DailyForecasts[4].Date);
            $('#day5date').text(day5date.format('MMM D, YYYY'));
            day5Phrase.textContent = (data.DailyForecasts[4].Day.IconPhrase)
            day5Maxtemp.textContent = "max temp of " +(data.DailyForecasts[4].Temperature.Maximum.Value)+ "°"
            day5Mintemp.textContent = "min temp of " +(data.DailyForecasts[4].Temperature.Minimum.Value) + "°"
            day5Precip.textContent = "type of precipitation: " + (data.DailyForecasts[4].Day.PrecipitationType)

            
           
           
          

        });
        
    });
};
          
     
         
     

    
 