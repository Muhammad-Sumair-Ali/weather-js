
let country = document.getElementById("country")
let city = document.getElementById("city");
let temp = document.getElementById("temp");
var haze = document.getElementById("haze")
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind")
let time = document.getElementById("time");
let input = document.getElementById("inp");
let load = document.getElementById("gif")



setInterval(function() {
    time.innerHTML = new Date().toLocaleTimeString()
    }, 1000)

function srr(){
  if (input.value == "" ) {
  alert("Please Add Name");
}else{
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=62d79c2ada4acbf3a2cfc5efb32adf54`)
  .then(res => res.json())
  .then(data => {
 //   console.log(data)
    country.innerHTML = `Country : ${data.sys.country}`;
    city.innerHTML = data.name;
    haze.innerHTML = data.weather[0].main;
    let temperature = data.main.temp - 273.15;
    temp.textContent = `${temperature.toFixed(1)}°c`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    wind.innerHTML = `Wind: ${data.wind.speed} km/h`;
    
  })

  .catch(err => console.log(err));
}
   input.value = "";

}
