// Coordinates of Berlin
const lat = '52.518611';
const lon = '13.408333';

const apikey = '09d39cea254b700be42abc9ef4150f95';

// URL für die Query
const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&lang=de&appid=' + apikey + '';

let response = jQuery.ajax(url).done(function (data) {
    let temperature = data.main.temp;
    let place = data.name;
    let weather = data.weather;
    let description = weather[0].description;
    jQuery('#weather-temp').html('<span>' + temperature + '</span> C°');
    jQuery('#weather-desc').html('<span>' + description + '</span>');
});
