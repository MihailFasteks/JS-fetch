
window.addEventListener('DOMContentLoaded', (event) => {
    // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
    //мой апи - 55719297ccb88fcc8d10bdfbe3f9faab

    // Замените 'CITY_NAME' на название города, для которого вы хотите получить прогноз погоды
    let userInput=document.querySelector("#city");
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    const wind=document.querySelector("#wind");
    
    userInput.addEventListener('input', function(){
        let city = userInput.value;
        // // Формируем URL для запроса к API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      // Отправляем GET-запрос к API
      fetch(url).then((response) => response.json()).then((data) => {

        weatherElement.innerHTML = `${city}`;
        const temperature = data.main.temp;
        const ct = data; // весь объект - результат
        console.log(ct);
        const description = data.weather[0].description;
        const icn = data.weather[0].icon;
        console.log(data.name);
        const windInfo=data.wind.speed;


        // const getTime = new Date(data.sys.sunrise); // закат
        // const fullTime = `${getTime.getHours()}: ${getTime.getMinutes()}: ${getTime.getSeconds()}`;
        // console.log(fullTime);

        cit.innerText = data.name + " Страна: " + `${data.sys.country}`;
        // document.getElementById("sunrise").innerHTML = ` Закат: ${fullTime}`;

        iconw.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;
        wind.innerText="Скорость ветра "+windInfo;
    })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
    })
    

  
});