import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../Dropdown/Firstdropdown.css';

function Firstdropdown() {
 
  return (
    <div >
      
        <div   className='w-70 margin20px'>
        <select >
            <option value={'Automobile'}>Automobile</option>
            <option value={'Motorcycle'}>Motorcycle</option>
            <option  value={'ATV'}>ATV</option>
            <option value={'Snowmobile'}>Snowmobile</option>
            <option value={'Boat'}>Boat</option>
            <option value={'Trailer'}>Trailer</option>            
            
        </select>
        </div>
    </div>
  );
}

export default Firstdropdown;
