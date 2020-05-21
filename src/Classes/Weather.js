import { FetchApi } from "./FetchApi.js";

//structures the response from server 
class Weather{
    constructor(lat,long){
        this.lat = lat;
        this.long= long;
    }
    async getStructuredObject(){
        const response = await FetchApi.getApiResponse('https://api.openweathermap.org/data/2.5/onecall?', this.lat, this.long);
        //this.timeZone = await response.timezone;
        this.current = await response.current;
        this.hourly = await response.hourly;
        this.daily = await response.daily;
    }
}
export { Weather }