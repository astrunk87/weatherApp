
var responseText = document.getElementById('response-text');
var buttonEl = document.getElementById('button');
let cityInput = document.getElementById('city');
let stateInput = document.getElementById('state');
var h1El = document.getElementById('h1');
var h2El= document.getElementById('h2');
var elements = [h1El];

var city = cityInput;
var APIKey = ("j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q");
var APIKey2 = "rWEeZY9SuFl7kzdnzhLLWSWn0yX3glbG"
// var grabbed from full stack linked in assignment
var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=rWEeZY9SuFl7kzdnzhLLWSWn0yX3glbG&q="+ city;

// trying to get these to work better
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=&appid=" + {APIKey2} + city ;
// var queryURL2 = "http://dataservice.accuweather.com/locations/v1/cities/" + city+ APIKey2;
// fetch request needed
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={apiKey}


buttonEl.addEventListener('click', locationKey); 
    console.log('test');
    console.log(city);


cityInput.addEventListener('keydown', function (event) {
    // Access value of pressed key with key property
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
    );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
      console.log(h1El.textContent);
      localStorage.setItem('city', h1El.textContent);
    }
  }
    
});
stateInput.addEventListener('keydown', function (event) {
    // Access value of pressed key with key property
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
    );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
      console.log(h2El.textContent);
      localStorage.setItem('state', h2El.textContent);
    }
  }
    
});

// pull local storage for city and state

// below grabbed from the first project "whose hotter", them edited for this project
function locationKey(){
    fetch(queryURL)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
        console.log('test');
        console.log(h1El.textContent);
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
     
         
     

    
 