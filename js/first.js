let cities = document.getElementById('cities')
let key = document.getElementById('keyword')
let button = document.getElementById('buttons')
let humidity = document.getElementById('humidity')
let temp = document.getElementById('temp')
let wind = document.getElementById('wind')
let color = document.querySelector('body')
const container = document.querySelector('#container')



let url = "http://api.openweathermap.org/data/2.5/weather?q=marseille&appid=36e28d715d628ea866c2c43cbc5edd39";
console.log();

function omega (x) { 
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=36e28d715d628ea866c2c43cbc5edd39&units=metric`)

.then(response => response.json())
.then((data) => {
  console.log(data)
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", `
      <p>Température est de = ${data.main.temp} C°</p>
      <p>Humidité est de = ${data.main.humidity}</p>
      <p>La vitesse du vent est de = ${data.wind.speed}</p>
    `);
  
    let weatherInfo = data.weather[0].main;
    console.log(weatherInfo);
    
    if (weatherInfo == "Rain") {
      document.body.style.backgroundImage = "url('img/rain.jpg')"; 
    } else if (weatherInfo == "Clouds") {
      document.body.style.backgroundImage = "url('img/cloudy.jpg')"; 
    } else if (weatherInfo == "Clear") {
      document.body.style.backgroundImage = "url('img/clear.jpg')";
    } else if (weatherInfo == "Snow"){
      document.body.style.backgroundImage = "url(̀'img/winter.jpg')";
    }
  })
}

button.addEventListener('click', (event) => {
    omega (key.value);
    event.preventDefault();
    //console.log(key.value);
})

