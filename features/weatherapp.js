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


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b6a20c093d78b4573edf3f989d9c56f5&units=metric`)
        .then((response) => response.json())

        .then((response) => {

            document.getElementById("display-temp").innerHTML = `${parseInt(response.main.temp.toString())}°C`;
            document.getElementById("display-humidity").innerHTML = `${response.main.humidity}%`;
            document.getElementById("wind-speed").innerHTML = `${response.wind.speed}km/h`;
            document.getElementById("weather-desc").innerHTML = `${response.weather[0].description}`;
            document.getElementById("weather-main").innerHTML = `${response.weather[0].main}`;
        }
        );
}
search.addEventListener("click", () => {
    fetchData()
});


