$(document).ready(function() {
	mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbmFteWphayIsImEiOiJja2Z4c3Q1enMxcXF6MnRzODR1YjN6cGUwIn0.TnXSdpURxCs9Oh3Blfrw2Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/dianamyjak/ckg1ys0gf07yc19mknu5a9k4b',
center: [13.314860, 65.832084],
zoom: 8
});
 
var marker = new mapboxgl.Marker()
.setLngLat([13.216520, 65.828306])
.addTo(map);
    
    
var marker = new mapboxgl.Marker()
.setLngLat([13.194957, 65.830542])
.addTo(map);
    
    
    var marker = new mapboxgl.Marker()
.setLngLat([14.553030, 68.236062])
.addTo(map);
    
        var marker = new mapboxgl.Marker()
.setLngLat([12.944906, 65.547346])
.addTo(map);
    
    var marker = new mapboxgl.Marker()
.setLngLat([12.578349, 65.940234])
.addTo(map);
    
});


       $(document).ready(function() {
            // get the weather data
            fetch( "http://api.openweathermap.org/data/2.5/weather?q=mosjøen,No&units=metric&appid=fa72bca06b6255e2876eb6cb2c4c8275" ).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here
                console.log(data); // show what's in the json
                $('#result').append(
                    '<div class="weatherInfo">' +
                    data.weather[0].main +
                    '<p> tempraturen er:  ' +
                    data.main.temp + 
                    ' Degr </p>' +
                    '<figure><img src="http://openweathermap.org/img/w/' +
                    data.weather[0].icon +
                    '.png" alt="Vejret lige nu : ' +
                    data.weather[0].main +
                    '"></figure>' +
                    '</div>');
                // here are the icons: https://openweathermap.org/weather-conditions 
            }).catch(err => {
                // Do something for an error here
                console.log('There was an error ...');
            });
        }); // document ready end