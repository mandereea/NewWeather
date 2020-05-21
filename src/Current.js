import { Calculator} from "./Classes/Calculator.js";
//for the first half of the header - gathers and creates DOM elements for current weather
class Current{
    constructor(todayData){
        this.todayData = todayData;
    }
    async render(){
        const todayShortContainer = document.querySelector('.location-weather');

        this.date = Calculator.getDate(this.todayData.dt);
        this.iconSrc = Calculator.getIcon(this.todayData);
    
        this.celsiusReal = Calculator.toCelsius(this.todayData.temp);
        this.celsiusFeel = Calculator.toCelsius(this.todayData.feels_like);
        this.fahr = Calculator.toFahrenheit(this.todayData.temp);
        
        this.description = Calculator.capitalize(this.todayData.weather[0].description);
      

        todayShortContainer.innerHTML = `<div>
                                            <p>WEATHER</p>
                                            <h1 style="margin:0;">HERE</h1>
                                            <span>${this.date}</span>
                                        </div>
                                        <div>
                                            <img src="${this.iconSrc}"/>
                                            <h3 style="margin-top:-1em;">${this.description}</h3></div>
                                         
                                        <div><h2 class="real">${this.celsiusReal} &deg;C / <span style="font-size:0.6em;">${this.fahr} F</span></h2>
                                            <p style="margin-top:1em;">Real feel: ${this.celsiusFeel} &deg;C</p>
                                        </div>`
                                        
                                         
        return todayShortContainer
    }
}
export { Current }






 
