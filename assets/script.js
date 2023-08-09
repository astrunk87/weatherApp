
var responseText = document.getElementById('response-text');
var buttonEl = document.getElementById('button');
let cityInput = document.getElementById('city');
let stateInput = document.getElementById('state');
var h1EL = document.getElementById('h1');
var h2EL= document.getElementById('h2');
var elements = [h1EL];
var elements2 =[h2EL];
var cityButton = document.getElementById('cityButton'); 
var stateButton = document.getElementById('stateButton');



var city = localStorage.getItem('city');
var state = localStorage.getItem('state');
var APIKey = ("j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q");
var APIKey2 = "rWEeZY9SuFl7kzdnzhLLWSWn0yX3glbG"
// var grabbed from full stack linked in assignment
var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=rWEeZY9SuFl7kzdnzhLLWSWn0yX3glbG&q="+ city +"%20" + state;

// %20 + state

// trying to get these to work better
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=&appid=" + {APIKey2} + city ;
// var queryURL2 = "http://dataservice.accuweather.com/locations/v1/cities/" + city+ APIKey2;
// fetch request needed
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={apiKey}

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
    // // print to the page
    h2EL.textContent = stateText;
    localStorage.setItem('state', h2EL.textContent);
   
  }
stateButton.addEventListener('click', handleStateButton);

// cityInput.addEventListener('keydown', function (event) {
//     // Access value of pressed key with key property
//     var key = event.key.toLowerCase();
//     var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
//     if (alphabetNumericCharacters.includes(key)) {
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].textContent += event.key;
//             // console.log(h1EL.textContent);
//             localStorage.setItem('city', h1EL.textContent);
//         }
//     }
    
// });
// localStorage.setItem('city', cityInput.textContent);

// stateInput.addEventListener('keydown', function (event) {
//     // Access value of pressed key with key property
//     var key = event.key.toLowerCase();
//     var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
//     if (alphabetNumericCharacters.includes(key)) {
//         for (var i = 0; i < elements.length; i++) {
//             elements2[i].textContent += event.key;
//             // console.log(h2EL.textContent);
//             localStorage.setItem('state', h2EL.textContent);
//         }
//     }
    
// });
buttonEl.addEventListener('click', locationKey)    
    // console.log('test');
    console.log(city);
    // console.log(state);

// pull local storage for city and state

// below grabbed from the first project "whose hotter", them edited for this project
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
            // console.log(response);
            // if (response.status === 200) {
            //   responseText.textContent = response.status;

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
     
         
     

    
 