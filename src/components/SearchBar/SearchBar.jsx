import axios from "axios"





function SearchBar({ciudades, cards, handleChangeCards}){

    const changeData = async(e) => {
    
    let found = ciudades.find(element=> element.name == e.currentTarget.value)
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
}

return <div>
    <label>Elige la ubicacion:</label>
        <select  onChange={(e) => changeData(e)}>
            {ciudades && ciudades.map(ciudad => <option>{ciudad.name}</option>)}
        </select>
    </div>
}

export default SearchBar