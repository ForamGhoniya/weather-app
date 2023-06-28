function updateTime() {
    let date = new Date();
    let dates = date.getDate();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let name = month[date.getMonth()];
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const day = days[date.getDay()];


    document.getElementById('display-date').innerHTML = dates + " " + name + ", " + day + " ";

}
setInterval(updateTime, 1000);

let search = document.querySelector(".searchIcon");

function fetchData() {
    let city = document.getElementById("cityName").value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`)
        .then((response) => response.json())

        .then((response) => {

            document.getElementById("city").innerHTML = `${response.name}`;
            document.getElementById("country").innerHTML = `${response.sys.country}`;
            document.getElementById("temp--weather").innerHTML = `${parseInt(response.main.temp.toString())}°C`;
            document.getElementById("weather-desc").innerHTML = `${response.weather[0].description}`;
            document.getElementById("display-humidity").innerHTML = `${response.main.humidity}%`;
            document.getElementById("wind-speed").innerHTML = `${response.wind.speed}km/h`;
            document.getElementById("display-pressure").innerHTML = `${response.main.pressure}mb`;
            document.getElementById("coord").innerHTML = `${response.coord.lon}`;
        }
        );
}
search.addEventListener("click", () => {
    fetchData()
});


