import Cards from './components/Cards/Cards'
import {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar/SearchBar'
import styles from "./App.module.css"

function App() {

  const [ciudades, setCiudades] = useState([]);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState("C");
  
    const GetAllCities = async () => {
    let array = []
    await axios.get("https://restcountries.com/v3.1/all?fields=name,capital,latlng")

      .then(res => res.data.forEach((e) =>  { e.capital.length > 0 ?
                                            array.push({name: `${e.capital}, ${ e.name.common }`, latlong: e.latlng }) :
                                            array.push({name: `${e.name.common}`, latlong: e.latlng })}))
        
      .then(res => array.sort((a, b) => {  //Orden alfabetico del array
      if(a.name < b.name){
        return -1
      }                               
      if(a.name > b.name){
        return 1
      }
      return 0
    }))
    .then(response => setCiudades(array))
  }
  
  useEffect(() => {GetAllCities()}, [])

    const handleChangeCards = (card) =>{
    setCards([...cards, card])
  }

    const deleteCard = (ciudadParametro) =>{
    
    setCards(cards.filter((card) => card.ciudad != ciudadParametro) ) 
  }

  return ( <div className={styles.page}> 
  <header className={styles.header}>
    
    <h1>ClimApp</h1> 
    
      <SearchBar ciudades={ciudades} cards={cards} handleChangeCards={handleChangeCards}></SearchBar>
    </header>  
    
    
    <main className={styles.main}>
      <div className={styles.temperatureMode}>
        <section className={`${styles.sectionF} ${selected === "F" ? styles.active : ''}`}  onClick={() => setSelected("F")}>
          F°
        </section>

        <section className={`${styles.sectionC} ${selected === "C" ? styles.active : ''}`} onClick={() => setSelected("C")}>
          C°
        </section>

        <section className={`${styles.sectionK} ${selected === "K" ? styles.active : ''}`} onClick={() => setSelected("K")}>
          K°
        </section>
      </div>
      <Cards cards={cards} selected={selected} deleteCard={deleteCard}></Cards>
    
    </main>


    <footer className={styles.footer}>FOOTER</footer>
  </div>
  )
}

export default App

