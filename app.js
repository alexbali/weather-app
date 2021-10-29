// require('dotenv').config();
// console.log(require('dotenv').config())

window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureTimeZone = document.querySelector('.location-timezone');
    searchbar = document.getElementById('search-bar');
    searchIcon = document.getElementById('search-icon');
    console.log(searchIcon)
    
    searchbar.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter') {
            // console.log(e.target.value);
            if (e.target.value != ""){
                console.log("not empty")
                cityByName(e.target.value);
            }
        }
    });

    searchIcon.addEventListener('click', () =>{
        console.log(searchbar.value);
        if (searchbar.value != ""){
            cityByName(searchbar.value)
        }            
    });
   
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            // console.log(position);
            // grab what we need here for weather
            
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long, lat);
            // var apiKey = process.env.MY_API;
            // console.log(apiKey);
            const req = `http://api.weatherapi.com/v1/current.json?key=713ff24050144147a7981439212810&q=${lat},${long}`;
            console.log(req)

            fetch(req).then(response => {
                response.json().then(values =>{
                    console.log(values);
                    const {feelslike_c, condition} = values.current;
                    const {name} = values.location;
                    // console.log(feelslike_f);
                    // console.log(condition.text);
                    // set the DOM elements from the API
                    temperatureDegree.textContent = feelslike_c;
                    temperatureDescription.textContent = condition.text;
                    temperatureTimeZone.textContent = name;
                    let temperatureIcon = document.querySelector('.icon');
                    temperatureIcon.src = condition.icon;
                })
            });
        });

    }
    else{
        h1.textContent = "Enable Location Services"
    }

    function setIcons(icon, iconID){
        const skycon = new skycon({color: "white"})
    }

    function cityByName(cityName) {
        const req = `http://api.weatherapi.com/v1/current.json?key=713ff24050144147a7981439212810&q=${cityName}`;
        fetch(req).then(response => {
            if (response.status === 400) {
                alert("search returned no values");
                return "invalid";
                // console.log(response.status)
            }
            response.json().then(values =>{
                console.log(values);
                const {feelslike_c, condition} = values.current;
                const {name} = values.location;
                // console.log(feelslike_f);
                // console.log(condition.text);
                // set the DOM elements from the API
                temperatureDegree.textContent = feelslike_c;
                temperatureDescription.textContent = condition.text;
                temperatureTimeZone.textContent = name;
                let temperatureIcon = document.querySelector('.icon');
                temperatureIcon.src = condition.icon;
            })
        });
    }
});