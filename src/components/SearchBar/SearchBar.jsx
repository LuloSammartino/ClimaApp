import axios from "axios"
import styles from "./SearchBar.module.css"
import { useState } from "react";




function SearchBar({ciudades, cards, handleChangeCards}){

const [searchResults, setResults] = useState(false);
const [searchedCities, setCities] = useState(ciudades.slice(0,10));


    const addCard = async(e) => {
    
    let found = ciudades.find(element=> element.name == e)
    let grados = found.latlong.join()
    
    await axios.get(`http://api.weatherunlocked.com/api/current/${grados}?app_id=d2d8fdb9&app_key=fdd8dcfd0060394832bca1dda09ed035`)
    .then(res => {
        handleChangeCards({
                ciudad:found.name ,
                celcius:res.data.temp_c,
                clima:res.data.wx_desc    
                    })   
                    }
        )
    setResults(false)    
}

    const searchCountry = (e) => {
    
    

    e.target.value ? setResults(true) :  setResults(false);
        
        let  result = ciudades.filter((el) => el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1,
    ).slice(0, 10)

    setCities(result)
    !result.length ? setResults(false) : null ;
}

return <main className={styles.contenedorPrincipal}>
    <label>Elige la ubicacion:</label>

    <input className={styles.nav} onChange={(e) => searchCountry(e)}></input>
    {searchResults  ?  <div className={styles.resultados}>{
    searchedCities.map(e => 
                        <span className={styles.options} onClick={() => addCard(e.name)}>{e.name}</span>)}
    </div> : null } 
    
    </main>
}

export default SearchBar