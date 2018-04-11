import axios from 'axios';
const API_KEY='4b57ce179f3560a914e8e19f3feaba5b';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchweather(city){
  console.log('city is '+city);
  const url=`${ROOT_URL}&q=${city},us`;
  // this returns a ReduxPromise
  const request=axios.get(url);
  console.log('url is '+url);
  console.log('Request is: ',request);
  return{
    type:FETCH_WEATHER,
    payload:request
  };
}
