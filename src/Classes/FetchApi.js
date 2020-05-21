class FetchApi{
    
    static async getApiResponse(url,lat, lon){
        const responseServer = await fetch(`${url}lat=${lat}&lon=${lon}&appid=40548cc5b12a46ee9418e263dd707583`);
        const response = responseServer.json();
        //console.log(response);
        return response;
    }
}
export{FetchApi}