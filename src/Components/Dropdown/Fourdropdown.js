import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../Dropdown/Firstdropdown.css';

function Fourdropdown() {

  return (
    <div >
      
        <div className='w-70 margin20px'>
        <select >
            <option>All makes</option>
            <option value={'Arctic Cat'}>Arctic Cat</option>
            <option value={'Can-Am'}>Can-Am </option>
            <option value={'Honda'}>Honda</option>
            <option value={'Polaris'}>Polaris</option>
            
        </select>
        </div>
    </div>
  );
}

export default Fourdropdown;
