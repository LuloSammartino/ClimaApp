import { useState, useEffect} from "react"
import './card.css'
import Rainy from "../assets/rain.jpg";
import PartlyCloudy from "../assets/cloudy_sun.jpg"
import Cloudy from "../assets/cloudy.jpg"
import Sunny from "../assets/sunny.jpg"
import Haze from "../assets/haze.png"
import Snow from "../assets/snow.jpg"


function Card({  ciudad, celcius, clima })  {

  const [image, setImage] = useState()
  
    
  useEffect(() => {switch (clima){
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
        case "Haze": setImage(Haze);
        
        break;
        case "Light Snow": setImage(Snow);

        break;
      }}, [])
      
    
    
  
  return(
    <div>
        <h3>📍{ciudad}</h3>
        <img src={image} width={"100px"} alt="imagen"/>
        <h3>{celcius}°</h3>
        <h4>{clima}</h4>
        
        
    </div>
  ) 
}

export default Card