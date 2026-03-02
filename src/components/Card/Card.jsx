import { useState, useEffect } from "react"
import styles from './Card.module.css'
import Rainy from "../../assets/rain.webp";
import PartlyCloudy from "../../assets/cloudy_sun.webp"
import Cloudy from "../../assets/cloudy.webp"
import Sunny from "../../assets/sunny.webp"
import Haze from "../../assets/haze.png"
import Snow from "../../assets/snow.jpg"

function Card({ ciudad, celcius, clima, deleteCard, selected }) {

  const [image, setImage] = useState()


  useEffect(() => {
    switch (clima) {
      case "Partly cloudy": setImage(PartlyCloudy)

        break;
      case "Clouds":
      case "Mostly cloudy": setImage(Cloudy);

        break;
      case "Rain":
      case "Light Rain": setImage(Rainy);

        break;
      case "Clear":
      case "Clear skies": setImage(Sunny);

        break;
      case "Haze": setImage(Haze);

        break;
      case "Light Snow": setImage(Snow);

        break;
    }
  }, [clima])

  switch (selected) {
    case "K": celcius = celcius + 273;
      break;
    case "F": celcius = celcius + 9 / 5 * celcius + 32;
      break;
    default: celcius;
  }

  const displayTemp = Number.isFinite(celcius) ? Math.round(celcius) : celcius

  return (
    <main className={styles.card}>
      <button className={styles.cross} aria-label="Eliminar tarjeta" onClick={() => deleteCard(ciudad)}>×</button>
      <h3 className={styles.cardCity}>📍{ciudad}</h3>

      <div className={styles.insideCard}>
        <img className={styles.weatherImg} src={image} alt={clima || "clima"} />
        <h3 className={styles.temp}>{displayTemp}°</h3>
        <h4 className={styles.clima}>{clima}</h4>
      </div>



    </main>
  )
}

export default Card