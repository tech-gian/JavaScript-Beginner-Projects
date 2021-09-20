
// Useful links:
// https://www.metaweather.com/api/#locationsearch    ????
// https://openweathermap.org/current#cityid
// https://openweathermap.org/forecast5
// example: https://api.openweathermap.org/data/2.5/weather?q=London&appid=3265874a2c77ae4a04bb96236a642d2f
// https://api.unsplash.com/search/photos?query=Athens&client_id=yGdhv9PPMKQ2kaim7GymC4XjTLHCfc8-VqNOlgNIUgo
// api_key: 3265874a2c77ae4a04bb96236a642d2f

// https://youtu.be/dtKciwk_si4?t=30932
// https://www.uidesigndaily.com/posts/photoshop-weather-prognosis-day-156


const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const FORECAST_URL = (id) => {return `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=3265874a2c77ae4a04bb96236a642d2f`;}
const ICON_URL = (icon) => {return `https://openweathermap.org/img/wn/${icon}.png`;}
const IMG_URL = (query) => {return `https://api.unsplash.com/search/photos?query=${query}&client_id=yGdhv9PPMKQ2kaim7GymC4XjTLHCfc8-VqNOlgNIUgo`;}


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
// Add alt_description to all images

function display_locations(data, location) {
    var locations = document.getElementById("locations");
    locations.innerHTML = '';
    var counter = 0;

    for (var item in data) {
        if (data[item]['name'].includes(location)) {
            locations.innerHTML += `<h6 class="list-group-item">
            <a href="#" onclick="add_location('${data[item]['name']}', '${data[item]['country']}', ${data[item]['id']})" class="rounded list-group-item-action"><i class="fas fa-plus"></i>
            </a>&nbsp;&nbsp;&nbsp;${data[item]['name']}, ${data[item]['country']}</h6>`;

            ++counter;
            if (counter == 10) break;
        }
    }
}

function add_location(location_city, location_country, location_id) {
    var dropdown = document.getElementById("saved_locations");
    dropdown.innerHTML += `<a class="dropdown-item" id="${location_id}" href="#" onclick="display_forecast(${location_id})">${location_city}, ${location_country}</a>`;
    document.getElementById("locations").innerHTML = '';
}

const K_TO_C = (temp) => {return parseInt(temp - 273.15);}


function display_forecast(location_id) {
    document.getElementById("locations").innerHTML = '';
    document.getElementById("location-img").innerHTML = '';
    var forecast = document.getElementById("forecast");
    forecast.innerHTML = '';
    
    fetch(FORECAST_URL(location_id))
    .then(response => response.json())
    .then(data => {
        document.getElementById("dropdown-location").innerHTML = `${data['city']['name']}, ${data['city']['country']}`;

        // Display image
        fetch(IMG_URL(data['city']['name']))
        .then(resp => resp.json())
        .then(dat => {
            var location_table = document.getElementById("location-img");
            location_table.innerHTML += `<img class="img-fluid rounded" src="${dat['results'][0]['urls']['small']}">`;
        });


        var flag = true;
        var cur_date;
        var sum = 0;
        var counter = 0;
        var temp = new Date();
        var day_of_week = temp.getDay();
        for (var item in data['list']) {
            if (flag) {
                flag = false;
                cur_date = data['list'][item]['dt_txt'].split(" ")[0];
            }

            if (cur_date == data['list'][item]['dt_txt'].split(" ")[0]) {
                sum += K_TO_C(data['list'][item]['main']['temp']);
                counter++;
            }
            else {
                forecast.innerHTML += `<tr>
                    <th scope="row">${DAYS[day_of_week]}</th>
                    <td>${parseInt(sum / counter)} &#8451;</td>
                    <td><img src='${ICON_URL(data['list'][item]['weather'][0]['icon'].replace('n', 'd'))}'></td>
                </tr>`;

                cur_date = data['list'][item]['dt_txt'].split(" ")[0];
                sum = K_TO_C(data['list'][item]['main']['temp']);
                counter = 1;
                
                if (day_of_week == 6) day_of_week = 0;
                else day_of_week++;
            }            
        }
    });
}

