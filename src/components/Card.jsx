import axios from "axios"
import { useState, useEffect} from "react"
import './card.css'
import Rainy from "../assets/rain.jpg";
import PartlyCloudy from "../assets/cloudy_sun.jpg"
import Cloudy from "../assets/cloudy.jpg"
import Sunny from "../assets/sunny.jpg"


function Card({ ciudades })  {

  const [ciudad, setCiudad] = useState("")
  const [celcius, setCelsius] = useState("")
  const [clima, setClima] = useState("")
  const [image, setImage] = useState()
  
  const changeData = async (e) => {
    
    let found = ciudades.find(element=> element.name == e.currentTarget.value)
    let grados = found.latlong.join()
    
    await axios.get(`http://api.weatherunlocked.com/api/current/${grados}?app_id=d2d8fdb9&app_key=fdd8dcfd0060394832bca1dda09ed035`)
    .then(res => {setClima(res.data.wx_desc);
      setCelsius(res.data.temp_c);
      console.log(res.data)
      setCiudad(found.name);
    
      switch (res.data.wx_desc){
        case "Partly cloudy" : setImage(PartlyCloudy)
        
        break;
        case "Cloudy":
        case "Mostly cloudy" : setImage(Cloudy);

        break;
        case "Rain Shower": setImage(Rainy);

        break;
        case "Sunny skies":
        case "Clear skies" : setImage(Sunny);
        
        break;
      }
    })
    
  }
  
  return(
    <div>
      <label>Elige la ubicacion:</label>
        <select  onChange={(e) => changeData(e)}>
          {ciudades && ciudades.map(ciudad => <option>{ciudad.name}</option>)}
        </select>
        <h3>📍{ciudad}</h3>
        <img src={image} width={"100px"} alt="imagen"/>
        <h3>{celcius}°</h3>
        <h4>{clima}</h4>
        
        
    </div>
  ) 
}

export default Card