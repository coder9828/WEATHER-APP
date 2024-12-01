import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] =useState({
        city: "Jaipur",
        feels_like: 32.42,
        humidity: 89,
        temp: 27.62,
        tempMax: 27.62,
        tempMin: 27.62,
        weather: "light rain",
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
    <div style={{textAlign: "center"}}>
        <h1 style={{color : "#667BC6"}}>Weather App By Manan</h1>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <InfoBox info={weatherInfo}></InfoBox>
    </div>
    )
}