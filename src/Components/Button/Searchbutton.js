import axios from 'axios';
import { useState } from 'react';
import '../Dropdown/Firstdropdown.css';
function Searchbutton(){

  const [name,setName] = useState('')
  const handleSearch = ()=>{
  axios.get('https://bid.cars/app/search/request?search-type=filters&type=Automobile&year-from=1900&year-to=2021&make=American%20Motors&model=All&auction-type=All&fbclid=IwAR21MNDHwL_36u5VXY0grK3KoVkhEDTEf8QGi7WJP5xeJoPpIfNxT9CrnKg')
  .then(function (response) {
    // handle success
    setName(response.data);
  })
  
  }
 
return(
  <div className=' margin20px'>

    <button onClick={handleSearch} className='button' > Search </button>
  </div>
)
}

export default Searchbutton;