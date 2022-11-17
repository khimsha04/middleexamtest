import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import '../Dropdown/Firstdropdown.css';

function Firstdropdown() {

  return (
    <div >
      
        <div className='w-70'>
          <MDBDropdown className='m-4 '>
            <MDBDropdownToggle className='drop-1'>Automobile</MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
    </div>
  );
}

export default Firstdropdown;
