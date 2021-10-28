window.addEventListener('load', ()=>{
    let long;
    let lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            // console.log(position);
            // grab what we need here for weather
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long, lat);

            const req = `http://api.weatherapi.com/v1/current.json?key=713ff24050144147a7981439212810&q=${lat},${long}`;
            console.log(req)

            fetch(req).then(response => {
                response.json().then(values =>{
                    console.log(values);
                })
            });
        });



    }else{
        h1.textContent = "Enable Location Services"
    }
});