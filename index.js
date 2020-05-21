import { Weather } from "./src/Classes/Weather.js";
import { Banner } from "./src/Banner.js";
import { Hourly } from "./src/Hourly.js";

//requesting permision
if(!navigator.geolocation) {
        console.log("refused")
    } else {
        //retrieving and using coordinates to get weather data
        navigator.geolocation.getCurrentPosition(success, error);
    }

//fct for success
async function success(position){
      
        const weather = new Weather(position.coords.latitude.toFixed(2),position.coords.longitude.toFixed(2));
        await weather.getStructuredObject();
        
        let banner = new Banner(weather);
        banner.render();

        document.querySelector('.yesArr').addEventListener('click', (event) =>{
            const hourly = new Hourly(weather.hourly);
            hourly.renderHourly();
        });
        document.querySelector('.noArr').addEventListener('click',()=>{
            document.querySelector('.hour-forecast').innerHTML = "";
        })
       
        console.log(weather);
}
//fct for error
function error(){
    console.log("error")
}


  
 