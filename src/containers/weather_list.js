import React ,{Component} from 'react';
import {connect} from 'react-redux';
class WeatherList extends Component{
   constructor(props){
     super(props);
     this.renderWeather=this.renderWeather.bind(this);
   }
   renderWeather(cityData){
     const name=cityData.city.name;
     return(
        <tr key={name}>
          <td>{name}</td>
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
