function updateTime() {
    let date = new Date();
    let dates = date.getDate();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let name = month[date.getMonth()];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[date.getDay()];


    document.getElementById('display-date').innerHTML = dates + " " + name + ", " + day + " ";

}
setInterval(updateTime, 1000);

let search = document.querySelector(".searchIcon");

function fetchData() {
    let city = document.getElementById("cityName").value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b6a20c093d78b4573edf3f989d9c56f5&units=metric`)
        .then((response) => response.json())

        .then((response) => {
            console.log(response)

            document.getElementById("city").innerHTML = `${response.name}`;

            document.getElementById("country").innerHTML = `${response.sys.country}`;

            document.getElementById("temp--weather").innerHTML = `${parseInt(response.main.temp.toString())}°C`;

            document.getElementById("weather-desc").innerHTML = `${response.weather[0].description}`;

            document.getElementById("display-humidity").innerHTML = `${response.main.humidity}%`;

            document.getElementById("wind-speed").innerHTML = `${response.wind.speed}km/h`;

            document.getElementById("display-pressure").innerHTML = `${response.main.pressure}mb`;

            document.getElementById("lat").innerHTML = `${response.coord.lat}`;

            document.getElementById("lon").innerHTML = `${response.coord.lon}`;
            changeImage(response.weather[0].description);
        }
        );
}

function changeImage(weatherDescription) {

    const weatherImages = {
        ['scattered clouds']: '../assets/images/scattered-clouds.png',
        ['few clouds']: '../assets/images/few-clouds.png',
        ['broken clouds']: '../assets/images/broken-clouds.png',
        ['overcast clouds']: '../assets/images/33.gif',
        ['smoke']: '../assets/images/i',
        ['clear sky']: '../assets/images/11.gif',
        ['LightRain']: '../assets/images/44.gif',
        ['haze']: '../assets/images/haze.png',
    };

    const imgElement = document.getElementById('weather-image');


    if (weatherImages) {

        const imageUrl = weatherImages[weatherDescription];

        imgElement.src = imageUrl;
    } else {
        imgElement.src = '../assets/image/sunn.gif';
    }
}

var input = document.getElementById("cityName");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});
search.addEventListener("click", () => {
    fetchData()
});

