// api key : https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

const searchBox = document.querySelector(".serach")
const searchIcon = document.querySelector(".search-btn")


const apiKey = "44a539edf40a314e040a4c297c43d3d3"
async function checkWether(city) {
    const response = await fetch( ` https://api.openweathermap.org/data/2.5/weather?units=metric&q=` + city + `&appid=${apiKey}` )

    var data = await response.json()
    console.log(data)

    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "<sup>o</sup>" 
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".flike").innerHTML = Math.floor(data.main.feels_like) + "<sup>o</sup> C"
    document.querySelector(".visi").innerHTML = Math.round((data.visibility / 1000)) + " Km"
    document.querySelector(".wsped").innerHTML = data.wind.speed + " M/S"
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
}

searchIcon.addEventListener("click", ()=> {
    checkWether(searchBox.value)
})