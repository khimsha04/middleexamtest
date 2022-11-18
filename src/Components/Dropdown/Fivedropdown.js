import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import '../Dropdown/Firstdropdown.css';
import React from 'react';


function Fivedropdown() {

  return (
    <div >
      
        <div className='w-70'>
          <MDBDropdown className='m-4 '>
            <MDBDropdownToggle className='drop-1'>All models</MDBDropdownToggle>
            <MDBDropdownMenu>
            <MDBDropdownItem link>Another action</MDBDropdownItem>
            <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
    </div>
  );
}

export default Fivedropdown;
