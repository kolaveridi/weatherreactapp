import React ,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
class WeatherList extends Component{
   constructor(props){
     super(props);
     this.renderWeather=this.renderWeather.bind(this);
   }
   renderWeather(cityData){
   if(cityData===undefined){
    name="Not in USA";
   temps=[];
   pressures=[];
   humidities=[];
   }
   else{
     var name=cityData.city.name;
      var  temps=cityData.list.map(weather=>weather.main.temp);
     var  pressures=cityData.list.map(weather=>weather.main.pressure);
     var humidities=cityData.list.map(weather=>weather.main.humidity);

   }




     console.log(temps);
     return(
        <tr key={name}>
          <td>{name}</td>
          <td><Chart data={temps} /></td>
          <td><Chart data={pressures} /></td>
          <td><Chart data={humidities} /></td>
        </tr>
     );
   }
  render(){
    console.log(this.props.weather);
    return(
     <table className="table table-hover">
     <thead>
       <tr>
        <th>City</th>
        <th>Temperature</th>
        <th>Pressure</th>
        <th>Humidity</th>
       </tr>
     </thead>
     <tbody>
       {this.props.weather.map(this.renderWeather)}
     </tbody>
     </table>
    );
  }
}

function mapStateToProps(state){
  return {weather:state.weather};
}
export  default connect(mapStateToProps)(WeatherList);
