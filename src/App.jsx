import Card from './components/Card'
import {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'

function App() {

  const [ciudades, setCiudades] = useState();
  const [cards, setCards] = useState([]);
  
  const GetAllCities = async () => {
    let array = []
    await axios.get("https://restcountries.com/v3.1/all/")
    .then(res => res.data.forEach((e) =>  {array.push({name: `${e.capital}, ${ e.name.common }`, latlong: e.latlng })}))//guardo solo el nombre, la capital y latitud y longitud
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

  return (
    <>
      <h1>ClimApp</h1>
      <SearchBar ciudades={ciudades} cards={cards} handleChangeCards={handleChangeCards}></SearchBar>
      <div>{cards.map( card => 
        <Card ciudad ={card.ciudad}
              celcius={card.celcius}
              clima={card.clima}>
        </Card>
      )}</div>
      
    
    </>
  )
}

export default App

