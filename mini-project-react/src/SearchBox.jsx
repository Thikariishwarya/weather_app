import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="55ad6074df50e2ae91abcd96ce9109b1";

    let getWeatherInfo=async()=>{
      try{  let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonres=await res.json();
        let result={
            city:city,
            temp:jsonres.main.temp,
            tempMin:jsonres.main.temp_min,
            tempMax:jsonres.main.temp_max,
            humidity:jsonres.main.humidity,
            feelsLike:jsonres.main.feels_like,
            weather:jsonres.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err){
      throw err;
    }
    }
    let handleChange=(event)=>{
      setCity(event.target.value);
    };

    let handleSubmit=async(event)=>{
       try{ event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
       }catch(err){
        seterror(true);
       }
    }
    return(
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant='contained' type="submit">Search</Button>
            {error && <p style={{color:"red"}}>NO such Place exist!</p>}
            </form>
        </div>
    )
}