//a collection of fcts that are needed in multiple places
class Calculator{

    static  toCelsius = temp => Math.floor(temp - 273.15);
    static toFahrenheit = temp => Math.floor(temp * 9/5 - 459.67);

    static getIcon = obj => `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    static capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

    static timeConverter(timestamp){
        const a = new Date(timestamp * 1000);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const days = ['Sunday','Monday','Tuesday','Wednesdy','Thursday','Friday','Saturday']
       
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        
        const day = a.getDate();
        const dayWeek = days[a.getDay()];
        
        let hour = a.getHours();
        if(hour<10){
            hour = "0"+hour;
        }
        const min = a.getMinutes();
        
        const timeData =[year, month, day, hour, min,dayWeek]
        return timeData;
      }
    static getDate = obj =>  Calculator.timeConverter(obj)[1] +" "+Calculator.timeConverter(obj)[3]+", "+Calculator.timeConverter(obj)[0];
    
    static getSunRiseSet = obj => [Calculator.timeConverter(obj.sunrise)[3] +"." + Calculator.timeConverter(obj.sunrise)[4],
                                   Calculator.timeConverter(obj.sunset)[3] +"." + Calculator.timeConverter(obj.sunset)[4]];
    
    static compareTemp = (real, feel) => real < feel ? true : false;
}   

export { Calculator }



  