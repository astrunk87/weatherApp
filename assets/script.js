
var buttonEl = document.getElementById('search');
var city = "bloomington"
var APIKey = ("j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q");
var APIKey2 = "rWEeZY9SuFl7kzdnzhLLWSWn0yX3glbG"
// var grabbed from full stack linked in assignment
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=&appid=" + APIKey + city ;
var queryURL2 = "HTTPS://dataservice.accuweather.com/locations/v1/search?={city}&{apikey}";
var queryURL3 = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=rWEeZY9SuFl7kzdnzhLLWSWn0yX3glbG&q=bloomington"

// fetch request needed
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={apiKey}


buttonEl.addEventListener('click', locationKey); 
    console.log('test');


// below grabbed from the first project "whose hotter", them edited for this project
function locationKey(){
    fetch(queryURL3)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
        console.log('test');
        console.log(data);
        // var locationNum = (data.Key);
        
        // if (locationTest == true){  
        //   fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationNum}?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp`)      
        //   .then(function(response){
        //     return response.json();
        //   })
        //   .then(function(data){
        //     console.log(data);
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
     
         
     
    })};
    
 