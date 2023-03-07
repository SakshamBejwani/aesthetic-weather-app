import { serverApiUrl } from "../index";

export const  getWeatherByLocation = (location, callback) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('X-RapidAPI-Key', '3659c76eb1msh1044ba32875b7bfp193861jsn57825c109009');
    headers.append('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');
        
    fetch(serverApiUrl+'?page=1&size=50',
        {method: 'GET', headers})
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}