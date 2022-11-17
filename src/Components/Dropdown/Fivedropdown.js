import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle,  } from 'mdb-react-ui-kit';
import '../Dropdown/Firstdropdown.css';
import React from 'react';


function Fivedropdown() {

  return (
    <div >
      
        <div className='w-70'>
          <MDBDropdown className='m-4 '>
            <MDBDropdownToggle className='drop-1'>All makes</MDBDropdownToggle>
            <MDBDropdownMenu>
            <input type={'text'}></input>
              
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
    </div>
  );
}

export default Fivedropdown;
