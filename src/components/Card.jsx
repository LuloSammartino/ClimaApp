import axios from "axios"
import { useState} from "react"
import './card.css'


function Card({ min, max, ciudades })  {

  const [ciudad, setCiudad] = useState("")
  const [celcius, setCelsius] = useState("")
  const [clima, setClima] = useState("")
  const [image, setImage] = useState()
   
  const changeData = async (e) => {
    let found = ciudades.find(element=> element.name == e.currentTarget.value)
    let grados = found.latlong.join()
    setCiudad(e.currentTarget.value)

    await axios.get(`http://api.weatherunlocked.com/api/current/${grados}?app_id=d2d8fdb9&app_key=fdd8dcfd0060394832bca1dda09ed035`)
    .then(res => {setClima(res.data.wx_desc);
                  setCelsius(res.data.temp_c);
    })
    
   
    

  }
  
  return(
     <div>
      <label>Elige la ubicacion:</label>
        <select  onChange={(e) => changeData(e)}>
          {ciudades && ciudades.map(ciudad => <option>{ciudad.name}</option>)}
        </select>
        <h3>📍{ciudad}</h3>
        <img src='../assets/rain.jpg'  width='100' height='100' alt="imagen"></img>
        <h3>{celcius}°</h3>
        <h4>{clima}</h4>
        
        
    </div>
  ) 
}

export default Card