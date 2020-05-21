import { Calculator} from "./Classes/Calculator.js";

//gathers and creates DOM representation for a day's weather details  
class DayDetails{
    constructor(day){
        this.day = day;
    }
    async render(){
        const dayDetailsDiv = document.querySelector('.day-container');
        
        const rise = Calculator.getSunRiseSet(this.day)[0];
        const set = Calculator.getSunRiseSet(this.day)[1];

        const iconSource = Calculator.getIcon(this.day);
        const description = Calculator.capitalize(this.day.weather[0].description);

        const celsiusDay = Calculator.toCelsius(this.day.temp.day);
        const celsiusFeel = Calculator.toCelsius(this.day.feels_like.day);
        const compareDay = Calculator.compareTemp(celsiusDay,celsiusFeel);

        const celsiusNight = Calculator.toCelsius(this.day.temp.night);
        const celsiusNightFeel = Calculator.toCelsius(this.day.feels_like.night);
        const compareNight = Calculator.compareTemp(celsiusNight,celsiusNightFeel);

        const rain = this.day.rain ? this.day.rain : "No";
        
        const uvi = this.day.uvi;
        const wind = this.day.wind_speed;

        
        dayDetailsDiv.innerHTML = ` <div class="left">
                                        <h4 class="rise">Sunrise: ${rise}</h4>
                                        <p class="day-temp">Day temp: ${celsiusDay}&deg;C / <span>Feel:${celsiusFeel}&deg;C</span></p>
                                    </div>
                                    <div class="day-icon"><img src="${iconSource}"/>
                                         <h3>${description}</h3>
                                         <p>Rain: ${rain} | Uvi: ${uvi} | Wind: ${wind}</p>
                                         <i class="arrow up no-details"></i>
                                    </div>
                                    <div class="right">
                                        <h4 class="set">Sunset: ${set}</h4>
                                        <p class="night-temp">Night temp: ${celsiusNight}&deg;C / <span>Feel:${celsiusNightFeel}&deg;C</span></p>
                                    </div>`
                                   
                                   
                                    
        if(compareDay){
        document.querySelector('.day-temp>span').classList.add('warmer');
        } else{
        document.querySelector('.day-temp>span').classList.add('colder');
        } 

        if(compareNight){
            document.querySelector('.night-temp>span').classList.add('warmer');
        } else{
            document.querySelector('.night-temp>span').classList.add('colder');
        } 
        //fct for closing the day details div
        document.querySelector('.no-details').addEventListener('click',()=>{
            document.querySelector('.day-container').innerHTML="";
        })
        
    }
}
export { DayDetails } 
