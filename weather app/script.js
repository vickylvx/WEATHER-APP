const apiKey = "d34b8fb608e7d54f5e1ad6e108d19e2d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbar = document.querySelector('.searchbox input');
const searchbtn = document.querySelector('.searchbox button');

const weatherIcon = document.querySelector('.weatherIcon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h ";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.innerHTML = '<i class="ri-cloud-fill"></i>'
    }
    else if(data.weather[0].main == "Clear"){
        iconElement.className = "ri-sun-fill"
    }
    else if(data.weather[0].main == "Rain"){
        iconElement.className = "ri-rainy-fill"
    }
    else if(data.weather[0].main == "Drizzle"){
        iconElement.className  = "ri-drizzle-line"
    }
    else if(data.weather[0].main == "Mist"){
        iconElement.className = "ri-mist-line"
    }
}

checkWeather();

searchbtn.addEventListener('click' , ()=>{
    checkWeather(searchbar.value);
})