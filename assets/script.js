
var responseText = document.getElementById('response-text');
var buttonEl = document.getElementById('button');
let cityInput = document.getElementById('city-input');
let stateInput = document.getElementById('state');
var h1EL = document.getElementById('h1');
var h2EL= document.getElementById('h2');
var cityButton = document.getElementById('cityButton'); 
var stateButton = document.getElementById('stateButton');
var city = localStorage.getItem('city');
var state = localStorage.getItem('state');
var RSList = document.getElementById('RS-list');


// var APIKey = ("j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q");
// var APIKey2 = "rWEeZY9SuFl7kzdnzhLLWSWn0yX3glbG"
// var grabbed from full stack linked in assignment
// var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q="+ city +"%20" + state;

var recentSearches = []

function renderRecentSeraches() {
    RSList.innerHTML = "";

    for (var i = 0; i< recentSearches.length; i++)
        var RS = recentSearches[i]

    var li = document.createElement("li");
    li.textContent = RS

    RSList.appendChild(li);
}

function init() {
    // Get stored todos from localStorage
    var storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedSearches !== null) {
      todos = storedSearches;
    }
  
    // This is a helper function that will render todos to the DOM
    renderRecentSeraches();
  }

function storeRecentSearches() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }

buttonEl.addEventListener('click', function(event) {
    event.preventDefault();
    var RSText = cityInput.value.trim();
    recentSearches.push(RSText);
    storeRecentSearches();
    console.log(recentSearches);
});

init()

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
        console.log('test');
        // console.log(h1EL.textContent);
        console.log(data);
        console.log(data[0].Key);
        var locationNum = (data[0].Key);
        
        // if (locationTest == true){  
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
        //   .catch(function(error){
        //     console.log(error);
        //     // modal alert goes here
        //   })
    });
};
        //     // with help from TA to format date correctly
        //    const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
        //       const date = new Date(data.DailyForecasts[0].Date);
        //       const formattedDate = date.toLocaleDateString('en-US', dateOptions);
  
        //       day1.textContent = formattedDate + " high of " + data.DailyForecasts[0].Temperature.Maximum.Value;
  
        //     const dateOptions1 = { month: '2-digit', day: '2-digit', year: 'numeric' };
        //     const date1 = new Date(data.DailyForecasts[1].Date);
        //     const formattedDate1 = date1.toLocaleDateString('en-US', dateOptions1);  
        //       day2.textContent = formattedDate1 + " high of " + data.DailyForecasts[1].Temperature.Maximum.Value;
              
        //     const dateOptions2 = { month: '2-digit', day: '2-digit', year: 'numeric' };
        //     const date2 = new Date(data.DailyForecasts[2].Date);
        //     const formattedDate2 = date.toLocaleDateString('en-US', dateOptions2);  
        //       day3.textContent = formattedDate2 + " high of " + data.DailyForecasts[2].Temperature.Maximum.Value;
  
        //     const dateOptions3 = { month: '2-digit', day: '2-digit', year: 'numeric' };
        //     const date3 = new Date(data.DailyForecasts[3].Date);
        //     const formattedDate3 = date3.toLocaleDateString('en-US', dateOptions3);
        //       day4.textContent = formattedDate3 + " high of " + data.DailyForecasts[3].Temperature.Maximum.Value;
              
        //     const dateOptions4 = { month: '2-digit', day: '2-digit', year: 'numeric' };
        //     const date4 = new Date(data.DailyForecasts[4].Date);
        //     const formattedDate4 = date4.toLocaleDateString('en-US', dateOptions4);    
        //       day5.textContent = formattedDate4 + " high of " + data.DailyForecasts[4].Temperature.Maximum.Value;       
            
        //   })
        //   .catch(function(error){
           
        //   })
        // }})     
     
         
     

    
 