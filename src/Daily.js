import { Calculator} from "./Classes/Calculator.js";
import { DayDetails } from "./DayDetails.js";

//for the second half of the header - gathers and creates DOM elements for daily forecast
class Daily{
    constructor(daily){
        this.daily = daily
    }
    async render(){
        const dailyBanner = document.querySelector(".dailyBanner")

        for(let i=0; i<this.daily.length-1; i++){
            const dailyShortDiv = document.createElement('div');
            dailyShortDiv.classList.add('daily-short');

            const day = Calculator.timeConverter(this.daily[i].dt)[5];
            const iconSource = Calculator.getIcon(this.daily[i]);

            const dayMin = Calculator.toCelsius(this.daily[i].temp.min);
            const dayMax = Calculator.toCelsius(this.daily[i].temp.max);

            dailyShortDiv.innerHTML = `<p>${day}</p>
                                    <img src="${iconSource}"/>
                                    <p class="daily-temp">
                                        <span style="color:#EC6E4C">${dayMax}&deg;C</span>
                                        <span>${dayMin}&deg;C </span>
                                    </p>
                                    <p><i class="arrow down"></i></p>`
            //adding event listener for displaying the (clicked) day's details 
            dailyShortDiv.addEventListener('click', () =>{
                document.querySelector('.day-container').innerHTML="";
                const thisDayDetails = new DayDetails(this.daily[i]);
                thisDayDetails.render();
            });          
            dailyBanner.appendChild(dailyShortDiv);
        }
    }
}
export{ Daily }