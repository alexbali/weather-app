// require('dotenv').config();
// console.log(require('dotenv').config())

window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureTimeZone = document.querySelector('.location-timezone');
   
    
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
                    const {feelslike_f, condition} = values.current;
                    const {name} = values.location;
                    // console.log(feelslike_f);
                    // console.log(condition.text);
                    // set the DOM elements from the API
                    temperatureDegree.textContent = feelslike_f;
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


});