

import React from 'react'
import {useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import pressure from '../assets/pressure.svg'
// import wind_speed from '../assets/wind_speed.svg'
// import humidity from '../assets/humidity.svg'
// import sunrise from '../assets/sunrise.svg'
// import sunset from '../assets/sunset.svg'
import CardContent from '@material-ui/core/CardContent';


function Today({generalData}) {
  
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    const [humidity, setHumidity] = useState("");
    const [visibility, setVisibility] = useState("");
    const [windspeed, setWineSpeed] = useState("");
    const [wicon, setWicon] = useState("");

    useEffect(()=>{
       setTemperature(Math.round((generalData.main.temp - 273.15) * 9/5 + 32));
        setDesc(generalData.weather[0].description);
        setName(generalData.name);
        setHumidity(generalData.main.humidity);
        setVisibility(generalData.visibility / 1000);
        setWineSpeed(generalData.wind.speed);
        setWicon(generalData.weather[0].icon);  
    },[generalData])
       
console.log("the state variables", temperature,desc,name,humidity,visibility,windspeed,wicon)


    return(
        <div>
<h1>Today's Weather
    <br></br>
   
</h1>
<div id="card" className="weather">
          <div className="details">
            <div className="temp">
              {temperature}
              <span>&deg;</span>
            </div>
            <div className="right">
              <div id="summary">{desc}</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>{name}</div>
            </div>
          </div>
          <img className="weatherimg" alt="image1" src={`${wicon}.svg`} />
          <div className="infos">
            <img
              alt="humidity1"
              className="humidityimg"
              style={{ width: "5", height: "5" }}
              src="humidity.svg"
            ></img>
            <div className="humidity">Humidity {humidity}%</div>
            <img
              alt="visibility1"
              className="visibilityimg"
              style={{ width: "5", height: "5" }}
              src="visibility.svg"
            ></img>
            <div className="visibility">Visibility {visibility} km</div>
            <img
              alt="windspeed1"
              className="windimg"
              style={{ width: "5", height: "5" }}
              src="wind.svg"
            ></img>
            <div className="windspeed">Wind Speed {windspeed} km</div>
          </div>
        </div>



</div>
)
}

export default Today