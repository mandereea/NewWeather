import { Calculator} from "./Classes/Calculator.js";

//creates and renders hourly forecast in DOM
class Hourly{
    constructor(hourly){
        this.hourly = hourly;
    }
    async renderHourly(){
            for(let i=0; i<this.hourly.length; i++){
                const hourlyDiv = document.createElement('div');
                hourlyDiv.classList.add("hour-div");

                const hour = Calculator.timeConverter(this.hourly[i].dt)[3];
                const iconSource = Calculator.getIcon(this.hourly[i]);
                
                const celsius = Calculator.toCelsius(this.hourly[i].temp)
                const celsiusFeel = Calculator.toCelsius(this.hourly[i].feels_like);
                const sky = Calculator.capitalize(this.hourly[i].weather[0].description);
                
                hourlyDiv.innerHTML = `<span class="time">${hour}.00</span>
                                            <img src="${iconSource}"class="icon"/>
                                           <span class="hour-temp">${celsius}&deg;C</span>
                                           <span class ="hour-temp">Real feel ${celsiusFeel}&deg;C</span>
                                           <span class="sky">${sky}</span>`

                document.querySelector('.hour-forecast').appendChild(hourlyDiv);
                
            }
    }
}

export { Hourly }