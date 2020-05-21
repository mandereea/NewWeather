import { Current } from "./Current.js";
import { Daily } from "./Daily.js";

// gathers and renders Current and Daily in header
class Banner{
    constructor(weather){
        this.weather=weather;
    }
    render(){
         this.renderCurrent();
         this.renderDaily();
    }
    renderCurrent(){
        const current = new Current(this.weather.current);
        current.render();
    }
    renderDaily(){
        const daily = new Daily(this.weather.daily);
        daily.render();
    }
}
export { Banner }
