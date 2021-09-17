
// Useful links:
// https://www.metaweather.com/api/#locationsearch    ????
// https://openweathermap.org/current#cityid
// https://openweathermap.org/forecast5
// example: https://api.openweathermap.org/data/2.5/weather?q=London&appid=3265874a2c77ae4a04bb96236a642d2f
// USE FREE IMAGES
// api_key: 3265874a2c77ae4a04bb96236a642d2f

// https://youtu.be/dtKciwk_si4?t=30932
// https://www.uidesigndaily.com/posts/photoshop-weather-prognosis-day-156



const FORECAST_URL = (id) => {return `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=3265874a2c77ae4a04bb96236a642d2f`;}


var location_input = document.getElementById("location-input");
location_input.addEventListener("keydown", function(e) {
    if (e.key === 'Enter') {
        search_location(location_input.value);
    }
});

function search_location(location) {
    fetch('./Cities.json')
    .then(response => response.json())
    .then(data => display_locations(data, location));
}

// TODO:
// Modify add_location() to do exactly what u want
// Display weather info, photos, icons etc

function display_locations(data, location) {
    var locations = document.getElementById("locations");
    locations.innerHTML = '';
    var counter = 0;

    for (var item in data) {
        if (data[item]['name'].includes(location)) {
            locations.innerHTML += `<h6 class="list-group-item">
            <a href="#" onclick="add_location('${data[item]['name']}', ${data[item]['id']})" class="rounded list-group-item-action"><i class="fas fa-plus"></i>
            </a>&nbsp;&nbsp;&nbsp;${data[item]['name']}, ${data[item]['country']}</h6>`;

            ++counter;
            if (counter == 10) break;
        }
    }
}

function add_location(location_final, location_id) {
    var dropdown = document.getElementById("saved_locations");
    dropdown.innerHTML += `<a class="dropdown-item" id="${location_id}" href="#" onclick="display_forecast(${location_id})">${location_final}</a>`;
    document.getElementById("locations").innerHTML = '';
}

const K_TO_C = (temp) => {return parseInt(temp - 273.15);}


function display_forecast(location_id) {
    document.getElementById("locations").innerHTML = '';
    var forecast = document.getElementById("forecast");
    forecast.innerHTML = '';
    
    fetch(FORECAST_URL(location_id))
    .then(response => response.json())
    .then(data => {
        for (var item in data['list']) {
            forecast.innerHTML += `<h6>${data['list'][item]['dt_txt']} &nbsp;${K_TO_C(data['list'][item]['main']['temp'])} C</h6>`;
        }
    });
}

