import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Searchbutton from './Components/Button/Searchbutton';
import Firstdropdown from './Components/Dropdown/Firstdropdown';
import Fivedropdown from './Components/Dropdown/Fivedropdown';
import Fourdropdown from './Components/Dropdown/Fourdropdown';
import Seconddropdown from './Components/Dropdown/Seconddropdown';
import Thirddropdown from './Components/Dropdown/Thriddropdown';

function App() {
 
  

    return (
    <div className='drop-class'>
        
        <div>
         <Firstdropdown></Firstdropdown>
        </div>
        <div>
          <Seconddropdown></Seconddropdown>
        </div>
        <div className='line' >
          <span></span>
        </div>
        <div className='ss'>
          <Thirddropdown></Thirddropdown>
        </div>
        <div>
          <Fourdropdown></Fourdropdown>
        </div>
        <div>
          <Fivedropdown></Fivedropdown>
        </div>
        <div >
          <Searchbutton></Searchbutton>
        </div>
        
    
 
 
 
       
                
       
    </div>
    );
}

export default App;