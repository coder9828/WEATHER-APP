import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1666490342757-3de89db88ee9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpZ2h0JTIwcmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    // let info = {
    //     city: "Jaipur",
    // feels_like: 32.42,
    // humidity: 89,
    // temp: 27.62,
    // tempMax: 27.62,
    // tempMin: 27.62,
    // weather: "light rain",
    // }
    const HOT_URL ="https://images.unsplash.com/photo-1491929007750-dce8ba76e610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1666490342757-3de89db88ee9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpZ2h0JTIwcmFpbnxlbnwwfHwwfHx8MA%3D%3";

    return(
        <div className="InfoBox">
            {/* <h1>Weather Info- {info.weather}</h1> */}
            <div className='card'><Card sx={{ maxWidth: 345 }} style={{border: "5px solid skyblue", color:"gold"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temprature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Maximum Temprature = {info.tempMax}&deg;C</p>
          <p>Minimum Temprature = {info.tempMin}&deg;C</p>
          <p>Weather = {info.weather}</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels Like {info.feels_like}&deg;C</p>
          
        </Typography>
      </CardContent>

    </Card></div>
      
        </div>
    )
}