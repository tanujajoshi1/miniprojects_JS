// Select elements

var iconElement= document.querySelector(".weather-icon");
var notifElement= document.querySelector(".notification");
var tempElement= document.querySelector(".temperature-value p");
var descElement= document.querySelector(".temperature-description p");
var locationElement= document.querySelector(".location p");


// App data

const weather={};
weather.temperature={
    unit:"celsius"
}

const kelvin= 273;
const key= "359b4df3986518a781d96a1d0bcf593e";

//check if browser support geolocation

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notifElement.style.display='block';
    notifElement.innerHTML="<p>Browser does not support Geolocation</p>";
}


function setPosition(position){
    var latitude=position.coords.latitude;
    var longitude= position.coords.longitude;

    getWeather(latitude,longitude);
}
function showError(){
    notifElement.style.display='block';
    notifElement.innerHTML=`<p>${error.message}</p>`;
}

////////////////
//get weather
//////////////////////
function getWeather(latitude,longitude){
    let api=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
    .then(function(response){
        let data=response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value=Math.floor(data.main.temp-kelvin);
        weather.description=data.weather[0].description;
        weather.iconId=data.weather[0].icon;
        weather.city=data.name;
        weather.country=data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
function ctof(temperature){
    return (temperature*9/5)+32;
}

tempElement.addEventListener('click',function(){
    if(weather.temperature.value==="undefined") return;

    if(weather.temperature.unit=="celsius"){
        var fah=ctof(weather.temperature.value);
        fah=Math.floor(fah);

        tempElement.innerHTML=`${fah}°<span>F</span>`;
        weather.temperature.unit="fahrenheit";
    }else{
        tempElement.innerHTML=`${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit="celsius";
    }
})

